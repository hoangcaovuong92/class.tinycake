<?php global $product; 
$class = new WC_Product_Variable($product->get_id());
$variations = $class->get_available_variations();
if ( empty( $variations ) && false !== $variations ) : ?>
<tr>
	<td>
		<a href="<?php echo esc_url( get_permalink( $product->get_id() ) ); ?>" title="<?php echo esc_attr( $product->get_title() ); ?>">
			<?php echo $product->get_image(); ?>
			<span class="product-title"><?php echo $product->get_title(); ?></span>
		</a>
		<?php if ( ! empty( $show_rating ) ) echo $product->get_rating_html(); ?>
	</td>
	<td>
		<?php echo $product->get_price_html(); ?>
	</td>
	<td>
	</td>
</tr>
<?php else :

foreach ($variations as $var) :
?>
<tr>
	<td>
		<a href="<?php echo esc_url( get_permalink( $product->get_id() ) ); ?>" title="<?php echo esc_attr( $product->get_title() ); ?>">
			<?php echo $product->get_image(); ?>
			<span class="product-title"><?php echo $product->get_title(); ?></span>
		</a>
		<?php if ( ! empty( $show_rating ) ) echo $product->get_rating_html(); ?>
		<div>
			<?php 
			$variation = wc_get_product($var['variation_id']);
			$title = $variation->get_formatted_name();
			$title = explode(')', $title);
			echo end($title);
			?>
		</div>
	</td>
	<td>
		<?= $var['price_html'];?>
	</td>
	<td>
	
		<form action="<?= get_permalink( wc_get_page_id( 'cart' ) ) ?>" method="POST">
			<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

			<?php
			do_action( 'woocommerce_add_to_cart_quantity' );
			woocommerce_quantity_input( array(
				'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
				'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
				'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(),
			) );
			do_action( 'woocommerce_after_add_to_cart_quantity' );
			?>

			<button type="submit" class="button alt"><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>

			<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

			<input type="hidden" name="add-to-cart" value="<?php echo absint( $product->get_id() ); ?>" />
			<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
			<input type="hidden" name="variation_id" class="variation_id" value="<?= $var['variation_id'] ?>" />
			<?php foreach ($var['attributes'] as $key => $value): ?>
				<input type="hidden" name="<?= $key ?>" value="<?= $value ?>" />
			<?php endforeach; ?>
		</form>
	</td>
</tr>

<?php 
endforeach;
endif; ?>
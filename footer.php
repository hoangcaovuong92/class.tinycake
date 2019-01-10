<?php
/**
 * The template for displaying the footer.
 *
 * @package flatsome
 */

global $flatsome_opt;
?>

</main><!-- #main -->

<footer id="footer" class="footer-wrapper">

	<?php do_action('flatsome_footer'); ?>

</footer><!-- .footer-wrapper -->

</div><!-- #wrapper -->

<?php wp_footer(); ?>


</body>
</html>
	<script type="application/javascript">
		
			var elenew=document.getElementsByClassName("success-color woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received");
					console.log(elenew);
					if (elenew[0]!=null){
					elenew[0].childNodes[0].innerHTML='Cảm ơn bạn đã chọn sản phẩm của Tiny Pretty Cake cho ngày Tết. <br/><strong>Tiny Pretty Cake sẽ gọi lại xác nhận đơn hàng trong 24h.</strong> <br/>Chúc bạn một "Tết khác biệt -> Năm dẫn đầu".';}
					//console.log("Hello");
					//alert("Hello");
		
	</script>
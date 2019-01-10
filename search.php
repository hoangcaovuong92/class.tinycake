<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */

get_header();
?>
<div id="content" class="blog-wrapper blog-archive page-wrapper">
	<?php 
		//get_template_part( 'template-parts/posts/layout', get_theme_mod('blog_layout','right-sidebar') ); 
		// get_template_part( 'template-parts/posts/archive-3-col' ); 
		wc_get_template_part( 'layouts/category', flatsome_option('category_sidebar'));
	?>
		<?php flatsome_posts_pagination(); ?>
</div><!-- .page-wrapper .blog-wrapper -->


<?php get_footer(); ?>
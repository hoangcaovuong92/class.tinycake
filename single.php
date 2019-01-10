<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */

get_header();

?>
<script type="text/javascript">
dataLayer.push({
    'event': 'google_tag_params',
    'remarketing_data': {   
dynx_itemid: 'REPLACE_WITH_VALUE',           //id của sản phẩm đang xem trên trang
dynx_pagetype: 'offerdetail',
dynx_totalvalue: REPLACE_WITH_VALUE,      //Giá bán của sản phẩm
};
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 978459618;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/978459618/?guid=ON&amp;script=0"/>
</div>
</noscript>

<div id="content" class="blog-wrapper blog-single page-wrapper">
	<?php get_template_part( 'template-parts/posts/layout', get_theme_mod('blog_post_layout','right-sidebar') ); ?>
</div><!-- #content .page-wrapper -->

<?php get_footer(); ?>

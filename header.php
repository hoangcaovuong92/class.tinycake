<!DOCTYPE html>
<!--[if IE 9 ]> <html <?php language_attributes(); ?> class="ie9 <?php flatsome_html_classes(); ?>"> <![endif]-->
<!--[if IE 8 ]> <html <?php language_attributes(); ?> class="ie8 <?php flatsome_html_classes(); ?>"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html <?php language_attributes(); ?> class="<?php flatsome_html_classes(); ?>"> <!--<![endif]-->
<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<meta name="google-site-verification" content="2cF8ltAGdwfaMO3y_8tqVIBIMrqrMPVh8CW4HrlRyB4" />

	<?php wp_head(); ?>

	<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4FlkxMf7mAN8vg3t12jfc-BW3Liie1t0&libraries=places&callback=initMap&language=vi&region=VI" async defer></script>-->
	<script type="application/javascript">
		
			var elenew=document.getElementsByClassName("success-color woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received");
					console.log(elenew);
					//elenew[0].childNodes[0].innerHTML="cám ơn đã đặt hàng, giảm 50";
					//console.log("Hello");
					//alert("Hello");
		
	</script>
</head>

<body <?php body_class(); // Body classes is added from inc/helpers-frontend.php?>>
<?php if ( function_exists( 'gtm4wp_the_gtm_tag' ) ) { gtm4wp_the_gtm_tag(); } ?>
<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e('Skip to content', 'flatsome'); ?></a>

<div id="wrapper">

<?php do_action('flatsome_before_header'); ?>

<header id="header" class="header <?php flatsome_header_classes(); ?>">
   <div class="header-wrapper">
	<?php
        get_template_part('template-parts/header/header', 'wrapper');
    ?>

	   	<!-- Load Facebook SDK for JavaScript -->
			<div id="fb-root"></div>
			<script>
				(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
 			</script>

			<!-- Your customer chat code -->
			<div class="fb-customerchat"
			  attribution="setup_tool"
			  page_id="193223657354638"
			  greeting_dialog_display="hide" 
			  minimized="false"  
			  logged_in_greeting="Chào bạn đến với Tiny Pretty Cake, vui lòng nhấn vào đây để được tư vấn"
			  logged_out_greeting="Chào bạn đến với Tiny Pretty Cake, vui lòng nhấn vào đây để được tư vấn">
			</div>
	   
	   		<script>
				window.onload = function(){
					// var elenew=document.getElementsByClassName("success-color woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received");
					// console.log(elenew);
					// elenew[0].childNodes[0].innerHTML="cám ơn đã đặt hàng, giảm 50";
					//console.log("Hello");
					//alert("Hello");
					var width = window.innerWidth;
					if(width < 500) { // Mobiles devices
						$("#pac-input").focusin(function() {
							$("#billing_address_2").parent().addClass('active-address-input-on-mobile');
							$('.map-wrapper').addClass('active-address-map-on-mobile');
						});
						$("#check-ok-button").click(function() {
							$("#billing_address_2").parent().removeClass('active-address-input-on-mobile');
							$('.map-wrapper').removeClass('active-address-map-on-mobile');
						});
					}

			   }
			   
			</script>
   </div><!-- header-wrapper-->
</header>

<?php do_action('flatsome_after_header'); ?>

<main id="main" class="<?php flatsome_main_classes(); ?>">
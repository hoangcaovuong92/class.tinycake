! function(t) {
    function e(o) {
        if (i[o]) return i[o].exports;
        var r = i[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}({
    0: function(t, e, i) {
        t.exports = i(81)
    },
    16: function(t, e) {
        t.exports = window.jQuery
    },
    81: function(t, e, i) {
        "use strict";

        function o(t) {
            if (jQuery(".cart-item .nav-dropdown").length) jQuery(".cart-item").addClass("current-dropdown cart-active"), jQuery(".shop-container").click(function() {
                jQuery(".cart-item").removeClass("current-dropdown cart-active")
            }), jQuery(".cart-item").hover(function() {
                jQuery(".cart-active").removeClass("cart-active")
            }), setTimeout(function() {
                jQuery(".cart-active").removeClass("current-dropdown")
            }, t);
            else {
                var e = jQuery.magnificPopup.open ? 0 : 300;
                e && jQuery.magnificPopup.close(), setTimeout(function() {
                    jQuery(".cart-item .off-canvas-toggle").click()
                }, e)
            }
        }
        i(82), i(83), i(84), i(85);
        var w = window.innerWidth;
        if(w < 640){
	        window.onscroll = function() {
			    if(200 > window.scrollY){
			    	jQuery('.nav-dark .cart-icon strong').css('margin-top', '0px');
			    }else{
			    	jQuery('.nav-dark .cart-icon strong').css('margin-top', '-20px');
			    }
			};
			window.onload = function() {
			    if(200 > window.scrollY){
			    	jQuery('.nav-dark .cart-icon strong').css('margin-top', '0px');
			    }else{
			    	jQuery('.nav-dark .cart-icon strong').css('margin-top', '-20px');
			    }
			};
        }
        var r = !1;
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (r = jQuery(".has-image-zoom .slide").easyZoom({
            loadingNotice: "",
            preventClicks: !1
        })), jQuery("table.my_account_orders").wrap('<div class="touch-scroll-table"/>'), jQuery("a.woocommerce-review-link").click(function(t) {
            jQuery.scrollTo(".reviews_tab", {
                duration: 300,
                offset: -150
            })
        }), jQuery(".single_add_to_cart_button").click(function(t) {
            jQuery(this).hasClass("disabled") || jQuery(this).addClass("loading");t.preventDefault();
            var form = jQuery(this).parents('form.variations_form.cart');
            form.attr('action', window.location.href).submit();
        });
        var a = jQuery(".product-thumbnails .first img").attr("data-src") ? jQuery(".product-thumbnails .first img").attr("data-src") : jQuery(".product-thumbnails .first img").attr("src");
        jQuery("form.variations_form").on("show_variation", function(t, e) {
            if (e.hasOwnProperty("image") && e.image.src) {
                if (jQuery(".product-gallery-slider-old .slide.first img, .product-thumbnails .first img, .product-gallery-slider .slide.first .zoomImg").attr("src", e.image.src).attr("srcset", ""), jQuery(".product-gallery-slider").data("flickity") && jQuery(".product-gallery-slider").flickity("select", 0), r && r.length) {
                    var i = r.filter(".has-image-zoom .slide.first").data("easyZoom");
                    i.swap(jQuery(".has-image-zoom .slide.first img").attr("src"), jQuery(".has-image-zoom .slide.first img").attr("data-large_image"))
                }
            } else if (e.hasOwnProperty("image_src") && e.image_src) {
                if (jQuery(".product-gallery-slider .slide.first img, .product-thumbnails .first img").attr("src", e.image_src).attr("srcset", ""), jQuery(".product-gallery-slider").data("flickity") && jQuery(".product-gallery-slider").flickity("select", 0), r && r.length) {
                    var i = r.filter(".has-image-zoom .slide.first").data("easyZoom");
                    i.swap(jQuery(".has-image-zoom .slide.first img").attr("src"), jQuery(".has-image-zoom .slide.first img").attr("src"))
                }
            } else jQuery(".product-thumbnails .first img").attr("src", a)
        }), jQuery(document).ready(function() {
            jQuery(".has-lightbox .product-gallery-slider").each(function() {
                jQuery(this).magnificPopup({
                    delegate: "a",
                    type: "image",
                    tLoading: '<div class="loading-spin centered dark"></div>',
                    closeBtnInside: !1,
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 1],
                        arrowMarkup: '<button class="mfp-arrow mfp-arrow-%dir%" title="%title%"><i class="icon-angle-%dir%"></i></button>'
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        verticalFit: !1
                    }
                })
            })
        }), jQuery(".zoom-button").click(function(t) {
            jQuery(".product-gallery-slider").find(".is-selected a").click(), t.preventDefault()
        }), jQuery("body").on("added_to_cart", function() {
            o("5000")
        }), jQuery(document.body).on("updated_cart_totals", function() {
            Flatsome.attach("lazy-load-images", jQuery(".cart-wrapper"))
        }), jQuery(document).ajaxComplete(function() {
            Flatsome.attach(jQuery(".quantity").parent())
        }), jQuery(document).on("yith_infs_adding_elem", function(t) {
            Flatsome.attach(jQuery(".shop-container"))
        }), jQuery(document).ready(function() {
            jQuery("span.added-to-cart").length && o("5000")
        }), jQuery(".disable-lightbox a").click(function(t) {
            t.preventDefault()
        }), jQuery(document).ready(function() {
            jQuery("body").hasClass("single-product") && window.location.hash.includes("#comment-") && jQuery("a", ".reviews_tab.active").trigger("click")
        })
    },
    82: function(t, e, i) {
        var o, r;
        /*!
         * @name        easyzoom
         * @author      Matt Hinchliffe <>
         * @modified    Tuesday, February 14th, 2017
         * @version     2.5.0
         */
        ! function(a, s) {
            "use strict";
            o = [i(16)], r = function(t) {
                s(t)
            }.apply(e, o), !(void 0 !== r && (t.exports = r))
        }(this, function(t) {
            "use strict";

            function e(e, i) {
                this.$target = t(e), this.opts = t.extend({}, c, i, this.$target.data()), void 0 === this.isOpen && this._init()
            }
            var i, o, r, a, s, n, c = {
                loadingNotice: "Loading image",
                errorNotice: "The image could not be loaded",
                errorDuration: 2500,
                linkAttribute: "href",
                preventClicks: !0,
                beforeShow: t.noop,
                beforeHide: t.noop,
                onShow: t.noop,
                onHide: t.noop,
                onMove: t.noop
            };
            e.prototype._init = function() {
                this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = t('<div class="easyzoom-flyout" />'), this.$notice = t('<div class="easyzoom-notice" />'), this.$target.on({
                    "mousemove.easyzoom touchmove.easyzoom": t.proxy(this._onMove, this),
                    "mouseleave.easyzoom touchend.easyzoom": t.proxy(this._onLeave, this),
                    "mouseenter.easyzoom touchstart.easyzoom": t.proxy(this._onEnter, this)
                }), this.opts.preventClicks && this.$target.on("click.easyzoom", function(t) {
                    t.preventDefault()
                })
            }, e.prototype.show = function(t, e) {
                var s, n, c, l, u = this;
                if (this.opts.beforeShow.call(this) !== !1) {
                    if (!this.isReady) return this._loadImage(this.$link.attr(this.opts.linkAttribute), function() {
                        !u.isMouseOver && e || u.show(t)
                    });
                    this.$target.append(this.$flyout), s = this.$target.width(), n = this.$target.height(), c = this.$flyout.width(), l = this.$flyout.height(), i = this.$zoom.width() - c, o = this.$zoom.height() - l, i < 0 && (i = 0), o < 0 && (o = 0), r = i / s, a = o / n, this.isOpen = !0, this.opts.onShow.call(this), t && this._move(t)
                }
            }, e.prototype._onEnter = function(t) {
                var e = t.originalEvent.touches;
                this.isMouseOver = !0, e && 1 != e.length || (t.preventDefault(), this.show(t, !0))
            }, e.prototype._onMove = function(t) {
                this.isOpen && (t.preventDefault(), this._move(t))
            }, e.prototype._onLeave = function() {
                this.isMouseOver = !1, this.isOpen && this.hide()
            }, e.prototype._onLoad = function(t) {
                t.currentTarget.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), t.data.call && t.data())
            }, e.prototype._onError = function() {
                var t = this;
                this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function() {
                    t.$notice.detach(), t.detachNotice = null
                }, this.opts.errorDuration)
            }, e.prototype._loadImage = function(e, i) {
                var o = new Image;
                this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = t(o).on("error", t.proxy(this._onError, this)).on("load", i, t.proxy(this._onLoad, this)), o.style.position = "absolute", o.src = e
            }, e.prototype._move = function(t) {
                if (0 === t.type.indexOf("touch")) {
                    var e = t.touches || t.originalEvent.touches;
                    s = e[0].pageX, n = e[0].pageY
                } else s = t.pageX || s, n = t.pageY || n;
                var c = this.$target.offset(),
                    l = n - c.top,
                    u = s - c.left,
                    d = Math.ceil(l * a),
                    h = Math.ceil(u * r);
                if (h < 0 || d < 0 || h > i || d > o) this.hide();
                else {
                    var p = d * -1,
                        y = h * -1;
                    this.$zoom.css({
                        top: p,
                        left: y
                    }), this.opts.onMove.call(this, p, y)
                }
            }, e.prototype.hide = function() {
                this.isOpen && this.opts.beforeHide.call(this) !== !1 && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
            }, e.prototype.swap = function(e, i, o) {
                this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
                    src: e,
                    srcset: t.isArray(o) ? o.join() : o
                }), this.$link.attr(this.opts.linkAttribute, i)
            }, e.prototype.teardown = function() {
                this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
            }, t.fn.easyZoom = function(i) {
                return this.each(function() {
                    var o = t.data(this, "easyZoom");
                    o ? void 0 === o.isOpen && o._init() : t.data(this, "easyZoom", new e(this, i))
                })
            }
        })
    },
    83: function(t, e) {
        "use strict";
        Flatsome.plugin("addQty", function(t, e) {
            var i = jQuery(t);
            i.on("click", ".plus, .minus", function() {
                var t = jQuery(this),
                    e = t.closest(".quantity").find(".qty"),
                    i = parseFloat(e.val()),
                    o = parseFloat(e.attr("max")),
                    r = parseFloat(e.attr("min")),
                    a = e.attr("step");
                i && "" !== i && "NaN" !== i || (i = 0), "" !== o && "NaN" !== o || (o = ""), "" !== r && "NaN" !== r || (r = 0), "any" !== a && "" !== a && void 0 !== a && "NaN" !== parseFloat(a) || (a = 1), t.is(".plus") ? o && (o === i || i > o) ? e.val(o) : e.val(i + parseFloat(a)) : r && (r === i || i < r) ? e.val(r) : i > 0 && e.val(i - parseFloat(a)), e.trigger("change")
            })
        })
    },
    84: function(t, e) {
        "use strict";
        Flatsome.behavior("add-qty", {
            attach: function(t) {
                jQuery(".quantity", t).addQty()
            }
        })
    },
    85: function(t, e) {
        "use strict";
        Flatsome.behavior("quick-view", {
            attach: function(t) {
                jQuery(".quick-view", t).each(function(t, e) {
                    jQuery(e).hasClass("quick-view-added") || (jQuery(e).click(function(t) {
                        if ("" != jQuery(this).attr("data-prod")) {
                            jQuery(this).parent().parent().addClass("processing");
                            var e = jQuery(this).attr("data-prod"),
                                i = {
                                    action: "flatsome_quickview",
                                    product: e
                                };
                            jQuery.post(flatsomeVars.ajaxurl, i, function(t) {
                                jQuery(".processing").removeClass("processing"), jQuery.magnificPopup.open({
                                    removalDelay: 300,
                                    closeBtnInside: !0,
                                    autoFocusLast: !1,
                                    items: {
                                        src: '<div class="product-lightbox lightbox-content">' + t + "</div>",
                                        type: "inline"
                                    }
                                }), setTimeout(function() {
                                    jQuery(".product-lightbox").imagesLoaded(function() {
                                        jQuery(".product-lightbox .slider").flickity({
                                            cellAlign: "left",
                                            wrapAround: !0,
                                            autoPlay: !1,
                                            prevNextButtons: !0,
                                            adaptiveHeight: !0,
                                            imagesLoaded: !0,
                                            dragThreshold: 15
                                        })
                                    })
                                }, 300), jQuery(".product-lightbox form").hasClass("variations_form") && jQuery(".product-lightbox form.variations_form").wc_variation_form(), jQuery(".product-lightbox form.variations_form").on("show_variation", function(t, e) {
                                    e.image.src ? (jQuery(".product-lightbox .product-gallery-slider .slide.first img").attr("src", e.image.src).attr("srcset", ""), jQuery(".product-lightbox .product-gallery-slider .slide.first a").attr("href", e.image_link), jQuery(".product-lightbox .product-gallery-slider").flickity("select", 0)) : e.image_src && (jQuery(".product-lightbox .product-gallery-slider .slide.first img").attr("src", e.image_src).attr("srcset", ""), jQuery(".product-lightbox .product-gallery-slider .slide.first a").attr("href", e.image_link), jQuery(".product-lightbox .product-gallery-slider").flickity("select", 0))
                                }), jQuery(".product-lightbox .quantity").addQty()
                            }), t.preventDefault()
                        }
                    }), jQuery(e).addClass("quick-view-added"))
                })
            }
        })
    }
});
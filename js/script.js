jQuery(function ($) {
	"use strict";

	/* Header */
	$(window).on("scroll", function () {
		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $(".top-bar").outerHeight();
			var headerOneTopSpace = $(".header-one .logo-area").outerHeight();

			var headerOneELement = $(".header-one .site-navigation");
			var headerTwoELement = $(".header-two .site-navigation");

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass("navbar-fixed");
				$(".header-one").css("margin-bottom", headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass("navbar-fixed");
				$(".header-one").css("margin-bottom", 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass("navbar-fixed");
				$(".header-two").css("margin-bottom", headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass("navbar-fixed");
				$(".header-two").css("margin-bottom", 0);
			}
		}
		fixedHeader();

		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $("#back-to-top"),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});

	$(document).ready(function () {
		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$(".site-navigation .dropdown-toggle").on("click", function () {
					$(this).siblings(".dropdown-menu").animate(
						{
							height: "toggle",
						},
						300
					);
				});

				var navbarHeight = $(".site-navigation").outerHeight();
				$(".site-navigation .navbar-collapse").css(
					"max-height",
					"calc(100vh - " + navbarHeight + "px)"
				);
			}
		}
		navbarDropdown();

		// back to top
		function backToTop() {
			$("#back-to-top").on("click", function () {
				$("#back-to-top").tooltip("hide");
				$("body,html").animate(
					{
						scrollTop: 0,
					},
					800
				);
				return false;
			});
		}
		backToTop();

		// banner-carousel
		function bannerCarouselOne() {
			$(".banner-carousel.banner-carousel-1").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow:
					'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow:
					'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
			});
			$(".banner-carousel.banner-carousel-1").slickAnimation();
		}
		bannerCarouselOne();

		// banner Carousel Two
		function bannerCarouselTwo() {
			$(".banner-carousel.banner-carousel-2").slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow:
					'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow:
					'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
			});
		}
		bannerCarouselTwo();

		// pageSlider
		function pageSlider() {
			$(".page-slider").slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow:
					'<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow:
					'<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
			});
		}
		pageSlider();
	});

	$("#contact-form").submit(function (e) {
		e.preventDefault();

		const formData = $("#contact-form").serialize();

		$.ajax({
			method: "POST",
			url: "https://formsubmit.co/ajax/1fecbb73600da2d87b371562a8fde953",
			dataType: "json",
			accepts: "application/json",
			data: formData,
			success: (data) => {
				$("#result").css("color", "#00FF2F");
				$("#result").css("display", "block");
				$("#result").text("Success! Your message has been sent!");
				console.log(data);
			},
			error: (err) => console.log(err),
		});
	});
});

$(function () {


	var burger = $("#nav-toggle"),
		introH = $("#services").innerHeight(),
		scrollOffset = $(window).scrollTop();


	/* Fixed Burger */
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			burger.addClass("fixed");
		} else {
			burger.removeClass("fixed");
		}
	}



	/* OffCanvas Menu - Выезжающее меню */
	var menuTrigger = $('#nav-toggle'),
		nav = $('#nav'),
		closeButton = nav.find('.nav__close'),
		siteBody = $('body'),
		mainContents = $('section, footer');

	// open-close menu by clicking on the menu icon (открыть-закрыть меню, нажав на значок меню)
	menuTrigger.on('click', function (e) {
		e.preventDefault();
		menuTrigger.toggleClass('active');
		siteBody.toggleClass('menu-is-open');
	});

	// close menu by clicking the close button (закрыть меню, нажав кнопку закрытия)
	closeButton.on('click', function (e) {
		e.preventDefault();
		menuTrigger.trigger('click');
	});

	// close menu clicking outside the menu itself (закрыть меню, щелкнув за пределами самого меню)
	siteBody.on('click', function (e) {
		if (!$(e.target).is('#nav, #nav-toggle, #nav-toggle span')) {
			menuTrigger.removeClass('active');
			siteBody.removeClass('menu-is-open');
		}
	});



	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});



	// Скрипт карусели
	$('.reviews-caro').slick({
		speed: 1500,
		autoplay: true,
		adaptiveHeight: true,
		arrows: false,
		dots: true,
	});
	//



	/* Галлерея */
	$('#lightgallery').lightGallery({
		selector: '.gallery__item',
		download: false,
		thumbnail: false,
	});



	//Модальное окно
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

});
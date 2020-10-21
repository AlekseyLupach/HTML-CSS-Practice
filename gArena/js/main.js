// News carousel start
$('#owl-carousel').each(function () {
	var owl = $(this).find('.owl-carousel').owlCarousel({
		margin: 10,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1100: {
				items: 3
			}
		}
	});
	$(this).find('.js-prev').on('click', function () {
		owl.trigger('prev.owl.carousel');
	});
	$(this).find('.js-next').on('click', function () {
		owl.trigger('next.owl.carousel');
	});
});
// News carousel end

// burger__menu start

$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__menu').click(function () {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});
// burger__menu end

// upbtn start
$('body');
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.upbtn').css({
			transform: 'scale(1)'
		});
	} else {
		$('.upbtn').css({
			transform: 'scale(0)'
		});
	}
});
$('.upbtn').on('click', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});
// upbtn end

// smooth scrolling start
$(window).on("load", function () {
	$("#header__li a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector: "#header__li a"
	});
	$("#header__text-button a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector: "#header__text-button a"
	});
	$("#services__text-button a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector: "#services__text-button a"
	});
});
// smooth scrolling end

// magnificPopup start
$(document).ready(function () {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		// other options
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%'
				},
			},
			srcAction: 'iframe_src',
		}
	});
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$(".gallery__list, .gallery-list").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
		}
	})
});
// magnificPopup end

// videobackground start
$(document).ready(function () {
	if (!$.browser.mobile) {
		$('.video-background').videobackground({
			videoSource: [['video/video.mp4', 'video/mp4'],
			['video/video.ogv', 'video/ogg']],
			poster: 'video/video.jpg',
			loop: true,
			controlPosition: '#msds',
			resize: 0,
			loadedCallback: function () {
				$(this).videobackground('mute');
			}
		});
		var myVideo = $('.video-background').find('video').get(0);
		$('body').on('touchstart', function () {
			if (myVideo.paused) {
				myVideo.play();
			}
		});
	}
	else {
		$('.video-background').prepend('<img src="video/video.jpg" width="" height="" alt="">');
	}
});
$(document).ready(function () { $("video").prop('muted', true); })
// videobackground end

// wow start
new WOW().init();
// wow end

// Hover h3 color for Equipment pic start
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[0];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[0];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[0];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[1];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[1];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[1];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[2];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[2];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[2];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[3];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[3];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[3];
	h3.style.color = null;
	h3.classList.remove('active');
});
// Hover h3 color for Equipment pic end
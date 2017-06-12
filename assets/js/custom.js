/**	
	* Template Name: Rex
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. HEADER CONTENT SLIDE
	6. SCROLL TOP BUTTON
	8. MIXIT FILTER ( FOR PORTFOLIO )  
	9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	11. PRELOADER 
	13. WOW ANIMATION 	
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. HEADER CONTENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.header-slide').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:false, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'span',
		fade: true,
		cssEase: 'linear'
	});

		
	/* ----------------------------------------------------------- */
	/*  2. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  jQuery(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  jQuery('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });
      

	
	/* ----------------------------------------------------------- */
	/*  3. MIXIT FILTER ( FOR PORTFOLIO ) 
	/* ----------------------------------------------------------- */ 

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*  4. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	    
		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});	 

	
	/* ----------------------------------------------------------- */
	/*  5. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.loader').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(50).css({'overflow':'visible'});
    })

	/* ----------------------------------------------------------- */
	/*  6. WOW ANIMATION
    	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	/* ----------------------------------------------------------- */ 



});

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
	$('#apreloader').fadeOut('slow',function(){$(this).remove();});

});
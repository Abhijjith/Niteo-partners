// Print function
function printit(){
    if (window.print) {
        window.print() ;
    } else {
        alert('Please use the print feature of your browser.');
    }
}
(function($) {

    $.TrackEvent = function(category, action, val) {
        
       if(typeof(_gaq) != "undefined" && _gaq != undefined)
        {
            _gaq.push(['_trackEvent', category, action, val]);
        }
    };
    
    
    // init dropdown menu
	$(".nav-primary .sf-menu").superfish({
		animation: {opacity:'show',height:'show'},
		speed: 'normal',
		autoArrows: false,
		disableHI: true,
		dropShadows: false
	});

	// add bar and arrow to dropdown nav
	$(".nav-primary .sf-menu ul").each(function() {
		var el = $(this);
		var lisize = el.siblings("a").outerWidth();
		el.append($("<span>").addClass("last")).append($("<span>").addClass("arrow"));
		el.children(".arrow").css("left",(lisize/2)-7);
	});

	//$(".oldie .inp-button").click(function(){
	//	var el = $(this);
	//	var inp = el.prev("input");
	//	inp.val("");
	//	return true;
	//});

	// initiate href extension
	$(".widget a, .srch-results h4 a, .featuredbox .button, .btns-utility .button").hrefext({wrapWord: 'end'});

	// initiate default value function
    //$("input.defaultvalue, textarea.defaultvalue").defaultvalue();

	// small carousel, rotate through them in case there's more than one on a page
    $('.feature-rotate').each(function() {
    	var el = $(this);
		var ftsize = el.find("ul li").length;
		el.find(".feat-total").html(ftsize);
        el.jCarouselLite({
            btnNext: el.children(".btn-next-sm"),
            btnPrev: el.children(".btn-prev-sm"),
			visible: 1,
			afterEnd: function(a){
				var index = $(a[0]).index();
				if (index > ftsize) {
					index = 1;
				} else if (index == 0) {
					index = ftsize;
				}
				el.find(".feat-current").html(index);
			}
        });
    });

	// Stripe tr backgrouns in tables
    $(".stripe tr:odd").addClass("alt");

jQuery(document).ready(function() {
   $("a#inline").fancybox({
		'hideOnContentClick': false,
		'transitionOut': 'elastic', 
		'padding': 0,
		'overlayOpacity': .72,
		'overlayColor': '#000',
		'orig': 'top',
		'scrolling': 'no'
	});
    checkCookie();
});
  

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var value_of_cookie = getCookie("fancybox");
    if (value_of_cookie != "") {
        return;
    } else {
        var d = new Date();
        var number_of_expired_days = 365;
        d.setTime(d.getTime() + (number_of_expired_days*24*60*60*1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "fancybox=yes;" + expires;
        $("a#inline").trigger('click');
    }
} 

 $("a#inline").trigger('click');
	setTimeout(function() {
		$('.home-modal').addClass('show-second');
	}, 2000);

	setTimeout(function() {
		$('.home-modal').addClass('show-third');
	}, 4000);

 //    Home Page Modal
 //    jQuery(document).ready(function() {
 //    	 $("a#inline").fancybox({
	// 	'hideOnContentClick': false,
	// 	'transitionOut': 'elastic', 
	// 	'padding': 0,
	// 	'overlayOpacity': .72,
	// 	'overlayColor': '#000',
	// 	'orig': 'top',
	// 	'scrolling': 'no'
	// });



   








	// secondpart();
	// function secondpart () {
	// 	setTimeout(function() {
	// 	  $('.home-modal').addClass('show-third');
	// 	}, 2000);
	// }


	// fancybox for videos
	if ($.fn.fancybox) {
		$(".xd .iframe").fancybox({
			'width': 876,
			'height': 496,
			'autoScale': false,
			'transitionIn': 'elastic',
			'transitionOut': 'elastic',
			'type': 'iframe',
			'padding': 7,
			'overlayOpacity': .72,
			'overlayColor': '#000'
		});
	}

	// fancybox for images
	if ($.fn.fancybox) {
		$(".xd .iframe-img").fancybox({
			'transitionIn': 'elastic',
			'transitionOut': 'elastic',
			'type': 'image',
			'padding': 7,
			'overlayOpacity': .72,
			'overlayColor': '#000'
		});
	}

	// Colorbox used for Creative Gallery overlays
	if($.isFunction($.colorbox)) {
	   $(".iframe-cg").colorbox({
	        width: "805px",
	        height: "640px",
	        scrolling: false,
			opacity: .9
	    });
	}

	// Lifecycle sidebar widget
	$(".lifecycles header").click(function() {
		var el = $(this);
		var elh4 = $(this).children("h4");
		var eldiv = el.siblings("div");
		if (eldiv.is(":visible")) {
			eldiv.slideUp(300,'swing');
	        el.delay(300).removeClass("open");
		} else {
			$(".lifecycles > li > div").slideUp(300,'swing');
			$(".lifecycles header").removeClass("open");
	        el.delay(300).addClass("open");
			eldiv.delay(300).slideDown(300,'swing');
		}
	});

	// Expandable content
	$(".expandable").each(function() {
		var el = $(this);
		var intro = el.children(".exp-intro");
		var hidden = el.children(".exp-hidden");
		var btnopen = $("<a>").html("More &gt;").attr("href","javascript:;").addClass("btnexp");
		var btnclose = $("<a>").html("&lt; Less").attr("href","javascript:;").addClass("btnexp");
		hidden.hide();
		intro.children("p:last-child").append(btnopen);
		hidden.children("p:last-child").append(btnclose);

		$(btnopen).click(function() {
			btnopen.fadeOut();
			hidden.slideToggle();
		});

        $(btnclose).click(function() {
			btnopen.fadeIn();
			hidden.slideToggle();
		});
	});

    $(".help").click(function(e) {
  		e.preventDefault();
	});

	if($.isFunction($.tooltip)) {
	    $('.help').tooltip({
	    	showURL: false
	    });
	}

	// set up fixed height for columns

	if($.isFunction($.fixHeight)) {
		$(".lst-landing-col2 li, .no-sidebars .cols").fixHeight();
	}


	$(".hpweekly span").attr("style","font-size: small");

	// Uniform
	$("select.uniform").uniform();

	//Decision sorting buttons

	$('.decision-result-sorting .descending').click(function(){
		$('.decision-result-sorting .ascending').removeClass('active');
		$(this).addClass('active');
	});

	$('.decision-result-sorting .ascending').click(function(){
		$('.decision-result-sorting .descending').removeClass('active');
		$(this).addClass('active');
	});

	//Decision Drop down
	//$('.decision-filters li').click(function(){
		//$('.decision-filters li ul').hide();
		//$(this).children('ul').toggle();
	//});

	//Decision Drop down
	$('.decision-filters li p').click(function(){
		if ($(this).parent().hasClass('active')) {
			$(this).siblings('ul').slideUp('fast');
			$(this).parent().removeClass('active');
			$(this).children().removeClass('active');
		}
		else{
			$('.decision-filters li ul').slideUp('fast');
			$('.decision-filters li').removeClass('active');
			$('.decision-filters li .down-arrow').removeClass('active');
			$(this).siblings('ul').slideDown('fast');
			$(this).parent().addClass('active');
			$(this).children().addClass('active');
		}	
	});
	
	//remove trapezoid on featuredbox if no image exists
	$('.featuredbox').each(function () {
		if (! $(this).find('.featuredimg').length) {
			$(this).find('.corner').remove();
		}
	});

})(jQuery);

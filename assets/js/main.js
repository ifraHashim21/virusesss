jQuery(function($) {

    // NAVIGATION 

    // -------------------------------------------------- Main Slider ------------------------------------------------------------------------//


    // -------------------------------------------------- testislider  ------------------------------------------------------------------------//

    
    // -------------------------------------------------- testislider  ------------------------------------------------------------------------//


    



    // -------------------------------------------------- custom Slider ------------------------------------------------------------------------//

    // $(".customslider").slick({
    //     infinite: true,
    //     dots: true,
    //     vertical: true,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     customPaging: function (slick, index) {
    //       return "<a>0" + (index + 01) + "</a>";
    //     },
    //     responsive: [
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           dots: true,
    //           customPaging: function (slick, index) {
    //             return (
    //               '<button type="button" data-role="none" data-slick-index="' +
    //               index +
    //               '">' +
    //               index +
    //               "</button>"
    //             );
    //           }
    //         }
    //       },
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           dots: true,
    //           customPaging: function (slider, i) {
    //             return $('<button type="button" />').text(i + 1);
    //           }
    //         }
    //       }
    //     ]
    //   });
    

});


// centeree


$(".center").slick({
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

// --------------------------------------------------Tabs------------------------------------------------------------------------//
$(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
});

// --------------------------------------------------Tabs Left------------------------------------------------------------------------//
$(document).ready(function() {
    $(".tabs-left a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tabsleft-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});

// --------------------------------------------------Accordion-----------------------------------------------------------------------//
$(document).ready(function() {
    $('.set > a').on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });
});


// --------------------------------------------------Responsive Simple Navigation----------------------------------------------//
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else { $(this).siblings('ul').addClass('open').show(); }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                if ($(window).width() > 991) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= 991) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        $(".menu-header").menumaker({
            title: "Menu",
            format: "multitoggle"
        });
    });
})(jQuery);

// --------------------------------------------------Hemberg Push Navigation------------------------------------------------------------------------//
(function($) {
    jQuery(document).ready(function() {});
    $('a#hamburg').on('click', function(e) {
        $('html').toggleClass('open-menu');
        return false;
    });
    $('div#hamburg').on('click', function() {
        $('html').removeClass('open-menu');
    })
    $(document).ready(function() {
        $('.nav-cross').click(function() {
            $(this).toggleClass('open');
        });
    });
})(jQuery)
/*------------------------------------------- ------- Header Fix---------------------------------------------------------------*/
// $(function(){
// var shrinkHeader = 200;
// $(window).scroll(function() {
// var scroll = getCurrentScroll();
//   if ( scroll >= shrinkHeader ) {
// 	   $('.nav').addClass('fixed');}
// 	else {
// 		$('.nav').removeClass('fixed');}});
// function getCurrentScroll() {
// return window.pageYOffset;
// }});
/*    ----------------------------------------------- Windows Size -------------------------------------------------------- */
// var WindowsSize=function(){
// var h=$(window).height(),w=$(window).width();
// $("#winSize").html("<p>Width: "+w+"<br>Height: "+h+"</p>");};
// $(document).ready(function(){WindowsSize();}); 
// $(window).resize(function(){WindowsSize();}); 
/*----------------------------------------------------Back to top---------------------------------------------------------------*/
$(document).ready(function() {
    $("#back-top").hide();
    $(function() {
        $(window).scroll(function() { if ($(this).scrollTop() > 100) { $("#back-top").fadeIn() } else { $("#back-top").fadeOut() } });
        $("#back-top a").click(function() { $("body,html").animate({ scrollTop: 0 }, 800); return false })
    })
})

var counter = document.querySelectorAll(".counter")

window.addEventListener("load", function() {
  counter.forEach(function(k, v) {
	  
	  var start = counter[v].getAttribute('data-count-start')
	  var end = counter[v].getAttribute('data-count-end')
	  var speed = counter[v].getAttribute('data-speed')

	  setInterval(function() {
		  start++;
		  if(start > end) {
			return false;
		  }
		  counter[v].innerText = start;

		}, speed)
  })
  
}, false)


$('.preventionSlider').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    // pauseOnDotsHover: true,
    infinite: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
});

$('.faqSlider').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    // pauseOnDotsHover: true,
    infinite: true,

});
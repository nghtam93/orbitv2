$(document).ready(function(){


    new WOW().init();

    // Stick header
    if ( $('.header').offset().top >= 100 ) $('.header').addClass("is-sticky");
    $(window).scroll(function(){
        $(this).scrollTop()>10?$('.header').addClass("is-sticky"):$('.header').removeClass("is-sticky")
    })

    /*----Get Header Height ---*/
    function get_header_height() {
        var header_sticky = $("header").outerHeight()
        $('body').css("--header-height",header_sticky+'px')
    }

    setTimeout(function(){
        get_header_height()
    }, 500);

    $( window ).resize(function() {
      get_header_height()
    });


    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $.fn.dnmenu = function( options ) {

        let thiz = this
        let menu = $(this).attr('data-id')
        let menu_id = '#'+menu

        // Default options
        var settings = $.extend({
            name: 'Menu'
        }, options );

        // get ScrollBar Width
        function getScrollBarWidth () {
            var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
                widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
            $outer.remove();
            return 100 - widthWithScroll;
        };
        let ScrollBarWidth = getScrollBarWidth() + 'px';

        // Create wrap
        // Button click
        thiz.click(function(e){
            e.preventDefault()
            if(thiz.hasClass('active')){
                // $('.dnmenu-backdrop').remove()
                $('body').removeClass('modal-open').css("padding-right","")
                $(menu_id).removeClass('active')
                $(thiz).removeClass('active')
                $('.header.-fix').removeClass('-menu-mb-active')

            } else {
                // $('<div class="dnmenu-backdrop">').appendTo('body')
                // $('body').addClass('modal-open').css("padding-right",ScrollBarWidth)
                $(menu_id).addClass('active')
                $(thiz).addClass('active')
                $('.header.-fix').addClass('-menu-mb-active')

            }
        });

        // Custom close
        $('.js-menu__close').click(function(){
            $('body').removeClass('modal-open')
            $('body').removeClass('modal-open').css("padding-right","")
            $(thiz).removeClass('active')
            $(menu_id).removeClass('active')
        })

        // Menu
        var el= $(menu_id).find(".nav__mobile--ul");
        el.find(".menu-item-has-children>a").after('<button class="nav__mobile__btn"><i></i></button>'),

        el.find(".nav__mobile__btn").on("click",function(e){
            e.stopPropagation(),
            $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
            $(this).parent().addClass("sub-active"),
            $(this).parent().find('.sub-menu').first().slideToggle()
        })

        // Apply options
        return;
    };

    $('.menu-mb__btn').dnmenu()


    /**/

     // Your main div is characters-main
    var flkty = new Flickity('.paradigm__slider');

    // Next and previous events of the characters-nav
    $(".home-paradigm .flickity__button.-next").on("click", function() {
          // Changing items of the main div
           flkty.next();
    });

    $(".home-paradigm .flickity__button.-prev").on("click", function() {
          // Changing items of the main div
          flkty.previous();
    });

});



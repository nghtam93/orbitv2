$(document).ready(function(){

    // Stick header
    // if ( $('.header').offset().top >= 100 ) $('.header').addClass("is-sticky");
    // $(window).scroll(function(){
    //     $(this).scrollTop()>10?$('.header').addClass("is-sticky"):$('.header').removeClass("is-sticky")
    // })

    /*----Get Header Height ---*/
    function get_header_height() {
        var header_sticky = $("header").outerHeight()
        $('body').css("--header-height",header_sticky+'px')
    }

    $(window).on('load resize', function () {
        setTimeout(function(){
            get_header_height()
        }, 500);
    });


    new WOW().init();

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
                $('body').removeClass('modal-open')
                $(menu_id).removeClass('active')
                $(thiz).removeClass('active')
                $('.header.-fix').removeClass('-menu-mb-active')

            } else {

                $('body').addClass('modal-open')
                $(menu_id).addClass('active')
                $(thiz).addClass('active')
                $('.header.-fix').addClass('-menu-mb-active')

            }
        });

        // Custom close
        $('.js-menu__close').click(function(){
            $('body').removeClass('modal-open')
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

        $('.nav__mobile, .header').mousedown(function(e){ e.stopPropagation(); });
        $(document).mousedown(function(e){ $('.nav__mobile').removeClass('active'); $(thiz).removeClass('active'); $("body").removeClass('modal-open') });

        // Apply options
        return;
    };

    $('.menu-mb__btn').dnmenu()


    /*home-intro*/
    if($('body').hasClass('home')){

        /*==========Change video==========*/
        $(window).on("load resize", function() {
            setTimeout(function(){
                change_video_home()
            }, 200);

        })

        function change_video_home(argument) {

            $( ".js-ratio--video").each(function( index ) {
              var video_src = $(this).data("pc")

                if (window.matchMedia("(max-width: 575px)").matches) {
                   video_src = $(this).data("mb")
                }
                $(this).find('video').attr("src", video_src)

            });
        }

        /*====================*/
        $('.home-intro .el__thumb').hover(function(e) {
            $('.home-intro .el__thumb').removeClass('active')

            imageUrl = $(this).data('src')

            $(".home-intro").css("background-image", "url(" + imageUrl + ")");
            $(this).addClass('active')
        })

        /**/
        // Your main div is characters-main
        var paradigm_flkty = new Flickity('.paradigm__slider', {
          autoPlay: true,
          pauseAutoPlayOnHover: false,
          wrapAround: true,
          cellAlign: "left",
          prevNextButtons: false,
          pageDots: false,
          cellSelector: ".slider__item__wrap"
        });

        $(".home-paradigm .flickity__button.-next").on("click", function() {
               paradigm_flkty.next();
        });
        $(".home-paradigm .flickity__button.-prev").on("click", function() {
              paradigm_flkty.previous();
        });

        // Your main div is characters-main
        var character_flkty = new Flickity('.character__slider');
        $(".character__slider__wrap .flickity__button.-next").on("click", function() {
               character_flkty.next();
        });
        $(".character__slider__wrap .flickity__button.-prev").on("click", function() {
              character_flkty.previous();
        });

        // Your main div is characters-main
        var pet_flkty = new Flickity('.pet__slider');
        $(".pet__slider__wrap .flickity__button.-next").on("click", function() {
               pet_flkty.next();
        });
        $(".pet__slider__wrap .flickity__button.-prev").on("click", function() {
              pet_flkty.previous();
        });

        // Your main div is characters-main
        var ourteam_flkty = new Flickity('.ourteam__slider');
        $(".ourteam__slider__wrap .flickity__button.-next").on("click", function() {
               ourteam_flkty.next();
        });
        $(".ourteam__slider__wrap .flickity__button.-prev").on("click", function() {
              ourteam_flkty.previous();
        });


        // Home ourteam
        $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
          $('.js-flickity').flickity('resize');
        })
        $('.home-ourteam .slider__item__wrap[data-bs-toggle="modal"]').on("click",function(e) {
            var content = $(this).find('.js-slider-content').html()
            $('.js-modal-body').html(content)
        })
    }

    /*Page market*/

    $('.js-widget--toggle').on("click",function(e) {
        $('.market__sidebar').toggleClass('active')
        $('body').toggleClass('filter-open')

    })

});



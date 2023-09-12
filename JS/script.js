$(window).on("load", function() {

    $(".loader .inner").fadeOut(1500, function(){
        $(".loader").fadeOut(750);


    });


    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }

    });


})




$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination : false,
        animation_speed: 'slow',
    });

    var typed = new Typed(".typed", {
        strings: ["Student in Python language.", "Specialized in Web Dev.", "Unreal Engine and Unity." ],
        loop: true,
        loopCount: Infinity,
        typeSpeed: 70,
        startDelay: 800,
        // backSpeed: 75,
        smartBackspace: true,
        showCursor : false,

    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:2
            },
            938:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });



    
    

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinish = false
    $(window).scroll(function() {

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){            //can use scrollY

            $('.chart').easyPieChart({
                            easing: 'easeInOut',
                            barColor: '#fff',
                            trackColor: false,
                            scaleColor: false,
                            lineWidth: 4,
                            size: 152,
                            onStep: function(from, to, percent){
                                $(this.el).find('.percent').text(Math.round(percent));
                    
                            }
                        });
        }

        if(!countUpFinish && window.pageYOffset > statsTopOffset - $(window).height() + 200){
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
                
            })
        
            countUpFinish = true;

        }
           
    });





    Fancybox.bind('[data-fancybox="gallery"]')

    

    $("#filters a").click(function(){

        $("#filters .current").removeClass("current");
        $(this).addClass("current")

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            }
    
        });

        return false;


    });

        $("#navigation li a").click(function(e) {

            e.preventDefault();

            var targetElement = $(this).attr("href");
            var targetPosition = $(targetElement).offset().top;
            $("html, body").animate({scrollTop: targetPosition - 50}, "slow");

        });





    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() >=navTop){
            body.css("padding-top", nav.outerHeight() + "px" )
            body.addClass("fixedNav");
        }
        else{
            body.css("padding-top", 0)
            body.removeClass("fixedNav")
        }



    }




});


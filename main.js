$(document).ready(function () {

    $('.owl_carousel').owlCarousel({
        loop: true,
        margin: 60,
        nav: false,
        autoplay: true,
        autoplayTimeout: 8000,
        stagePadding: 60,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                dots: true
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 60,
        rtl: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 8000,
        stagePadding: 60,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                dots: true
            },
            1000: {
                items: 4
            }
        }
    })

    $('.yo_linkdin').click(function () {
        alert("* AN ERROR OCCURED. PLEASE TRY AGAIN LATER.");
    });
});
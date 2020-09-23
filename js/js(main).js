
$(function() {

    var owl=$(".owl-carousel");
    owl.owlCarousel({
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            991:{
                items: 3
            }
        }
    });

    //$(".next") - находим нашу кнопку
    $(".next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});


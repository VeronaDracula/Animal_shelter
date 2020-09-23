jQuery(document).ready(function($){
    $('[data-fancybox]').fancybox({
        buttons: false,
        loop: false,
        infobar: false,
        smallBtn: false,
        toolbar: false,
        animationEffect: "fade",
        animationDuration: 600,










    });
    $(".close_window").click(function () {
        $.fancybox.close();
    });
});
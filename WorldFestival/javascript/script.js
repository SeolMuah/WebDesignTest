//JavaScript Documnet

jQuery(document).ready(function (){

    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide a:gt(0)').hide();
    // setInterval(function() {
    //     $('.imgslide a:first-child').fadeOut(1000)
    //     .next('a').fadeIn(1000).end().appendTo('.imgslide');
    // }, 3000);

    var i = 0;
    function slidelist() {
        var list = $('.imgslide a');
        list.eq(i).fadeIn().delay(3000).fadeOut(
            function() {
                i++;
                if(i % list.length == 0) {
                    i = 0;
                }
                slidelist();
            }
        )
    }
    slidelist();

    $(".notice li:first").click(function() {
        $("#modal").addClass("active");
    });
    $(".btn").click(function() {
        $("#modal").removeClass("active");
    });


});
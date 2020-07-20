/**----- FIRST SLIDER----- */

$('.slider-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});
//===== CARD ANIMATION JS===========//
$(document).ready(function () {

    $('.col-lg-3, .col-md-4, .col-lg-4').hover(
        function () {
            $(this).animate({
                marginTop: "-=2%",
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }


    );

});

// NAVBAR TOGGLE BUTTON
$('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
})


/**-------- ISOTOP LIBRARY FILTER---------------- */

$(document).ready(function () {    // Use Ready function

    let $btns = $('.project-arean .button-group button'); // Selection of buttons

    $btns.click(function (e) {  // call clickEvent function

        $('.project-area .button-group button').removeClass('active'); // remove the active class to the buttons

        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector

        });

        return false;

    })

    

/**-------- END OF ISOTOP LIBRARY FILTER---------------- */


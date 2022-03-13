$('document').ready(function(){

    $('#hotel-form').show();
    $('#ticket-form').hide();
    $('#place-form').hide();

    $('.hotel span').addClass('line');

    // ticket-clicking
    $('.ticket').click(function(){

        $('#hotel-form').hide();
        $('#ticket-form').show();
        $('#place-form').hide();

        $('.hotel span').removeClass('line');
        $('.ticket span').addClass('line');
        $('.place span').removeClass('line');
    });

    // place click
    $('.place').click(function(){

        $('#hotel-form').hide();
        $('#ticket-form').hide();
        $('#place-form').show();

        $('.hotel span').removeClass('line');
        $('.ticket span').removeClass('line');
        $('.place span').addClass('line');
    });

    // hotel-click
    $('.hotel').click(function(){

        $('#hotel-form').show();
        $('#ticket-form').hide();
        $('#place-form').hide();

        $('.hotel span').addClass('line');
        $('.ticket span').removeClass('line');
        $('.place span').removeClass('line');
    });
});




$('document').ready(function(){

    $('#review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    }),


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
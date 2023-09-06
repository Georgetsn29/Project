$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:3
        },
        1025:{
            items:5
        }
    }
})
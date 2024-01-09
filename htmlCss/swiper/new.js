//const swiper = new Swiper('.sample-slider', {
//        loop: true,                         //loop
//        pagination: {                       //pagination(dots)
//            el: '.swiper-pagination',
//        },
//        navigation: {                       //navigation(arrows)
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//        },
//    })
//    const swiper = new Swiper('.sample-slider', {
//    loop: true,
//    slidesPerView: 3,       //add(how many slides to show)
//    centeredSlides: true,   //add(centering the first slide)
//    pagination: {
//        el: '.swiper-pagination',
//    },
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev",
//    },
//})

//const swiper = new Swiper('.sample-slider', {
//    loop: true,
//    slidesPerView: 3,
//    centeredSlides: true,
//    effect: "coverflow",    //add(applying the coverflow effect)
//    pagination: {
//        el: '.swiper-pagination',
//    },
//    navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev",
//    },
//})

const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {          // added
        rotate: 0,              // added (Rotate of the prev and next slides)
        depth: 200,             // added (Depth of the prev and next slides)
        stretch: 30,            // added (Space between the slides)
        modifier: 1,            // added (Multiply the values of rotate, depth, and stretch)
        scale: 1,               // added (Size ratio of the prev and next slides)
        slideShadows: false,    // added (Presence of shadow on the surfaces of the prev and next slides)
    },                          // added
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
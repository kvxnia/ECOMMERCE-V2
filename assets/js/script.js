// let carouselWidth = $('.carrucel-prud')[0].scrollWidth;
// let cardWidth = $('.carrucel-prud-item').width();

// let scrollPosition = 0;


// $('.carouser-sig').on('click', function(){
//     scrollPosition = scrollPosition + cardWidth;
//     $('.carrucel-prud').animate({scrollLeft: scrollPosition})
// }) 


// $(document).ready(function() {
//     let carouselInner = $('.carrucel-prud');
//     let items = $('.carrucel-prud-item');
//     let cardWidth = items.width();
//     let scrollPosition = 0;

//     // Clonar las tarjetas al principio y al final
//     items.first().before(items.last().clone());
//     items.last().after(items.first().clone());

//     // Recalcular el ancho del carrusel
//     let totalItems = $('.carrucel-prud-item').length;
//     carouselInner.scrollLeft(cardWidth);

//     $('.carouser-sig').on('click', function() {
//         scrollPosition += cardWidth;
//         if (scrollPosition >= cardWidth * (totalItems - 1)) {
//             // Si alcanza el final, ajusta la posición al inicio del carrusel
//             scrollPosition = 0;
//             carouselInner.scrollLeft(scrollPosition);
//         } else {
//             carouselInner.animate({ scrollLeft: scrollPosition }, 600);
//         }
//     });

//     $('.carousel-control-prev').on('click', function() {
//         if (scrollPosition <= 0) {
//             // Si retrocede desde el principio, ajusta la posición al final del carrusel
//             scrollPosition = cardWidth * (totalItems - 1);
//             carouselInner.scrollLeft(scrollPosition);
//         } else {
//             scrollPosition -= cardWidth;
//             carouselInner.animate({ scrollLeft: scrollPosition }, 600);
//         }
//     });
// });



// $('#recipeCarousel').carousel({
//     interval: 5000
// })

// $('.carousel .carousel-item').each(function() {
//     var minPerSlide = 4;
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < minPerSlide; i++) {
//         next = next.next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });


// Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });
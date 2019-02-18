'use strict';



//Mustache.js

var templateCarousel = document.getElementById("carouselCellTemplate").innerHTML;
var carousel = document.querySelector(".main-carousel");
var carouselSlides = "";

for ( var i = 0; i < dataContainer.length; i++) {
  carouselSlides += Mustache.render(templateCarousel, dataContainer[i]);
  
}

carousel.innerHTML = carouselSlides;

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  hash: true,
  contain: true
});

// element argument can be a selector string
//   for an individual element
/* var flkty = new Flickity( '.main-carousel', {
	hash: true,
});
*/
// button restat
var clickButton = document.querySelector('.restart');

clickButton.addEventListener('click', function() {
	flkty.select( 0 );
})

// progressbar
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

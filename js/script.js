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




// Initialize and add the map
window.initMap = function() {
  // The location of Uluru
  var first =  dataContainer[0].coords;

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: first});
  // The marker, positioned at Uluru
 
  var marker = new google.maps.Marker({position: first, map: map});

  var markers = [];
  for ( var i = 0; i < dataContainer.length; i++) {
 	
 	markers.push(new google.maps.Marker({
        position: dataContainer[i].coords,
        map: map,
        id: i
      }))
     markers[i].addListener("click", function() {
        flkty.select(this.id);
      })
  }

  flkty.on('change', function(index) {
	
	console.log(index);	
	var target = dataContainer[index].coords;
	map.panTo(target);

}); 
 
}



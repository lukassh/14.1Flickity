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
var clickButton = document.querySelector('.restart');

clickButton.addEventListener('click', function() {
	flkty.select( 0 );
})

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

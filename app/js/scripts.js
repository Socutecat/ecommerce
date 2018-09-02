function isotope_init(){
var $grid = $('.grid').isotope({
	// options
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
  });


$('.filter-button-group').on('click', 'button', function(){
	$('.is-checked')[0].classList.remove('is-checked');
	$(this)[0].classList.add('is-checked');
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter: filterValue});
})
}

function carousel_init() {
	$(".owl-carousel").owlCarousel({
		items:1,
		nav:true,
		loop:true,
		dots:true,
	});
}


// range-script-initial
$( function() {
	$('#price-range').slider({
		range: true,
		min: 0,
		max: 1000,
		values: [0, 1000],
		slide: function(event, ui) {
			$('#price-min').val(ui.values[0]);
			$('#price-max').val(ui.values[1]);
		}
	});
});

$('#price-min').change(function(event) {
	var minValue = $('#price-min').val();
	var maxValue = $('#price-max').val();
	if ( minValue <= maxValue) {
		$('#price-range').slider("values", 0, minValue);
	} else {
		$('#price-range').slider("values", 0, maxValue);
		$('#price-min').val(maxValue);
	}
});
// This isn't very DRY but it's just for demo purpose... oh well.
$('#price-max').change(function(event) {
	var minValue = $('#price-min').val();
	var maxValue = $('#price-max').val();
	if ( maxValue >= minValue) {
		$('#price-range').slider("values", 1, maxValue);
	} else {
		$('#price-range').slider("values", 1, minValue);
		$('#price-max').val(minValue);
	}
});




// function to_top(){
// 	var btn = $ ('.totop-button');
// 		$(window).scroll (function(){
// 			if ($(window).scrollTop() > 300){
// 				btn.addClass('show');
// 			}
// 			else{
// 				btn.removeClass('show');
// 			}
// 		});

// 		btn.on('click', function(e) {
// 				e.preventDefault();
// 				$('html, body').animate({scrollTop:0}, '300');
// 		});
// }

$(document).ready(function(){
	isotope_init();
	carousel_init();
});

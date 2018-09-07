// Isotope  initialization script
function isotopeInit() {
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	$('.filter-button-group').on('click', 'button', function(){
		$('.is-checked')[0].classList.remove('is-checked');
		$(this)[0].classList.add('is-checked');
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter:filterValue});
	})
}

// Owl-carousel  initialization script
function carouselInit(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		// responsiveClass:true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
}

// Range script
function rangeInit(){
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
}

// Main script
$(document).ready(function(){
	isotopeInit();
	carouselInit();
	rangeInit();
})
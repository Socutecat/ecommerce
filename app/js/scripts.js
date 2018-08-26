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

// Main script
$(document).ready(function(){
	isotopeInit();
	carouselInit();
})
/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	$(".filter_actions span.all").click(function(){
		$(this).parent().parent().parent().find('input:checkbox').not(this).prop('checked', true);
    });
	$(".filter_actions span.none").click(function(){
		$(this).parent().parent().parent().find('input:checkbox').not(this).prop('checked', false);
    });
	$(".applyCatsfilter").click(function(){
		$("#posts_grid_inner").show();
		$.each($("#filters input[type='checkbox']:checked"), function(){
			var catId = $(this).attr("id");
			$.each($("#posts_grid_inner"), function(){
				if($(this).attr("data-cat") != catId){
					$(this).hide();
				}
			});
        });
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
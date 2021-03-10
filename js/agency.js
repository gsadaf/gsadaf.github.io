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
	$("#filters input[type='checkbox']").on('change', function(){
		$.each($("#filters input[type='checkbox']:checked"), function(){
			var catId = $(this).val();
			//console.log(catId);
			//$.each($(".posts_grid_inner"), function(){
				
				$('.posts_grid_inner[data-content-type="'+catId+'"]').addClass('active');
			
				if($('.posts_grid_inner').hasClass('active')){
				$('.posts_grid_inner.active[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				else{
					$('.posts_grid_inner[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				//if($('[data-cat=""]') != catId){
					if($('.posts_grid_inner').hasClass('active') && $('.posts_grid_inner').hasClass('active_flow')){
						$('.searchOptions').html($('.posts_grid_inner.active.active_flow .tagsPosts').html());
					}
					else if($('.posts_grid_inner').hasClass('active')){
					$('.searchOptions').html($('.posts_grid_inner.active .tagsPosts').html());
					}
					else if($('.posts_grid_inner').hasClass('active_flow')){
					$('.searchOptions').html($('.posts_grid_inner.active_flow .tagsPosts').html());
					}
					//$('.posts_grid_inner').not('.posts_grid_inner.active').hide(500);
					//$('.posts_grid_inner').not(get_current_m).hide(500);
                     //$('.posts_grid_inner.active').show(500);
					 
					 //get_current_m.show(500);
					//$('.posts_grid_inner[data-cat="'+catId+'"]').show(1000);
				//}
			//});
        });
		$('.posts_grid_inner').removeClass('active_flow');
	  $('.posts_grid_inner').removeClass('active');
	});
	$(".applyCatsfilter").click(function(){
		//$(".posts_grid_inner").hide();
		if($("#search_input").val() == ""){
		if($("#filters input[type='checkbox']:checked").length == 0){
			  $(".posts_grid_inner").show(500);
		  }
		  else{
		$.each($("#filters input[type='checkbox']:checked"), function(){
			var catId = $(this).val();
			//console.log(catId);
			//$.each($(".posts_grid_inner"), function(){
				
				$('.posts_grid_inner[data-content-type="'+catId+'"]').addClass('active');
			
				if($('.posts_grid_inner').hasClass('active')){
				$('.posts_grid_inner.active[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				else{
					$('.posts_grid_inner[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				//if($('[data-cat=""]') != catId){
					if($('.posts_grid_inner').hasClass('active') && $('.posts_grid_inner').hasClass('active_flow')){
						$('.posts_grid_inner').not('.posts_grid_inner.active.active_flow').hide(500);
						$('.posts_grid_inner.active.active_flow').show(500);
					}
					else if($('.posts_grid_inner').hasClass('active')){
					$('.posts_grid_inner').not('.posts_grid_inner.active').hide(500);
					$('.posts_grid_inner.active').show(500);
					}
					else if($('.posts_grid_inner').hasClass('active_flow')){
					$('.posts_grid_inner').not('.posts_grid_inner.active_flow').hide(500);
					$('.posts_grid_inner.active_flow').show(500);
					}
					//$('.posts_grid_inner').not('.posts_grid_inner.active').hide(500);
					//$('.posts_grid_inner').not(get_current_m).hide(500);
                     //$('.posts_grid_inner.active').show(500);
					 
					 //get_current_m.show(500);
					//$('.posts_grid_inner[data-cat="'+catId+'"]').show(1000);
				//}
			//});
        });
		  }
		}
		else{
			var resultdiv = $('#results');
    var query = $("#search_input").val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    //resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
		  if($("#filters input[type='checkbox']:checked").length == 0){
			  $('.posts_grid_inner').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
			  $('.posts_grid_inner[data-title="'+store[ref].title+'"]').show(500);
		  }
		  else{
		  $.each($("#filters input[type='checkbox']:checked"), function(){
			var catId = $(this).val();
			
			//$.each($(".posts_grid_inner"), function(){
				
				$('.posts_grid_inner[data-content-type="'+catId+'"]').addClass('active');
			
				if($('.posts_grid_inner').hasClass('active')){
				$('.posts_grid_inner.active[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				else{
					$('.posts_grid_inner[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				//if($('[data-cat=""]') != catId){
					if($('.posts_grid_inner').hasClass('active') && $('.posts_grid_inner').hasClass('active_flow')){
						if($('.posts_grid_inner.active.active_flow').attr('data-title') == store[ref].title){
							$('.posts_grid_inner').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner[data-title="'+store[ref].title+'"]').show(500);
						}
					}
					else if($('.posts_grid_inner').hasClass('active')){
					if($('.posts_grid_inner.active').attr('data-title') == store[ref].title){
							$('.posts_grid_inner.active').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner.active[data-title="'+store[ref].title+'"]').show(500);
						}
					}
					else if($('.posts_grid_inner').hasClass('active_flow')){
					if($('.posts_grid_inner.active_flow').attr('data-title') == store[ref].title){
							$('.posts_grid_inner.active_flow').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner.active_flow[data-title="'+store[ref].title+'"]').show(500);
						}
					}
					//$('.posts_grid_inner').not('.posts_grid_inner.active').hide(500);
					//$('.posts_grid_inner').not(get_current_m).hide(500);
                     //$('.posts_grid_inner.active').show(500);
					 
					 //get_current_m.show(500);
					//$('.posts_grid_inner[data-cat="'+catId+'"]').show(1000);
				//}
			//});
        });
		  }
		//var get_current = $('.posts_grid_inner[data-title="'+store[ref].title+'"]');
	//	$('.posts_grid_inner').not(get_current).hide(500);
		//get_current.show(500);
       /* var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';*/
      }
      else{
		  if($("#filters input[type='checkbox']:checked").length == 0){
			  $('.posts_grid_inner').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
			  $('.posts_grid_inner[data-title="'+store[ref].title+'"]').show(500);
		  }
		  else{
		  $.each($("#filters input[type='checkbox']:checked"), function(){
			var catId = $(this).val();
			//console.log(catId);
			//$.each($(".posts_grid_inner"), function(){
				
				$('.posts_grid_inner[data-content-type="'+catId+'"]').addClass('active');
			
				if($('.posts_grid_inner').hasClass('active')){
				$('.posts_grid_inner.active[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				else{
					$('.posts_grid_inner[data-merl-technology-workflow="'+catId+'"]').addClass('active_flow');
				}
				//if($('[data-cat=""]') != catId){
					if($('.posts_grid_inner').hasClass('active') && $('.posts_grid_inner').hasClass('active_flow')){
						//if($('.posts_grid_inner.active.active_flow').attr('data-title') == store[ref].title){
							$('.posts_grid_inner.active.active_flow').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner.active.active_flow[data-title="'+store[ref].title+'"]').show(500);
						//}
					}
					else if($('.posts_grid_inner').hasClass('active')){
					if($('.posts_grid_inner.active').attr('data-title') == store[ref].title){
							$('.posts_grid_inner.active').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner.active[data-title="'+store[ref].title+'"]').show(500);
						}
					}
					else if($('.posts_grid_inner').hasClass('active_flow')){
					if($('.posts_grid_inner.active_flow').attr('data-title') == store[ref].title){
							$('.posts_grid_inner.active_flow').not('.posts_grid_inner[data-title="'+store[ref].title+'"]').hide(500);
							$('.posts_grid_inner.active_flow[data-title="'+store[ref].title+'"]').show(500);
						}
					}
					//$('.posts_grid_inner').not('.posts_grid_inner.active').hide(500);
					//$('.posts_grid_inner').not(get_current_m).hide(500);
                     //$('.posts_grid_inner.active').show(500);
					 
					 //get_current_m.show(500);
					//$('.posts_grid_inner[data-cat="'+catId+'"]').show(1000);
				//}
			//});
        });
		  }
      }
      //resultdiv.append(searchitem);
	  
	  $('html, body').animate({
        scrollTop: $("#posts").offset().top
    }, 2000);
    }
		}
		$('.posts_grid_inner').removeClass('active_flow');
	  $('.posts_grid_inner').removeClass('active');
		$('html, body').animate({
        scrollTop: $(".posts_grid").offset().top
    }, 2000);
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
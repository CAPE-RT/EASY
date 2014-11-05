// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var ready = function() {

	$('textarea').autosize();

	$( '#sortable' ).sortable({
		revert:300,
		scrollSensitivity: 10,
		scrollSpeed: 40,
		//placeholder: "sortable-placeholder",
		opacity: 0.8,
		tolerance: "pointer",
		cursor: "row-resize",
	});

	$(window).scroll(function(){
        var posFromTop = $(window).scrollTop();

        if(posFromTop < 200){
        // if more than 200px from the top do something
        	$(this).fadeOut(300);

        } else {
        // otherwise do something else.

        }
    });

};

$(document).ready(ready);
$(document).on('page:load', ready);
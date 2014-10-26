// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){

new jBox('Tooltip', {
		attach: $('.user-menu'),
		content: $('#user-menu'),
		fade: 200,
		zIndex:8000,
		closeOnMouseleave:true,
		position: { y: 'bottom', x: 'right' },
		pointer: 'right'
	});

});
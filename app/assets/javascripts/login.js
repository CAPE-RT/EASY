// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){

  $('.title').hover(
  	function(){
  		$('.title-desc').fadeIn(500);
  	}, 
  	function(){
  		$('.title-desc').fadeOut(500);
  	}
  );
    $("#modal_trigger").leanModal({top: 0, closeButton: ".modal_close" });
    
    // Calling Register Form
    $("#register_form").click(function () {
        $(".social_login").hide();
        $(".user_register").show();
        $(".header_title").text('Register');
        return false;
    });
});
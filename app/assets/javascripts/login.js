// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function(){

new jBox('Modal', {
    width: 300,
    height: 200,
    attach: $('#myModal'),
    title: '<span class="h3">Reset CAPE Password</span>',
    content: $('#grab_me')
});
new jBox('Modal', {
    width: 300,
    height: 200,
    attach: $('#myModal2'),
    title: '<span class="h3">Request New Account</span>',
    content: $('#grab_me_2')
});

});

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var ready = function() {

new jBox('Modal', {
    width: 300,
    height: 220,
    attach: $('#reset_password'),
    title: '<span class="h3">Reset CAPE Password</span>',
    content: $('#reset_password_content')
});
new jBox('Modal', {
    width: 300,
    height: 220,
    attach: $('#request_account'),
    title: '<span class="h3">Request New Account</span>',
    content: $('#request_account_content')
});
new jBox('Modal', {
    width: 400,
    height: 220,
    attach: $('#about_popup'),
    title: '<span class="h3">CAPE<sup>{RT}</sup> :: About</span>',
    content: $('#about_popup_content')
});

};

$(document).ready(ready);
$(document).on('page:load', ready);
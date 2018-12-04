

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});});

/* UNUSED HAMBURGER JAVASCRIPT
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});

$( ".cross" ).click(function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});


});*/

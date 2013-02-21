$(document).ready(function() {
  $('a.menu').click(function() {
    $('.site-header nav').slideToggle(100);
  });
  
  $('article.post iframe').wrap('<div class="video-container" />');

});

$(function(){
  $('<img>').attr('src',function(){
      var imgUrl = $('div.featured-image').css('background-image');
      imgUrl = imgUrl .substring(4, imgUrl .length-1);
      return imgUrl;
  }).load(function(){
    $('img.loading').fadeOut(500);
    $('div.overlay').fadeTo("slow", 0.6);
  });
});
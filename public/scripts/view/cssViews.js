'use strict';
(function(module) {


  let colors = ['#ff0000', '#00ff00', '#0000ff'];
  let random_color = colors[Math.floor(Math.random() * colors.length)];
  document.getElementsByClassName('nav').color = random_color;

  function navColor() {
    $('.nav:hover').css('background', random_color);
    console.log('inside navColor');
  };

  navColor();
  module.navColor = navColor;
})(window);

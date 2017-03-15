'use strict';

(function(module) {
  const homeController = {};

  homeController.init = function() {
    $('#home').show();
    $('footer').show();
    $('#about').hide();
    $('#projects').hide();
    $('#contact').hide();
    $('nav').hide();
  };

  module.homeController = homeController;
})(window);

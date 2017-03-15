'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('#about').show();
    $('nav').show();
    $('footer').show();
    $('#home').hide();
    $('#projects').hide();
    $('#contact').hide();
  };

  module.aboutController = aboutController;
})(window);

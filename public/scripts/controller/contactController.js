'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function() {
    $('#contact').show();
    $('nav').show();
    $('#home').hide();
    $('#projects').hide();
    $('#about').hide();
  };

  module.contactController = contactController;
})(window);

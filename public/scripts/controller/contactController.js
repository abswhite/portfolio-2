'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function() {
    console.log('contact controller running');
    $('#contact').show();
    $('nav').show();
    $('#home').hide();
    $('#projects').hide();
    $('#about').hide();
  };

  module.contactController = contactController;
})(window);

'use strict';

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    $('#projects').show();
    $('nav').show();
    $('#home').hide();
    $('#about').hide();
    $('#contact').hide();
  };

  module.projectsController = projectsController;
})(window);

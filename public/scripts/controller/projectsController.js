'use strict';

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    console.log('projects controller running');
    $('#projects').show();
    $('nav').show();
    $('#home').hide();
    $('#about').hide();
    $('#contact').hide();
  };

  module.projectsController = projectsController;
})(window);

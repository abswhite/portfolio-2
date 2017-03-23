'use strict';
(function(module) {

  let projectView = {};

  function Projects (opts) {
    this.title = opts.title;
    this.description = opts.description;
    this.resources = opts.resources;
    this.imgUrl = opts.imgUrl;
    this.repoUrl = opts.repoUrl;
    this.siteUrl = opts.siteUrl;
    this.contributions = opts.contributions;
  }

  Projects.all = [];

  Projects.prototype.toHtml = function() {
    let template = Handlebars.compile($('#article-template').text());
    return template(this);
  };

  Projects.loadAll = function(projectsData) {
    projectsData.forEach(function(ele) {
      Projects.all.push(new Projects(ele));
    });
  }

  projectView.projectsRender = function() {
    Projects.all.forEach(function(a) {
      $('#projects div').append(a.toHtml());
    });
  };

  Projects.fetchAll = function(callback) {
    if (localStorage.projectsData) {
      Projects.loadAll(JSON.parse(localStorage.projectsData));
      projectView.projectsRender();
    } else {
      $.getJSON('/data/projectsJSON.json')
      .then(function(projectsData) {
        Projects.loadAll(projectsData);
        localStorage.setItem('projectsData', JSON.stringify(projectsData));
        projectView.projectsRender();
      })
      .then(function() {
        if (callback)
          callback();
      })
    }
  };

  Projects.fetchAll();
  module.Projects = Projects;
}) (window);

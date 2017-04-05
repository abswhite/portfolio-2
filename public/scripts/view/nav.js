(function (module) {

  // Click functionality
  let click = function() {
    $('.icon-menu3').click(function() {
        $('.nav ul').show();
    })
  }

  let clickNav = function() {
    $('.nav ul li').click(function() {
      $('.nav ul').hide();
    });
  };

  clickNav();
  click();

})(window);

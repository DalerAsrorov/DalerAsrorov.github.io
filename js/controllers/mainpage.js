angular
  .module('app')
  .controller('MainPageCtrl', function() {
    var vm = this;
    vm.tooltipList = [];

    requestTooltipJson(function(result) {
      vm.tooltipList = result.data;
    });

    function requestTooltipJson(callback) {
      $.ajax({
        url: "/assets/json/tooltips.json",
        cache: false,
        success: function(result) {
          var json = JSON.parse(result);
          callback(json);
        }
      });
    }

  });

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
        dataType: "json",
        success: function(result) {
          callback(result);
        }
      });
    }

  });

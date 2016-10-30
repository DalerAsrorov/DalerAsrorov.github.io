angular
  .module('app')
  .controller('MainPageCtrl', function() {
    var vm = this;
    vm.tooltipList = [];
    var visited = window.localStorage.getItem("visited");

    window.addEventListener("beforeunload", function (e) {
      window.localStorage.removeItem("visited");
    });


    var sentenceList =
    [
      "Hello. ^400 I am Daler.",
      "I'm a full-stack engineer...",
      "...^1000a technology enthusiast.",
      "...^1000a big fan of space.",
      "I truly believe you're in ^500 the right place.",
      ":) ^1000",
      "Enjoy!"
    ];

    if(!visited) {
      console.log("not yet visited");
      $(function() {
        window.localStorage.setItem("visited", true);
        $("#animatedText").typed({
          strings: sentenceList,
          typedSpeed: 0,
          // show cursor
          showCursor: true,
          // character for cursor
          cursorChar: "|",
          loopCount: false,
          callback: function() {
            setTimeout(displayString, 3000);
          }
        });
      });
    } else if (visited) {
      console.log("already visited");
      displayString();
    }



    function displayString() {
      $(".typed-cursor").remove();
      $("#animatedText").remove();
      $("#nameDiv").fadeIn("slow");
    }


    requestTooltipJson(function(result) {
      console.log(result);
      vm.tooltipList = result.data;
    });

    function requestTooltipJson(callback) {
      $.ajax({
        url: "/assets/json/tooltips.json",
        contentType: "application/json",
        dataType: "json",
        success: function(result) {
          callback(jQuery.parseJSON(JSON.stringify(result)));
        }
      });
    }

  });

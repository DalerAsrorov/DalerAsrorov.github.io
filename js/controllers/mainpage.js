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
      "I built this website from scratch! :) ^1000",
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


    vm.tooltipList = [
      {
        "name": "LinkedIn",
        "icon": "linkedin",
        "url": "https://www.linkedin.com/in/dalerasrorov"
      },
      {
        "name": "Github",
        "icon": "github-circle",
        "url": "https://github.com/DalerAsrorov"
      },
      {
        "name": "Twitter",
        "icon": "twitter",
        "url": "https://twitter.com/_dafiasco_"
      },
      {
        "name": "Email",
        "icon": "email",
        "url": "mailto:asrorov@usc.edu"
      },
      {
        "name": "Resume",
        "icon": "attachment",
        "url": "/assets/docs/resume.pdf"
      }
    ];

    // requestTooltipJson(function(result) {
    //   console.log(result);
    //   vm.tooltipList = result.data;
    // });

    // function requestTooltipJson(callback) {
    //   $.ajax({
    //     url: "/assets/json/tooltips.json",
    //     contentType: "application/json",
    //     dataType: "json",
    //     success: function(result) {
    //       callback(jQuery.parseJSON(JSON.stringify(result)));
    //     }
    //   });
    // }

  });

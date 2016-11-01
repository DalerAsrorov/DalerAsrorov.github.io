angular
  .module('app')
  .controller('ProjectsCtrl', function($mdDialog) {
    var vm = this;
    console.log("projects page is here.");
    var imgBaseUrl = "/assets/img/";

    var statuses = {
      complete: "Is complete.",
      progress: "Currently in progress...",
      debug: "Currently debugging..."
    };

    vm.projectsList = [
      {
        name: "Uniket",
        type: "Mobile",
        status: statuses.complete,
        imgUrl: imgBaseUrl + "uniket.png",
        description: "iOS mobile application that allows, students to sell, buy, and make transaction within specific radius and type.",
        role: "Lead developer",
        stack: "Objective-C, Cocoa Touch, Firebase",
        "github": "",
        "link": "https://itunes.apple.com/us/app/uniket/id980147169?mt=8"
      },
      {
        name: "LiveToShare",
        type: "Web",
        status: statuses.complete,
        imgUrl: imgBaseUrl + "livetoshare.png",
        description: "Final project for the Database Web Development class. Application that allows sharing of stories through media.",
        role: "Lead developer",
        stack: "AngularJS, PHP, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/LiveToShare",
        "link": "http://asrorov.student.uscitp.com/itp300/final_project/php/login.php"
      },
      {
        name: "Y.Xplore",
        type: "Mobile",
        status: statuses.progress,
        imgUrl: imgBaseUrl + "yxplore.png",
        description: "Y.Xplore is a spatial social network. This means that you will discover posts only when you are in a certain location. In this way it is different than other social media platforms because it encourages you to engage with your surroundings.",
        role: "Lead developer",
        stack: "Java, Swift, Apache Cordova,JQuery, ArcGIS SDKs & APIs, HTML/CSS, Firebase",
        "github": "https://github.com/debalin/y-xplore",
        "link": ""
      },
      {
        name: "Capnote",
        type: "Mobile",
        status: status.progress,
        imgUrl: imgBaseUrl + "capnote.jpg",
        description: "Mobile app for iOS devices to capture, manage, and share notes in various formats. It helps people find note-takers for the same class and collaborate via messaging/video. Made in Swift and Cocoa Touch. ",
        role: "Lead developer",
        stack: "Swift, Cocoa Touch, Firebase",
        "github": "https://github.com/DalerAsrorov/Capnote.git",
        "link": ""
      },
      {
        name: "MelodyClash",
        type: "Web",
        status: status.progress,
        imgUrl: imgBaseUrl + "melodyclash.png",
        description: "Web app that allows users to see the closest events, bands, stories, and statistics of their favorite genres.",
        role: "Lead developer",
        stack: "AngularJS, NodeJS, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/melodyclash",
        "link": "http://melodyclash.herokuapp.com/"
      },
      {
        name: "SmartCollab",
        type: "Web",
        status: status.complete,
        imgUrl: imgBaseUrl + "smartcollab.png",
        description: "Application that provides collaboration services wrapped around ArcGIS and intagrated with AI bot that provides various map services.",
        role: "Lead developer",
        stack: "AngularJS, NodeJS, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/LiveToShare",
        "link": "http://asrorov.student.uscitp.com/itp300/final_project/php/login.php"
      },
      {
        name: "Fanmap",
        type: "Web",
        status: status.complete,
        imgUrl: imgBaseUrl + "fanmap.jpg",
        description: "Web application that allows users to analyze taste of music around the world through maps, sentimental analysis, and cool visualizations.",
        role: "Lead developer",
        stack: "EmberJS, NodeJS, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/FanMap",
        "link": ""
      },
      {
        name: "Infomania",
        type: "Web",
        status: status.debug,
        imgUrl: imgBaseUrl + "infomania.png",
        description: "Question-answer web platform that searches quickly for relevant information and bookmark it for later reading.",
        role: "Lead developer",
        stack: "PHP, Laravel, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/infomania",
        "link": "http://infomania-daler.herokuapp.com/"
      },
    ];

    function DialogController($mdDialog, dataToPass) {
      var vm = this;
      vm.project = dataToPass.data;

      vm.hide = function() {
        $mdDialog.hide();
      };

      vm.cancel = function() {
        $mdDialog.cancel();
      };

      vm.answer = function(answer) {
        $mdDialog.hide(answer);
      };


    }

    function getProjectObj(name) {
      console.log("passed name", name);

    };

    vm.showAdvanced = function(ev) {
      var currTarget = ev.currentTarget;
      var projectName = currTarget.getAttribute("data");
      var obj = {};

      vm.projectsList.forEach(function(el) {
        if(projectName.toLowerCase() === el.name.toLowerCase()) {
          obj = el;
        }
      });

      $mdDialog.show({
         locals: { dataToPass: {"data": obj} },
         controller: DialogController,
         controllerAs: "vm",
         templateUrl: '/templates/dialog.html',
         parent: angular.element(document.body),
         targetEvent: ev,
         clickOutsideToClose: true,
         fullscreen: false // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
         vm.status = 'You said the information was "' + answer + '".';
         console.log(vm.status);
      }, function() {
         vm.status = 'You cancelled the dialog.';
         console.log(vm.status);
      });
    };


});

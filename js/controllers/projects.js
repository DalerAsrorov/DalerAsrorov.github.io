angular
  .module('app')
  .controller('ProjectsCtrl', function() {
    var vm = this;
    console.log("projects page is here.");
    var imgBaseUrl = "/assets/img/";

    vm.projectsList = [
      {
        name: "Uniket",
        type: "Mobile",
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
        imgUrl: imgBaseUrl + "livetoshare.jpeg",
        description: "Final project for the Database Web Development class. Application that allows sharing of stories through media.",
        role: "Lead developer",
        stack: "AngularJS, PHP, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/LiveToShare",
        "link": "http://asrorov.student.uscitp.com/itp300/final_project/php/login.php"
      },
      {
        name: "Y.Xplore",
        type: "Mobile",
        imgUrl: imgBaseUrl + "yxplore.png",
        description: "Final project for the Database Web Development class. Application that allows sharing of stories through media.",
        role: "Lead developer",
        stack: "Java, Swift, Apache Cordova,JQuery, ArcGIS SDKs & APIs, HTML/CSS, Firebase",
        "github": "https://github.com/debalin/y-xplore",
        "link": ""
      },
      {
        name: "Capnote",
        type: "Mobile",
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
        imgUrl: imgBaseUrl + "smartcollab.jpeg",
        description: "Application that provides collaboration services wrapped around ArcGIS intagrated with AI bot that provides various map services.",
        role: "Lead developer",
        stack: "AngularJS, NodeJS, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/LiveToShare",
        "link": "http://asrorov.student.uscitp.com/itp300/final_project/php/login.php"
      },
      {
        name: "Fanmap",
        type: "Web",
        imgUrl: imgBaseUrl + "fanmap.jpeg",
        description: "Web application that allows users to analyze taste of music around the world through maps, sentimental analysis, and cool visualizations.",
        role: "Lead developer",
        stack: "EmberJS, NodeJS, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/FanMap",
        "link": ""
      },
      {
        name: "Infomania",
        type: "Web",
        imgUrl: imgBaseUrl + "infomania.jpeg",
        description: "Question-answer web platform that searches quickly for relevant information and bookmark it for later reading.",
        role: "Lead developer",
        stack: "PHP, Laravel, JQuery, HTML/CSS, Firebase",
        "github": "https://github.com/DalerAsrorov/infomania",
        "link": "http://infomania-daler.herokuapp.com/"
      },
    ];


    
});

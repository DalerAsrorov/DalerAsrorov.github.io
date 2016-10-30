angular
  .module('app', ['ui.router', 'ngMaterial'])

  // routing
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '/templates/index.html',
        controller: 'MainPageCtrl',
        controllerAs: 'vm'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: '/templates/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'vm'
      })

  });

angular
  .module('app', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'MainPageCtrl',
        controllerAs: 'vm'
      })
      .when('/projects', {
        templateUrl: '/templates/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

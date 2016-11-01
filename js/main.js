angular
  .module('app', ['ui.router', 'ngMaterial', 'ngMdIcons', 'ngAnimate'])

  // routing
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '/templates/main.html',
        controller: 'MainPageCtrl',
        controllerAs: 'vm'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: '/templates/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'vm'
      })
      .state('news', {
        url: '/news',
        templateUrl: '/templates/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'vm'
      })
      .state('social', {
        url: '/social',
        templateUrl: '/templates/social.html',
        controller: 'SocialCtrl',
        controllerAs: 'vm'
      })

  });

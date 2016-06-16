(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .controller('homeCtrl', homeCtrl )
    .controller('pageCtrl', pageCtrl )
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  pageCtrl.$inject = ['$scope', '$rootScope'];
  homeCtrl.$inject = ['$scope', '$rootScope'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  function homeCtrl($scope, $rootScope) {
    $rootScope.isPage = false;
  }
  function pageCtrl($scope, $rootScope) {
    $rootScope.isPage = true;
  }

})();

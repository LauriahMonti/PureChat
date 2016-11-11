angular.module('app', ['ionic', 'app.controllers', 'firebase', 'ngIOS9UIWebViewPatch'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('connexion', {
        cache: true,
        url: '/connexion',
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl'
      })
    .state('chat', {
      cache: true,
      url: '/chat/:conversation/:user',
      templateUrl: 'views/chat.html',
      controller: 'ChatCtrl'
    });
    $urlRouterProvider.otherwise('/connexion');

  });
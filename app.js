var dailyTaco = angular.module('dailyTaco', ['ui.router']);

dailyTaco.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    views: {
      'header': {
        templateUrl: 'partials/header.html'
      },


      'body':   {
        templateUrl: 'partials/home.html',
        controller: 'BannerCtrl'
      },


      'game-1': {
        templateUrl: 'partials/game1.html',
        controller: 'TacosweeperCtrl'
      },


      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      },


      'footer': {
        templateUrl: 'partials/footer.html'
      }

    }
  });

  // Other states here
});

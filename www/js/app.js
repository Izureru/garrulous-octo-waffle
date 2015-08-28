// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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
  .state('page1', {
    url: '/1',
    templateUrl: 'page1.html'
  })
  .state('page2', {
    url: '/2',
    templateUrl: 'page2.html'
  })
  .state('page3', {
    url: '/3',
    templateUrl: 'page3.html',
    controller : "Page3Ctrl"
  })
  
  $urlRouterProvider.otherwise("/1");
})

.controller('Page3Ctrl', function($scope) {
  $scope.getSteps = function() {














    // console.debug("Searching for: " +  $scope.data.searchKey);

    // if ( true ) {

    //   // use the $resource based service
    //   var promise = DataService.getAll( { 
    //     'term' : $scope.data.searchKey, 
    //     'results':'0:50',      // <-- variable substitution
    //     //'fields':'item_name'    <-- you can specify field params
    //   }).$promise;
    //   promise.then(function(_response) {
    //     console.debug(" The data " + JSON.stringify(_response));
    //     $scope.items = _response.hits;
    //   });

    // } else {
    //   // use the $http based service
    //   var promise = DataServiceHTTP.getAll($scope.data.searchKey);
    //   promise.then(function(_response) {
    //     console.debug(" The data " + JSON.stringify(_response.data));
    //     $scope.items = _response.data.hits;
    //   });
    // }
  };
})
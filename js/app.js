// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    //Turn the spinner on or off
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('feature', {
        url: "/feature",
        templateUrl: "views/template.html",
        controller: 'FeatureCtrl'
    })

    .state('infinite', {
        url: "/infinite",
        templateUrl: "views/template.html",
        controller: 'InfiniteCtrl'
    })

    .state('artist', {
        url: "/artist",
        templateUrl: "views/template.html",
        controller: 'ArtistCtrl'
    })

    .state('artist-detail', {
        url: "/artist-detail",
        templateUrl: "views/template.html",
        controller: 'ArtistDetailCtrl'
    }) 
        .state('artist-detail-image', {
        url: "/artist-detail-image",
        templateUrl: "views/template.html",
        controller: 'ArtistDetailImageCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});
// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
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

    .state('cart', {
        url: "/cart",
        templateUrl: "views/template.html",
        controller: 'CartCtrl'
    })
        .state('checkout', {
            url: "/checkout",
            templateUrl: "views/template.html",
            controller: 'CheckoutCtrl'
        })

    .state('artist', {
        url: "/artist",
        templateUrl: "views/template.html",
        controller: 'ArtistCtrl'
    })

    .state('artistdetail', {
        url: "/ArtistDetail",
        templateUrl: "views/template.html",
        controller: 'ArtistDetailCtrl'
    })
        .state('detailImage', {
            url: "/detailImage",
            templateUrl: "views/template.html",
            controller: 'ArtistDetailImageCtrl'
        })

    $urlRouterProvider.otherwise("/home");

});

firstapp.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                element.addClass('min');
                console.log('Scrolled below header.');
            } else {
                element.removeClass('min');
                console.log('Header is in view.');
            }
        });
    };
});

firstapp.directive('fixit',function($window) {
	return function(scope, element, attrs) {
		var myelem = {};
            var imagedim = {};
            $element = $(element);
            myelem.height = $element.height();
            myelem.width = $element.width();
            myelem.ratio = myelem.width / myelem.height;
		
            	$element.children("img.fix-img").load(function() {
                imagedim.height = $(this).height();
                imagedim.width = $(this).width();
                imagedim.ratio = imagedim.width / imagedim.height;
			  
			  
			  if (myelem.ratio == imagedim.ratio) {
                    $(this).css("width", "auto");
                    $(this).css("height", myelem.height);
                } else if (myelem.ratio > imagedim.ratio) {
                    $(this).css("width", "auto");
                    $(this).css("height", myelem.height);
                } else {
                    $(this).css("width", "100%");
                    $(this).css("height", "auto");
                }
			  
            });
    };
});

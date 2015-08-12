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
            url: "/artistDetail",
            templateUrl: "views/template.html",
            controller: 'ArtistDetailCtrl'
        })
        .state('detailImage', {
            url: "/detailImage",
            templateUrl: "views/template.html",
            controller: 'ArtistDetailImageCtrl'
        })
        .state('team', {
            url: "/team",
            templateUrl: "views/template.html",
            controller: 'TeamCtrl'
        })
        .state('artInfrastructure', {
            url: "/artInfrastructure",
            templateUrl: "views/template.html",
            controller: 'ArtInfrastructureCtrl'
        })
        .state('events', {
            url: "/events",
            templateUrl: "views/template.html",
            controller: 'EventsCtrl'
        })
        .state('eventdetail', {
            url: "/eventdetail",
            templateUrl: "views/template.html",
            controller: 'EventdetailCtrl'
        })
        .state('totalartpage', {
            url: "/totalartpage",
            templateUrl: "views/template.html",
            controller: 'TotalartPageCtrl'
        })
        .state('press', {
            url: "/press",
            templateUrl: "views/template.html",
            controller: 'PressCtrl'
        })
        .state('account', {
            url: "/account",
            templateUrl: "views/template.html",
            controller: 'AccountCtrl'
        })
        .state('thoughtleadership', {
            url: "/thoughtleadership",
            templateUrl: "views/template.html",
            controller: 'ThoughtleadershipCtrl'
        })
        .state('thoughtleadershipdetail', {
            url: "/thoughtleadershipdetail",
            templateUrl: "views/template.html",
            controller: 'ThoughtleadershipdetailCtrl'
        })
        .state('sculpture', {
            url: "/sculpture",
            templateUrl: "views/template.html",
            controller: 'SculptureCtrl'
        })
        .state('favorite', {
            url: "/favorite",
            templateUrl: "views/template.html",
            controller: 'FavoriteCtrl'
        })
        .state('artistpage', {
            url: "/artistpage",
            templateUrl: "views/template.html",
            controller: 'ArtistPageCtrl'
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: "views/template.html",
            controller: 'ContactusCtrl'
        })
        .state('activities', {
            url: "/activities",
            templateUrl: "views/template.html",
            controller: 'ActivitiesCtrl'
        })
        .state('favorite-product', {
            url: "/favorite-product",
            templateUrl: "views/template.html",
            controller: 'FavoriteProductCtrl'
        })
        .state('reach-out', {
            url: "/reach-out",
            templateUrl: "views/template.html",
            controller: 'ReachOutCtrl'
        })

    $urlRouterProvider.otherwise("/home");

});

firstapp.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset >= 100) {
                element.addClass('min');
            } else {
                element.removeClass('min');
            }
        });
    };
});

firstapp.directive('fixit', function ($window) {
    return function (scope, element, attrs) {
        var myelem = {};
        var imagedim = {};
        $element = $(element);
        myelem.height = $element.height();
        myelem.width = $element.width();
        myelem.ratio = myelem.width / myelem.height;

        $element.children("img.fix-img").load(function () {
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

firstapp.filter('rawHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };


}]);

firstapp.directive('readmores', function ($window) {
    return function (scope, element, attrs) {
        var $element = $(element);
        $element.children(".read-morecont").height(0);
        $element.children(".readmore").click(function () {
            var lastheight = $element.children(".read-morecont").height();
            if (lastheight == 0) {
                var newheight = $element.children(".read-morecont").children(".read-inner").height();
                $element.children(".read-morecont").height(newheight + 40);
            } else {
                $element.children(".read-morecont").height(0);
            }
        });
    };
});

// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'

]);

firstapp.run(function($rootScope, NavigationService) {
  $rootScope.addToFav = function(artid, folderid) {
    NavigationService.addToFav(artid, function(data, status) {
      console.log(data);
      $.jStorage.set("user", data);
    });
  };
});

firstapp.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
  //Turn the spinner on or off
  cfpLoadingBarProvider.includeSpinner = true;
  cfpLoadingBarProvider.spinnerTemplate = '<div class="loadingcfp"><div class="in-box"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>Please wait...</div></div>';
  cfpLoadingBarProvider.includeBar = false;

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
    url: "/artist/:type",
    templateUrl: "views/template.html",
    controller: 'ArtistCtrl'
  })

  .state('artistdetail', {
    url: "/artist/detail/:artistid",
    templateUrl: "views/template.html",
    controller: 'ArtistDetailCtrl'
  })

  .state('detail', {
    url: "/artwork/detail/:artid",
    templateUrl: "views/template.html",
    controller: 'ArtistDetailImageCtrl'
  })

  .state('team', {
      url: "/team",
      templateUrl: "views/template.html",
      controller: 'TeamCtrl'
    })
    .state('artInfrastructure', {
      url: "/infra-services",
      templateUrl: "views/template.html",
      controller: 'ArtInfrastructureCtrl'
    })

  .state('events', {
    url: "/events",
    templateUrl: "views/template.html",
    controller: 'EventsCtrl'
  })

  .state('invite', {
    url: "/invite",
    templateUrl: "views/template.html",
    controller: 'InviteCtrl'
  })

  .state('eventdetail', {
    url: "/eventdetail",
    templateUrl: "views/template.html",
    controller: 'EventdetailCtrl'
  })

  .state('totalartpage', {
    url: "/artwork/:type",
    templateUrl: "views/template.html",
    controller: 'TotalartWorkCtrl'
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
    url: "/sculpture/:artid",
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
    url: "/favorite-product/:artid",
    templateUrl: "views/template.html",
    controller: 'FavoriteProductCtrl'
  })

  .state('reach-out', {
    url: "/reach-out",
    templateUrl: "views/template.html",
    controller: 'ReachOutCtrl'
  })

  .state('register-artist', {
    url: "/register-artist",
    templateUrl: "views/template.html",
    controller: 'RegisterArtistCtrl'
  })

  .state('create-artwork', {
    url: "/create-artwork",
    templateUrl: "views/template.html",
    controller: 'CreateArtworkCtrl'
  })

  .state('searchresults', {
    url: "/searchresults",
    templateUrl: "views/template.html",
    controller: 'SearchResultsCtrl'
  })

  $urlRouterProvider.otherwise("/home");

});

firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 100) {
        element.addClass('min');
      } else {
        element.removeClass('min');
      }
    });
  };
});

firstapp.filter('rawHtml', ['$sce',
  function($sce) {
    return function(val) {
      return $sce.trustAsHtml(val);
    };
  }
]);
/*
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
});*/

firstapp.directive('googlePlusSignin', ['$window',
  function($window) {
    var ending = /\.apps\.googleusercontent\.com$/;

    return {
      restrict: 'E',
      transclude: true,
      template: '<span></span>',
      replace: true,
      link: function(scope, element, attrs, ctrl, linker) {
        attrs.clientid += (ending.test(attrs.clientid) ? '' : '.apps.googleusercontent.com');

        attrs.$set('data-clientid', attrs.clientid);
        attrs.$set('theme', attrs.theme);

        // Some default values, based on prior versions of this directive
        var defaults = {
          callback: 'signinCallback',
          cookiepolicy: 'single_host_origin',
          requestvisibleactions: 'http://schemas.google.com/AddActivity',
          scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
          height: 'standard',
          width: 'wide',
          state: ''
        };

        defaults.clientid = attrs.clientid;
        defaults.theme = attrs.theme;

        // Overwrite default values if explicitly set
        angular.forEach(Object.getOwnPropertyNames(defaults), function(propName) {
          if (attrs.hasOwnProperty(propName)) {
            defaults[propName] = attrs[propName];
          }
        });

        // Default language
        // Supported languages: https://developers.google.com/+/web/api/supported-languages
        attrs.$observe('language', function(value) {
          $window.___gcfg = {
            lang: value ? value : 'en'
          };
        });

        // Asynchronously load the G+ SDK.
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/client:plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);

        linker(function(el, tScope) {
          po.onload = function() {
            if (el.length) {
              element.append(el);
            }
            gapi.signin.render(element[0], defaults);
          };
        });
      }
    }
  }
]).run(['$window', '$rootScope',
  function($window, $rootScope) {
    $window.signinCallback = function(authResult) {
      if (authResult && authResult.access_token) {
        $rootScope.$broadcast('event:google-plus-signin-success', authResult);
      } else {
        $rootScope.$broadcast('event:google-plus-signin-failure', authResult);
      }
    };
  }
]);

var dem = 0;

firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);

      if (attr.rel) {
        var target = $("[rel='" + attr.rel + "']");
      } else {
        var target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        helpers: {
          media: {}
        }
      });

    }
  }
});

firstapp.directive('elevateZoom', function($document, $filter) {
  return {
    restrict: 'EA',
    link: function($scope, element, attr) {
      $scope.changeImage = function() {
        var image = $scope[attr.image];
        var $element = $(element);
        image = image.artwork.image[0];
        var smallimg = attr.smallImage;
        var bigimg = attr.bigImage;

        $element.attr('data-zoom-image', $filter('uploadpath')(image));
        $element.attr('src', $filter('uploadsmallimage')(image));
        $element.elevateZoom();
      }
      $scope.$on('changeImage', function(event, data) {
        $scope.changeImage();
      });
      $scope.changeImage();
    }
  }
});

firstapp.directive('zoomContainer', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$on('$stateChangeSuccess', function() {
        var target = element.children('div.zoomContainer').remove();
      })
    }
  }

});

firstapp.filter('uploadthumbnail', function() {
  return function(input) {
    if (input && input != "") {
      return adminurl + "user/resize?height=190&file=" + input;
      // return adminurl + "user/resize?file=" + input;
    }
  };
});

firstapp.filter('uploadpath', function() {
  return function(input) {
    if (input && input != "") {
      return adminurl + "user/resize?file=" + input;
    }
  };
});

firstapp.filter('uploadsmallimage', function() {
  return function(input) {
    if (input && input != "") {
      // return adminurl + "user/resize?file=" + input;
      return adminurl + "user/resize?width=750&file=" + input;
    }
  };
});

firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.filter('makesizestr', function() {
  return function(artobj) {
    var size = "";
    if (artobj && artobj != undefined) {
      if (artobj.width && artobj.width != "") {
        size += artobj.width;
      }
      if (artobj.height && artobj.height != "") {
        size += " " + artobj.height;
      }
      if (artobj.breadth && artobj.breadth != "" && artobj.breadth != "N/A") {
        size += " " + artobj.breadth;
      }
      size = size.trim();
      size = size.split(" ").join(" x ");
      if (size != "")
        return size += " inches";
      else
        return "NA";
    } else {
      return "NA";
    }
  };
});

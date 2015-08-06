angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.slides = [
				'img/slide1.jpg',
				'img/slide2.jpg'
			];
    //Colours for ui-select
    $scope.availableAritist = ['Krishen Khanna', 'Manjit Bawa', 'Paramjit Singh', 'S Yousuf Ali', 'Umesh Varma', 'Arunanshu Chowdhury', '	Yashwant Shirwadkar'];
})

.controller('CartCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TeamCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("team");
    $scope.menutitle = NavigationService.makeactive("Team");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TotalartPageCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("totalartpage");
        $scope.menutitle = NavigationService.makeactive("Totalartpage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.artistimage = [{
            image: 'img/artist/artist1.jpg',
            name: 'S Yousuf Ali'
    }, {
            image: 'img/artist/artist2.jpg',
            name: 'Krishen Khanna'
    }, {
            image: 'img/artist/artist3.jpg',
            name: 'Manjit Bawa'
    }, {
            image: 'img/artist/artist4.jpg',
            name: 'Paramjit Singh'
    }, {
            image: 'img/artist/artist1.jpg',
            name: 'Sidharth'
    }, {
            image: 'img/artist/artist2.jpg',
            name: 'Ajay De'
    }, {
            image: 'img/artist/artist3.jpg',
            name: 'Ajay R Dhandre'
    }, {
            image: 'img/artist/artist5.jpg',
            name: 'Amarnath Sharma'
    }, {
            image: 'img/artist/artist1.jpg',
            name: 'S Yousuf Ali'
    }, {
            image: 'img/artist/artist2.jpg',
            name: 'Krishen Khanna'
    }, {
            image: 'img/artist/artist3.jpg',
            name: 'Manjit Bawa'
    }, {
            image: 'img/artist/artist4.jpg',
            name: 'Paramjit Singh'
    }];
    })
    .controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("checkout");
        $scope.menutitle = NavigationService.makeactive("Checkout");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //Valdr
        valdr.addConstraints({
            'Person': {
                'firstName': {
                    'size': {
                        'min': 3,
                        'max': 20,
                        'message': 'First name is required to be between 3 and 20 characters.'
                    },
                    'required': {
                        'message': 'First name is required.'
                    }
                }
            }
        });
    })
    .controller('EventsCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("events");
        $scope.menutitle = NavigationService.makeactive("Events");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //Valdr
     $scope.availableAritist = ['Krishen Khanna', 'Manjit Bawa', 'Paramjit Singh', 'S Yousuf Ali', 'Umesh Varma', 'Arunanshu Chowdhury', '	Yashwant Shirwadkar'];
    
      $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
   
    })
.controller('FeatureCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
    $scope.template = TemplateService.changecontent("feature");
    $scope.menutitle = NavigationService.makeactive("Features");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    //Angular Loader Example
    //Start loader
    $scope.showLoader = function () {
            cfpLoadingBar.start();
        }
        //Complete loader
    $scope.hideLoader = function () {
        cfpLoadingBar.complete();
    }

    //Angular toaster
    $scope.showToaster = function () {
        toaster.pop({
            type: 'success',
            title: 'Success!',
            body: 'Huraaay!',
            showCloseButton: true
        });
    };

    //Tags input
    $scope.tags = [{
        text: 'Chintan'
    }, {
        text: 'Saloni'
    }, {
        text: 'Sohan'
    }, {
        text: 'Mahesh'
    }, {
        text: 'Jagruti'
    }];

    //ngDialog
    $scope.showPopup = function () {
        ngDialog.open({
            template: 'demopop'
        });
    };

    //Valdr
    valdr.addConstraints({
        'Person': {
            'firstName': {
                'size': {
                    'min': 3,
                    'max': 20,
                    'message': 'First name is required to be between 3 and 20 characters.'
                },
                'required': {
                    'message': 'First name is required.'
                }
            }
        }
    });

    //Colours for ui-select
    $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

    //MomentJS
    $scope.today = new Date();
    $scope.dateformat = "medium";

})

.controller('ArtistDetailImageCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("detailImage");
    $scope.menutitle = NavigationService.makeactive("Artistdetailimage");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.artistDetailImg = [{
        image: 'img/imagedetail/imagedetail.jpg',
        id: ' 1527',
        artistname: 'Vipul Ravundra Babu',
        title: ' Floating Dreams',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs. 1,00,000/ $ 6.400'
    }];


    $scope.aristImages = [{
        image: 'img/artist/artist1.jpg',

    }, {
        image: 'img/artist/artist2.jpg',

    }, {
        image: 'img/artist/artist3.jpg',

    }, {
        image: 'img/artist/artist4.jpg',

    }, {
        image: 'img/artist/artist3.jpg',

    }, {
        image: 'img/artist/artist4.jpg',

    }];
})

.controller('ArtInfrastructureCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("artInfrastructure");
    $scope.menutitle = NavigationService.makeactive("ArtInfrastructure");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.artistDetailImg = [{
        image: 'img/imagedetail/imagedetail.jpg',
        id: ' 1527',
        artistname: 'Vipul Ravundra Babu',
        title: ' Floating Dreams',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs. 1,00,000/ $ 6.400'
    }];



})


.controller('ArtistDetailCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("artistdetail")
    $scope.menutitle = NavigationService.makeactive("ArtistDetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.artistdetail = [{
        image: 'img/artist/artist1.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist2.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist3.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist4.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Price available on request'
    }, {
        image: 'img/artist/artist5.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist2.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist5.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: '2000'
    }, {
        image: 'img/artist/artist4.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Price available on request'
    }];
})


.controller('ArtistCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("artist");
    $scope.menutitle = NavigationService.makeactive("Artist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.artistimage = [{
        image: 'img/artist/artist1.jpg',
        name: 'S Yousuf Ali'
    }, {
        image: 'img/artist/artist2.jpg',
        name: 'Krishen Khanna'
    }, {
        image: 'img/artist/artist3.jpg',
        name: 'Manjit Bawa'
    }, {
        image: 'img/artist/artist4.jpg',
        name: 'Paramjit Singh'
    }, {
        image: 'img/artist/artist1.jpg',
        name: 'Sidharth'
    }, {
        image: 'img/artist/artist2.jpg',
        name: 'Ajay De'
    }, {
        image: 'img/artist/artist3.jpg',
        name: 'Ajay R Dhandre'
    }, {
        image: 'img/artist/artist5.jpg',
        name: 'Amarnath Sharma'
    }, {
        image: 'img/artist/artist1.jpg',
        name: 'S Yousuf Ali'
    }, {
        image: 'img/artist/artist2.jpg',
        name: 'Krishen Khanna'
    }, {
        image: 'img/artist/artist3.jpg',
        name: 'Manjit Bawa'
    }, {
        image: 'img/artist/artist4.jpg',
        name: 'Paramjit Singh'
    }];
})


.controller('InfiniteCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("infinite");
    $scope.menutitle = NavigationService.makeactive("Infinite Scroll");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    //Infinite scroll
    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.loadMore = function () {
        var last = $scope.images[$scope.images.length - 1];
        for (var i = 1; i <= 8; i++) {
            $scope.images.push(last + i);
        }
    };
})

.controller('headerctrl', function ($scope, TemplateService, $window, ngDialog) {
    $scope.template = TemplateService;
    var scrolled = 0;
    angular.element($window).bind("scroll", function () {
        var scrolled = this.pageYOffset;
        //$scope.headheight = angular.element('.fixer-top').height();
        if (scrolled >= 5) {
            $(".fixer-top").addClass("shadow-on");
            console.log('5');
        } else {
            $(".fixer-top").removeClass("shadow-on");
            console.log('5');
        }
        $scope.$apply();
    });

    $scope.showLogin = function () {
        ngDialog.open({
            template: 'views/content/login.html'
        });
    };
})

;

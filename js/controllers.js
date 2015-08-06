angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider', 'ImageZoom'])

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
    .controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, valdr) {
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


        $scope.availableAritist = ['Krishen Khanna', 'Manjit Bawa', 'Paramjit Singh', 'S Yousuf Ali', 'Umesh Varma', 'Arunanshu Chowdhury', '	Yashwant Shirwadkar'];

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.event2015 = [{
            name: 'AURA ART CONNECTS THE TWO WORLDS OF ART AND FASHION',
            detail: ' ITC Grand-Maratha, Sahar Road, Mumbai',
            img: 'img/event/event1.jpg'
        }, {
            name: 'Art and Culture exchange between India & China',
            detail: 'Mar 31, 2015 - Mar 31, 2015 ITC Grand-Maratha, Sahar Road, Mumbai',
            img: 'img/event/event2.jpg'
        }];

        $scope.event2014 = [{
            name: 'The Art Enclave at UBM Index Fairs 2014',
            detail: ' Oct 09, 2014 - Oct 12, 2014 MMRDA Exhibition Centre, BKC, Mumbai',
            img: 'img/event/event3.jpg'
        }, {
            name: 'Art Partner for The Edutainment Show 2014',
            detail: 'Apr 26, 2014 - Apr 27, 2014 JW Marriott Hotel Mumbai',
            img: ''
        }, {
            name: 'Art Partner for Yes Bank International Polo Cup',
            detail: 'Mar 22, 2014 - Mar 22, 2014 Mahalaxmi Race Course, Mumbai',
            img: ''
        }];

        $scope.event2013 = [{
            name: 'Art Infrastructure – nobody’s business',
            detail: 'Dec 14, 2013 - Dec 14, 2013 Taj Lands End',
            img: 'img/event/event4.jpg'
        }, {
            name: 'Aura Art Show 2013 - Oct 15-21, 2013, Jehangir Art Gallery, Mumbai',
            detail: 'Oct 15, 2013 - Oct 21, 2013 Jehangir Art Gallery, Auditorium Hall',
            img: 'img/event/event5.jpg'
        }, {
            name: 'The Indian Luxury Expo - April 26-28, 2013, Grand Hyatt, Mumbai',
            detail: 'Apr 26, 2013 - Apr 28, 2013 Grand Hyatt',
            img: 'img/event/event6.jpg'
        }, {
            name: 'Wassup! Andheri, 2013 - A grand Art & Entertainment Festival',
            detail: 'Feb 28, 2013 - Mar 03, 2013 Chitrakoot Ground, Andheri',
            img: ''
        }, {
            name: 'Aura Art organised live painting demo at AGP Multi Million Race Day',
            detail: 'Feb 17, 2013 - Feb 17, 2013 Mahalaxmi Race Course',
            img: ''
        }, {
            name: 'Aura Art is delighted to be Exclusive Art Partner for AICOG 2013',
            detail: 'Jan 16, 2013 - Jan 20, 2013 BKC, Mumbai',
            img: ''
        }, {
            name: 'Group Show at The Capital  -  Fundraiser for Cuddles Foundation',
            detail: 'Jan 15, 2013 - Jan 21, 2013 The Capital, BKC, Mumbai',
            img: 'img/event/event7.jpg'
        }];


    })

.controller('EventdetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("eventdetail");
    $scope.menutitle = NavigationService.makeactive("Eventdetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.event = [{
        name: 'Aura Art connects the two worlds of art and fashion',
        venue: 'Pooja House, Opp JW Mariott, Juhu, Mumbai',
        Period: 'Saturday, 09 May 2015 - Saturday, 09 May 2015',
        time: '11:00 am to 7:00 pm',
        detail: '<p>In line with its vision of connecting a wider spectrum of society to fine art, Aura Art eConnect Pvt Ltd ("AAeCPL") is proud to be the Exclusive Art Partner for Amy Billimoria House of Design ("ABHD"). ABHD is a luxury destination for fashion, jewelry and art, founded by leading fashion designer Amy Billimoria, in association with Pankti Shah and is located in the prestigious and strategic neighborhood of Juhu.</p>  <p>We are delighted to invite you to ABHD on May 9, 2015 from 11am to 7pm, at Pooja House, next to Starbucks Café, opp JW Mariott, Juhu, to view a large array of fashion and design products, besides relishing paintings by renowned artists like S Yousuf Ali, Manjit Bawa, Umesh Varma, Sidharth, Vrundavan Solanki, Charan Sharma, Ajay De, Veguri Ravindra Babu, Tejinder Kanda and sculptures by Ratilal Kansodaria, Bhawan Rampure, Sachin Dadhich.</p><p>The design house was launched on May 7, 2015 amidst much fanfare, in the august presence of leading celebrities and dignitaries like Rani Mukerji, Esha Deol, Ayushmann Khurrana, Lucky Morani, Talat Aziz, Mahesh Chhabria, Anjali Chhabria,Nilesh Ganjwala,Yogesh Lakhani, Bhagyashree, Suchitra Krishnamoorthi, Anup Jalota, Tanishaa Mukerji, Deepti Gujral amongst others.</p><p>This is a novel initiative where a unique ambience has been created for an exciting display of both top of the line fashion products and the best of fine art under one roof.  In a venue like this, Aura Art eConnect looks forward to a convergence of sensitivities - of colour, form and texture - that compliment each other and enhance the viewing pleasure.You are welcome to partake in this heady concoction of art, fashion and design, which will be available at the design house 7 days a week from 10:00 am to 8:00 pm.</p>'

    }];

    $scope.gallery = [{

        image: 'img/eventgallery/g1.jpg'
    }, {

        image: 'img/eventgallery/g2.jpg'
    }, {

        image: 'img/eventgallery/g3.jpg'
    }, {

        image: 'img/eventgallery/g4.jpg'
    }, {

        image: 'img/eventgallery/g5.jpg'
    }, {

        image: 'img/eventgallery/g6.jpg'
    }, {

        image: 'img/eventgallery/g7.jpg'
    }];

    //    ****** popup lightbox ******

    $scope.zoomposition = 0;

    $scope.openModal = function (gal) {

        $scope.zoomposition = $scope.gallery.indexOf(gal);

        ngDialog.open({
            disableAnimation: true,
            template: 'views/directive/zoomimage.html',
            scope: $scope
        });
    };

    $scope.nextImage = function (oldposition) {
        if (oldposition == ($scope.gallery.length - 1)) {
            $scope.zoomposition = 0;
        } else {
            $scope.zoomposition++;
        }
    };

    $scope.previousImage = function (oldposition) {
        if (oldposition == 0) {
            $scope.zoomposition = ($scope.gallery.length - 1);
        } else {
            $scope.zoomposition--;
        }
    };
    $scope.openBox = function (id) {
        $(id).attr('openbox', 'show');
    }


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


.controller('MediacoveragesCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("mediacoverages");
    $scope.menutitle = NavigationService.makeactive("Mediacoverages");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.oneAtATime = true;

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    $scope.media2015 = [{
        name: 'Interiors & Decor',
        date: ' Sep 30, 2014 ',
        img: 'img/mediacove/m1.jpg'
    }, {
        name: 'Design Matrix',
        date: 'Oct 30, 2014 ',
        img: 'img/mediacove/m2.jpg'
    }, {
        name: 'IFJ',
        date: 'Aug 31, 2014',
        img: 'img/mediacove/m3.jpg'
    }, {
        name: 'The Design Source',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m4.jpg'
    }, {
        name: 'Sourcing Hardware',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m5.jpg'
    }, {
        name: 'Society Interiors',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m6.jpg'
    }, {
        name: 'Architecture + Design',
        date: 'Aug 31, 2014',
        img: 'img/mediacove/m7.jpg'
    }, {
        name: 'Times of India - Full page - Page 13',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m7.jpg'
    }];

    $scope.media2014 = [{
        name: 'Interiors & Decor',
        date: ' Sep 30, 2014 ',
        img: 'img/mediacove/m1.jpg'
    }, {
        name: 'Design Matrix',
        date: 'Oct 30, 2014 ',
        img: 'img/mediacove/m2.jpg'
    }, {
        name: 'IFJ',
        date: 'Aug 31, 2014',
        img: 'img/mediacove/m3.jpg'
    }, {
        name: 'The Design Source',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m4.jpg'
    }, {
        name: 'Sourcing Hardware',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m5.jpg'
    }, {
        name: 'Society Interiors',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m6.jpg'
    }, {
        name: 'Architecture + Design',
        date: 'Aug 31, 2014',
        img: 'img/mediacove/m7.jpg'
    }, {
        name: 'Times of India - Full page - Page 13',
        date: 'Sep 30, 2014',
        img: 'img/mediacove/m7.jpg'
    }];


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
    $scope.imageSrc = 'img/artist/artist1.jpg';
    $scope.switchImage = function (imageSrc) {
        console.log('change image to: ' + imageSrc);
        $scope.imageSrc = imageSrc;
    };

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
    .controller('AccountCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("account");
        $scope.menutitle = NavigationService.makeactive("Account");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.info = "bolds";

        $scope.changeinfo = function () {
            $scope.info = "bolds";
            $scope.chngpass = "";
            $scope.myorders = "";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changechngpass = function () {
            $scope.info = "";
            $scope.chngpass = "bolds";
            $scope.myorders = "";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changemyorders = function () {
            $scope.info = "";
            $scope.chngpass = "";
            $scope.myorders = "bolds";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changeordertracing = function () {
            $scope.info = "";
            $scope.chngpass = "";
            $scope.myorders = "";
            $scope.ordertracing = "bolds";
            $scope.listingmsg = "";
        }
    });
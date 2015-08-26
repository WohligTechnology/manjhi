angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider', 'ImageZoom', 'ui-rangeSlider'])

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
    // set available range
    $scope.minPrice = 0;
    $scope.maxPrice = 100000;

    // default the user's values to the available range
    $scope.userMinPrice = $scope.minPrice;
    $scope.userMaxPrice = $scope.maxPrice;
})

.controller('FavoriteCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("favorite");
        $scope.menutitle = NavigationService.makeactive("Favorite");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.artistdetail = [{
            image: 'img/artist/artist1.jpg',
            id: '1527',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
    }, {
            image: 'img/artist/artist2.jpg',
            id: '1527',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
    }, {
            image: 'img/artist/artist3.jpg',
            id: '1527',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
    }, {
            image: 'img/artist/artist4.jpg',
            id: '1527',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
    }];
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
    .controller('ArtistPageCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("artistpage");
        $scope.menutitle = NavigationService.makeactive("Artist");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ContactusCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

.controller('TotalartPageCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("totalartpage");
        $scope.menutitle = NavigationService.makeactive("Total Artwork");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.totalartcont = [{
            image: 'img/artist/artist1.jpg',
            name: 'S Yousuf Ali',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist2.jpg',
            name: 'Krishen Khanna',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist3.jpg',
            name: 'Manjit Bawa',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist4.jpg',
            name: 'Paramjit Singh',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist1.jpg',
            name: 'Sidharth',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist2.jpg',
            name: 'Ajay De',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist3.jpg',
            name: 'Ajay R Dhandre',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist5.jpg',
            name: 'Amarnath Sharma',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist1.jpg',
            name: 'S Yousuf Ali',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist2.jpg',
            name: 'Krishen Khanna',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist3.jpg',
            name: 'Manjit Bawa',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist4.jpg',
            name: 'Paramjit Singh',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist2.jpg',
            name: 'Krishen Khanna',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist3.jpg',
            name: 'Manjit Bawa',
            id: '15',
            size: '135x36'
        }, {
            image: 'img/artist/artist4.jpg',
            name: 'Paramjit Singh',
            id: '15',
            size: '135x36'
        }];
        $scope.artistDetailImg = [{
            image: 'img/imagedetail/imagedetail.jpg',
            id: ' 1527',
            artistname: 'Veguri Ravindra Babu',
            title: ' Floating Dreams',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
        }];

        // set available range
        $scope.minPrice = 0;
        $scope.maxPrice = 100000;

        // default the user's values to the available range
        $scope.userMinPrice = $scope.minPrice;
        $scope.userMaxPrice = $scope.maxPrice;

        $scope.imageSrc = 'img/artist/artist1.jpg';

        $scope.showDetails = function () {
            ngDialog.open({
                template: 'views/content/quickview-imagedetail.html'
            });
        };
    })
    .controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, valdr) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("checkout");
        $scope.menutitle = NavigationService.makeactive("Checkout");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //Valdr
        $scope.checkout = [];
        $scope.checkout.isshipping = true;

        $scope.showShipping = function (check) {
            console.log(check);
        }

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
    $scope.menutitle = NavigationService.makeactive("Event");
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


.controller('PressCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("press");
    $scope.menutitle = NavigationService.makeactive("Press");
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

.controller('ArtistDetailImageCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
        $scope.template = TemplateService.changecontent("detailImage");
        $scope.menutitle = NavigationService.makeactive("Artists");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.artistDetailImg = [{
            image: 'img/imagedetail/imagedetail.jpg',
            id: ' 1527',
            artistname: 'Veguri Ravindra Babu',
            title: ' Floating Dreams',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
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
    .controller('SculptureCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
        $scope.template = TemplateService.changecontent("sculpture");
        $scope.menutitle = NavigationService.makeactive("Sculpture");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.artistDetailImg = [{
            image: 'img/imagedetail/imagedetail.jpg',
            id: ' 1527',
            artistname: 'Arzan Khambatta',
            title: ' Floating Dreams',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
        }];
        $scope.imageSrc = 'img/imagedetail/sculputure.jpg';
        $scope.switchImage = function (imageSrc) {
            console.log('change image to: ' + imageSrc);
            $scope.imageSrc = imageSrc;
        };

        $scope.moreSculpture = [{
            image: 'img/imagedetail/sculputure.jpg'
        }, {
            image: 'img/imagedetail/sculputure.jpg'
        }, {
            image: 'img/imagedetail/sculputure.jpg'
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

.controller('ThoughtleadershipCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("thoughtleadership");
    $scope.menutitle = NavigationService.makeactive("Thoughtleadership");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.table = [{
        sr: '1',
        date: '06/07/2013',
        title: 'Aura Art announces ICICI Lombard as Insurance Partner'

    }, {
        sr: '2',
        date: '08/06/2012',
        title: 'China overtakes the United States to become the worlds largest art and antiques market'

    }, {
        sr: '3',
        date: '24/06/2010',
        title: 'Hedging Millionaires Buy Jets, Art, Bling...'

    }, {
        sr: '4',
        date: '24/02/2010',
        title: 'Aura Art: has moved to an office-cum-gallery in Kalina (off BKC)'

    }, {
        sr: '5',
        date: '01/09/2009',
        title: 'Aura Art goes International'

    }, {
        sr: '6',
        date: '25/05/2009',
        title: 'Show se show tak... Change (in Asset Allocation) is the only constant...'

    }, {
        sr: '7',
        date: '01/04/2009',
        title: 'Malvinder Singh is on to other things — art, photography and Ranbaxy, of course...'

    }, {
        sr: '8',
        date: '25/10/2008',
        title: 'Mumbai-born artist goes for Rs 17 crore'

    }, {
        sr: '9',
        date: '06/07/2015',
        title: 'Aura Art Show 2008... thanks...'

    }, {
        sr: '10',
        date: '06/05/2013',
        title: 'Aura Art in the news - Bombay Times and Human Rights Times'

    }];

})

.controller('ThoughtleadershipdetailCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("thoughtleadershipdetail");
    $scope.menutitle = NavigationService.makeactive("Thoughtleadershipdetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.table = [{
        sr: '1',
        date: '06/07/2013',
        title: 'Aura Art announces ICICI Lombard as Insurance Partner'

    }, {
        sr: '2',
        date: '08/06/2012',
        title: 'China overtakes the United States to become the worlds largest art and antiques market'

    }, {
        sr: '3',
        date: '24/06/2010',
        title: 'Hedging Millionaires Buy Jets, Art, Bling...'

    }, {
        sr: '4',
        date: '24/02/2010',
        title: 'Aura Art: has moved to an office-cum-gallery in Kalina (off BKC)'

    }, {
        sr: '5',
        date: '01/09/2009',
        title: 'Aura Art goes International'

    }, {
        sr: '6',
        date: '25/05/2009',
        title: 'Show se show tak... Change (in Asset Allocation) is the only constant...'

    }, {
        sr: '7',
        date: '01/04/2009',
        title: 'Malvinder Singh is on to other things — art, photography and Ranbaxy, of course...'

    }, {
        sr: '8',
        date: '25/10/2008',
        title: 'Mumbai-born artist goes for Rs 17 crore'

    }, {
        sr: '9',
        date: '06/07/2015',
        title: 'Aura Art Show 2008... thanks...'

    }, {
        sr: '10',
        date: '06/05/2013',
        title: 'Aura Art in the news - Bombay Times and Human Rights Times'

    }];

})

.controller('ArtInfrastructureCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("artInfrastructure");
    $scope.menutitle = NavigationService.makeactive("Art Infrastructure");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.artistDetailImg = [{
        image: 'img/imagedetail/imagedetail.jpg',
        id: ' 1527',
        artistname: 'Veguri Ravindra Babu',
        title: ' Floating Dreams',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }];
})


.controller('ArtistDetailCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("artistdetail")
    $scope.menutitle = NavigationService.makeactive("Artist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.artistdetail = [{
        image: 'img/artist/artist1.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist2.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist3.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs1,00,000/ $6,400'
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
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist2.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist5.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
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


.controller('ArtistCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
    $scope.template = TemplateService.changecontent("artist");
    $scope.menutitle = NavigationService.makeactive("Artists");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tab = 'grid';

    


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
    },{
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
    }];
    $scope.showDetail = function () {
        ngDialog.open({
            template: 'views/content/quickview-artist.html'
        });
    };

    $scope.artistdetail = [{
        image: 'img/artist/artist1.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist2.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist3.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
    }, {
        image: 'img/artist/artist4.jpg',
        id: '1527',
        typename: 'Untitled',
        madein: 'Oil on board',
        size: '19.5 x 23',
        year: '1978',
        price: 'Rs.1,00,000/ $6,400'
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

.controller('headerctrl', function ($scope, TemplateService, $window, ngDialog, NavigationService) {
    $scope.template = TemplateService;
    var scrolled = 0;
    $scope.logintab = '1';
    $scope.login = {};
    $scope.register = {};
    $scope.forgot = {};

    $scope.showLogin = function () {
        ngDialog.open({
            template: 'views/content/login.html'
        });
    };
    $scope.changeTab = function (tab) {
        $scope.logintab = tab;
    }

    $scope.userlogin = function () {
        console.log($scope.login);
        NavigationService.userlogin($scope.login, function (data, status) {
            console.log(data);
            if (data.value != false) {
                $.jStorage.set("user", data);
                ngDialog.closeAll();
            }
        })
    };

    $scope.registeruser = function () {
        console.log($scope.register);
        if ($scope.register.password === $scope.register.confirmpassword) {
            NavigationService.registeruser($scope.register, function (data, status) {
                console.log(data);
                if (data.value == true) {
                    $scope.changeTab(1);
                }
            })
        }
    };

    $scope.forgotpassword = function () {
        console.log($scope.forgot);
        NavigationService.forgotpassword($scope.forgot, function (data, status) {
            console.log(data);
            if (data.value == true) {
                $scope.changeTab(4);
            }
        })
    }

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        // Send login to server or save into cookie
        console.log(authResult);
    });
    $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
        // Auth failure or signout detected
        console.log(authResult);
    });

})

.controller('AccountCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("account");
        $scope.menutitle = NavigationService.makeactive("Account");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.info = "bolds";
        $scope.resi = "active";
        $scope.formstatus = false;
        $scope.formstatussec = false;

        $scope.changeTab = function (tab) {
            if (tab == 1) {
                $scope.formstatus = true;
                //                $scope.formstatussec = false;
            } else {
                //                $scope.formstatus = false;
                $scope.formstatussec = true;
            }

        }
        $scope.closeTab = function (tab) {
            if (tab == 1) {
                $scope.formstatus = false;
                //                $scope.formstatussec = false;
            } else {
                //                $scope.formstatus = false;
                $scope.formstatussec = false;
            }

        }
        $scope.changeTabs = function () {
            $scope.formstatussec = true;
        }

        $scope.changeresi = function () {
            $scope.resi = "active";
            $scope.offce = "";
        }
        $scope.changeoffice = function () {
            $scope.resi = "";
            $scope.offce = "active";
        }

        $scope.changeinfo = function () {
            $scope.info = "bolds";
            $scope.chngpass = "";
            $scope.chngadd = "";
            $scope.myorders = "";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changeadress = function () {
            $scope.info = "";
            $scope.chngpass = "";
            $scope.chngadd = "bolds";
            $scope.myorders = "";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }
        $scope.changechngpass = function () {
            $scope.info = "";
            $scope.chngpass = "bolds";
            $scope.chngadd = "";
            $scope.myorders = "";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changemyorders = function () {
            $scope.info = "";
            $scope.chngpass = "";
            $scope.chngadd = "";
            $scope.myorders = "bolds";
            $scope.ordertracing = "";
            $scope.listingmsg = "";
        }

        $scope.changeordertracing = function () {
            $scope.info = "";
            $scope.chngpass = "";
            $scope.chngadd = "";
            $scope.myorders = "";
            $scope.ordertracing = "bolds";
            $scope.listingmsg = "";
        }
    })
    .controller('ActivitiesCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("activities");
        $scope.menutitle = NavigationService.makeactive("Activities");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ReachOutCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("reach-out");
        $scope.menutitle = NavigationService.makeactive("Reach Out");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateArtworkCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("create-artwork");
        $scope.menutitle = NavigationService.makeactive("Create Artwork");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateUserCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("create-user");
        $scope.menutitle = NavigationService.makeactive("Create User");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('FavoriteProductCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("favorite-product");
        $scope.menutitle = NavigationService.makeactive("Favorites");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.artistDetailImg = [{
            image: 'img/imagedetail/imagedetail.jpg',
            id: ' 1527',
            artistname: 'Arzan Khambatta',
            title: ' Floating Dreams',
            typename: 'Untitled',
            madein: 'Oil on board',
            size: '19.5 x 23',
            year: '1978',
            price: 'Rs.1,00,000/ $6,400'
        }];
        $scope.imageSrc = 'img/imagedetail/sculputure.jpg';
        $scope.switchImage = function (imageSrc) {
            console.log('change image to: ' + imageSrc);
            $scope.imageSrc = imageSrc;
        };
    });

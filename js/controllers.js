var dataNextPre = {};

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider', 'ui-rangeSlider'])

//.controller('AppCtrl')

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, $location, $state, $stateParams) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("home");
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.filterby = {};
	$scope.filterby.search = "";
	$scope.filterby.type = "";
	$scope.filterby.pagenumber = 1;
	$scope.filterby.pagesize = 20;
	$scope.filterby.filter = "srno";
	$scope.filterby.sort = 1;
	$scope.filterby.minprice = 0;
	$scope.filterby.maxprice = 10000000;
	$scope.filterby.minwidth = '';
	$scope.filterby.maxwidth = '';
	$scope.filterby.minheight = '';
	$scope.filterby.maxheight = '';
	$scope.filterby.minbreadth = '';
	$scope.filterby.maxbreadth = '';
	NavigationService.getSlider(function(data){
		$scope.slides = data;
	})
	
	dataNextPre.setData = function(data){
		console.log(data);
	}
	 
	// set available range
	$scope.minPrice = 0;
	$scope.maxPrice = 10000000;

	// default the user's values to the available range
	$scope.userMinPrice = $scope.minPrice;
	$scope.userMaxPrice = $scope.maxPrice;

	//    NavigationService.getsliderimages(function (data, status) {
	//        _.each(data, function (n) {
	//            $scope.slides.push(n._id);
	//        })
	//    });

	$scope.applyfilter = function () {
		console.log($scope.filterby);
		$.jStorage.set("filterby", $scope.filterby)
//		$location.url("/artwork/-1");
		$state.go('totalartpage',{type:-1});
	}

	$scope.goToArtworks = function (type) {
//		$location.url("/artwork/" + type);
		$state.go('totalartpage',{type:type});
	}
	$scope.onclick = function (value) {
		$scope.filterby.checked
	}
	var lastChecked = null
	$scope.onclick = function (event) {
		if (event.target.value === lastChecked) {
			$scope.filterby.type = "";
			$scope.getallartist();
			lastChecked = null
		} else {
			lastChecked = event.target.value
		}
	}
	$scope.changetype = function (chang) {
		if (chang == 1) {
			$scope.filterby.type = "Paintings";
			$scope.getallartist();
			$scope.getmedium();
		} else if (chang == 2) {
			$scope.filterby.type = "Sculptures";
			$scope.getallartist();
			$scope.getmedium();
		} else if (chang == 3) {
			$scope.filterby.type = "Photographs";
			$scope.getallartist();
			$scope.getmedium();
		} else if (chang == 4) {
			$scope.filterby.type = "Prints";
			$scope.getallartist();
			$scope.getmedium();
		}
	}
	$scope.setSearch = function (select) {
		$scope.filterby.search = select.selected.name;
	}
	$scope.setMediumSearch = function (select) {
		$scope.filterby.medium = select.selected.name;
	}
	$scope.allartist = [];
	$scope.allmedium = [];
	$scope.getmedium = function () {
		if ($scope.filterby.type == "") {
			console.log("in if");
			$scope.change = {};
			NavigationService.getallmedium($scope.change, function (data, status) {
				if (data && data.value != false) {
					$scope.allmedium = _.uniq(data, '_id');
				} else {
					$scope.allmedium = [];
				}
			});
		} else {
			console.log("in else");
			$scope.change = {};
			$scope.change.type = $scope.filterby.type;
			NavigationService.getallmedium($scope.change, function (data, status) {
				if (data && data.value != false) {
					$scope.allmedium = _.uniq(data, '_id');
				} else {
					$scope.allmedium = [];
				}
			});
		}
	}
	$scope.getallartist = function () {
		if ($scope.filterby.type == "") {
			NavigationService.getAllArtistByAccess(function (data, status) {
				if (data && data.value != false) {
					$scope.allartist = _.uniq(data, '_id');
				} else {
					$scope.allartist = [];
				}
			});
		} else {
			NavigationService.userbytype($scope.filterby.type, function (data, status) {
				if (data && data.value != false) {
					$scope.allartist = data;
				} else {
					$scope.allartist = [];
				}
			});
		}
	}
	$scope.getDropdown = function (search) {
		if (search.length >= 3) {
			$scope.change = {};
			$scope.change.type = $scope.filterby.type;
			$scope.change.search = search;
			NavigationService.getAllArtistDrop($scope.change, function (data) {
				if (data && data.value != false) {
					$scope.allartist = data;
				} else {
					$scope.allartist = [];
				}
			});
		} else {
			$scope.getallartist();
		}
	}
	$scope.getDropdownMedium = function (search) {
		if (search.length >= 3) {
			$scope.change = {};
			$scope.change.type = $scope.filterby.type;
			$scope.change.search = search;
			NavigationService.getallmedium($scope.change, function (data) {
				if (data && data.value != false) {
					$scope.allmedium = data;
				} else {
					$scope.allmedium = [];
				}
			});
		} else {
			$scope.getmedium();
		}
	}

})

.controller('FavoriteCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("favorite");
	$scope.menutitle = NavigationService.makeactive("Favorite");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.artistdetail = [];
	$scope.allfavourites = [];
	$scope.noFavs = false;

	if ($.jStorage.get("user")) {
		cfpLoadingBar.start();
		NavigationService.getMyFavourites(function (data, status) {
			console.log(data);
			if (data.value != false && data.comment != "No data found") {
				$scope.noFavs = false;
				_.each(data, function (n) {
					$scope.allfavourites.push({
						"_id": n.wishlist.artwork
					});
				});

				NavigationService.getAllFavouritesData($scope.allfavourites, function (data, status) {
					console.log(data);
					$scope.artistdetail = data;
					$scope.totalfav = data.length;
					cfpLoadingBar.complete();
				})
			} else {
				$scope.noFavs = true;
				cfpLoadingBar.complete();
			}
		})
	}

	//    $scope.artistdetail = [{
	//        image: 'img/artist/artist1.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist2.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist3.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist4.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }];
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

.controller('TotalartWorkCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog, $stateParams, $location, $state) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("totalartwork");
	$scope.menutitle = NavigationService.makeactive("Total Artwork");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.pagedata = {};
	$scope.pagedata.search = "";
	$scope.pagedata.type = "";
	$scope.pagedata.medium = "";
	$scope.pagedata.pagenumber = 1;
	$scope.pagedata.pagesize = 20;
	$scope.pagedata.filter = "";
	$scope.pagedata.sort = 1;
	$scope.pagedata.minprice = '';
	$scope.pagedata.maxprice = '';
	$scope.pagedata.minwidth = '';
	$scope.pagedata.maxwidth = '';
	$scope.pagedata.minheight = '';
	$scope.pagedata.maxheight = '';
	$scope.pagedata.minbreadth = '';
	$scope.pagedata.maxbreadth = '';
	$scope.totalartcont = [];
	$scope.maxpages = 2;
	$scope.callinfinite = true;
	$scope.isRed = false;
	$scope.heartClass = "fa fa-heart";
	var lastpage = 2;

	$scope.typejson = [{
		name: "All",
		class: "actives"
    }, {
		name: "Paintings",
		class: ""
    }, {
		name: "Sculptures",
		class: ""
    }, {
		name: "Photographs",
		class: ""
    }, {
		name: "Prints",
		class: ""
    }, {
		name: "Others",
		class: ""
    }]

	$scope.changeHeartColor = function (totalartcont) {
		if ($scope.isRed == true)
			totalartcont.heartClass = "fa fa-heart";
		else
			totalartcont.heartClass = "fa fa-heart font-color3";
		$scope.isRed = !$scope.isRed;
	}

	$scope.makeFav = function (art) {
		if ($.jStorage.get("user")) {
			if (art.heartClass == "fa fa-heart") {
				NavigationService.addToFav(art.artwork._id, function (data) {
					console.log(data);
					if (!data.value) {
						$.jStorage.set("user", data);
						art.heartClass = "fa fa-heart font-color3";
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					} else if (data.value == true && data.comment == "Data already updated") {
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					}
				})
			} else if (art.heartClass == "fa fa-heart font-color3") {
				NavigationService.deleteFromFav(art.artwork._id, function (data) {
					console.log(data);
					if (!data.value) {
						$.jStorage.set("user", data);
						art.heartClass = "fa fa-heart";
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Removed from favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					}
				})
			}
		} else {
			var xyz = ngDialog.open({
				template: '<div class="pop-up"><h5 class="popup-wishlist">Please login to add to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
				plain: true
			});
			$timeout(function () {
				xyz.close();
			}, 3000)
		}
	}

	$scope.checkForEmpty = function () {
		if ($scope.pagedata.minprice == '')
			$scope.pagedata.minprice = 0;
		if ($scope.pagedata.maxprice == '')
			$scope.pagedata.maxprice = 10000000;
		if ($scope.pagedata.minwidth == '')
			$scope.pagedata.minwidth = 0;
		if ($scope.pagedata.maxwidth == '')
			$scope.pagedata.maxwidth = 10000;
		if ($scope.pagedata.minheight == '')
			$scope.pagedata.minheight = 0;
		if ($scope.pagedata.maxheight == '')
			$scope.pagedata.maxheight = 10000;
		if ($scope.pagedata.minbreadth == '')
			$scope.pagedata.minbreadth = 0;
		if ($scope.pagedata.maxbreadth == '')
			$scope.pagedata.maxbreadth = 10000;
	}

	$scope.reload = function () {
		cfpLoadingBar.start();
		console.log($scope.pagedata);
		NavigationService.artworktype($scope.pagedata, function (data, status) {
			lastpage = parseInt(data.totalpages);
			_.each(data.data, function (n) {
				n.heartClass = "fa fa-heart";
				if ($.jStorage.get("user") && $.jStorage.get("user").wishlist) {
					var ispresent = _.findIndex($.jStorage.get("user").wishlist, 'artwork', n.artwork._id);
					if (ispresent != -1) {
						n.heartClass = "fa fa-heart font-color3";
					}
				}
				$scope.totalartcont.push(n);
			})
			$scope.callinfinite = false;
			console.log($scope.totalartcont);
			cfpLoadingBar.complete();
		});
	}

	//    $scope.reload();

	$scope.makeactive = function (type) {
		console.log(type);
		_.each($scope.typejson, function (n) {
			var index = n.name.indexOf(type);
			if (index != -1) {
				n.class = "actives";
			} else {
				n.class = "";
			}
		})
		if (type == "All")
			type = "";
		$scope.pagedata.type = type;
		$scope.totalartcont = [];
		$scope.pagedata.pagenumber = 1;
		// $scope.pagedata.search = '';
		$scope.pagedata.filter = "srno";
		$scope.pagedata.sort = 1;
		// $scope.pagedata.medium = '';
		$scope.checkForEmpty();
		$scope.reload();
	}

	//    $scope.loadMore = function () {
	//        $scope.pagedata.pagenumber++;
	//        if ($scope.pagedata.pagenumber <= $scope.totalpagecount) {
	//            $scope.reload();
	//        }
	//    };

	$scope.filterresults = function (search) {
		console.log(search);
		$scope.pagedata.search = _.capitalize(search);
		$scope.totalartcont = [];
		$scope.pagedata.pagenumber = 1;
		$scope.pagedata.filter = "srno";
		$scope.pagedata.sort = 1;
		$scope.checkForEmpty();
		$scope.reload();
	}

	// $(window).scroll(function() {
	//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	//         console.log("at bottom");
	//         $scope.pagedata.pagenumber++;
	//         $scope.reload();
	//     }
	// });

	$scope.addMoreItems = function () {
		if (lastpage > $scope.pagedata.pagenumber) {
			$scope.pagedata.pagenumber++;
			$scope.reload();
		}
	}


	// set available range
	$scope.minPrice = 0;
	$scope.maxPrice = 10000000;

	// default the user's values to the available range
	$scope.userMinPrice = $scope.minPrice;
	$scope.userMaxPrice = $scope.maxPrice;

	$scope.imageSrc = 'img/artist/artist1.jpg';

	//    $scope.showDetails = function () {
	//        ngDialog.open({
	//            scope: $scope,
	//            template: 'views/content/quickview-imagedetail.html'
	//        });
	//    };

	$scope.artistDetailImg = {};
	$scope.showDetails = function (oneuser) {
		console.log(oneuser)
		$scope.artistDetailImg = oneuser;
		ngDialog.open({
			scope: $scope,
			template: 'views/content/quickview-imagedetail.html'
		});
	};

	$scope.sortBy = function (num, by) {
		$scope.pagedata.sort = num;
		$scope.pagedata.filter = by;
		$scope.pagedata.pagenumber = 1;
		$scope.totalartcont = [];
		$scope.reload();
	}

	if ($stateParams.type != -1) {
		$scope.makeactive($stateParams.type);
	} else {
		$scope.pagedata = $.jStorage.get("filterby");
		$scope.checkForEmpty();
		$stateParams.type = "All";
		if ($.jStorage.get("filterby") && $.jStorage.get("filterby").type == '')
			$scope.makeactive("All");
		else
			$scope.makeactive($.jStorage.get("filterby").type);
	}

	$scope.clearfilters = function () {
		$scope.pagedata.search = "";
		$scope.pagedata.type = "";
		$scope.pagedata.pagenumber = 1;
		$scope.pagedata.pagesize = 20;
		$scope.pagedata.filter = "";
		$scope.pagedata.medium = '';
		$scope.pagedata.sort = 1;
		$scope.pagedata.minprice = 0;
		$scope.pagedata.maxprice = 10000000;
		$scope.pagedata.minwidth = 0;
		$scope.pagedata.maxwidth = 10000;
		$scope.pagedata.minheight = 0;
		$scope.pagedata.maxheight = 10000;
		$scope.pagedata.minbreadth = 0;
		$scope.pagedata.maxbreadth = 10000;
		$scope.makeactive('All');
	}

	$scope.goToDetailPage = function (artwork) {
		console.log(artwork);
		if (artwork.type == "Sculptures") {
//			$location.url("/sculpture/" + artwork._id);
			$state.go('sculpture',{artid:artwork._id});
		} else {
//			$location.url("/artwork/detail/" + artwork._id);
			$state.go('detail',{artid:artwork._id});
		}
	}
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

.controller('InviteCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("invite");
	$scope.menutitle = NavigationService.makeactive("Invite");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

})

.controller('EventsCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("events");
	$scope.menutitle = NavigationService.makeactive("Events");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	NavigationService.getupcomingevents(function (data, status) {
		console.log(data);
	});

	NavigationService.getpresentevents(function (data, status) {
		console.log(data);
	});

	NavigationService.getpastevents(function (data, status) {
		console.log(data);
	});

	$scope.availableAritist = ['Krishen Khanna', 'Manjit Bawa', 'Paramjit Singh', 'S Yousuf Ali', 'Umesh Varma', 'Arunanshu Chowdhury', '   Yashwant Shirwadkar'];

	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};


	$scope.availableAritist = ['Krishen Khanna', 'Manjit Bawa', 'Paramjit Singh', 'S Yousuf Ali', 'Umesh Varma', 'Arunanshu Chowdhury', '   Yashwant Shirwadkar'];

	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};

	$scope.event2016 = [{
			name: 'AURA ART CONNECTS THE TWO WORLDS OF ART AND FASHION',
			detail: ' ITC Grand-Maratha, Sahar Road, Mumbai',
			img: 'img/event/event1.jpg'
        }
        // , {
        //     name: 'Art and Culture exchange between India & China',
        //     detail: 'Mar 31, 2015 - Mar 31, 2015 ITC Grand-Maratha, Sahar Road, Mumbai',
        //     img: 'img/event/event2.jpg'
        // }
    ];

	$scope.event2015 = [{
			name: 'The Art Enclave at UBM Index Fairs 2014',
			detail: ' Oct 09, 2014 - Oct 12, 2014 MMRDA Exhibition Centre, BKC, Mumbai',
			img: 'img/event/event3.jpg'
        }
        // , {
        //     name: 'Art Partner for The Edutainment Show 2014',
        //     detail: 'Apr 26, 2014 - Apr 27, 2014 JW Marriott Hotel Mumbai',
        //     img: ''
        // }
        // , {
        //     name: 'Art Partner for Yes Bank International Polo Cup',
        //     detail: 'Mar 22, 2014 - Mar 22, 2014 Mahalaxmi Race Course, Mumbai',
        //     img: ''
        // }
    ];

	$scope.event2014 = [{
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

.controller('ArtistDetailImageCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, $rootScope, $location, cfpLoadingBar, $timeout, $state) {
	$scope.template = TemplateService.changecontent("detailimage");
	$scope.menutitle = NavigationService.makeactive("Artists");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.aristImages = [];
	$scope.allartworks = [];
	
	cfpLoadingBar.start();
	$timeout(function () {
		cfpLoadingBar.complete();
	}, 5000);
	
	$scope.loadArtWork = function(id){
	NavigationService.getartworkdetail(id, function (data, status) {
		$scope.aristImages = [];
		$scope.artid = data[0]._id;
		NavigationService.getoneartist(data[0]._id, function (artistdata, status) {
			console.log(artistdata);
			$scope.allartworks = artistdata;
			_.each(artistdata.artwork, function (n) {
				if (n._id != data[0].artwork._id) {
					$scope.aristImages.push(n);
				}
			})
			$scope.aristImages = _.chunk($scope.aristImages, 6);
			$scope.aristImages = $scope.aristImages[0];
			console.log($scope.aristImages);
			cfpLoadingBar.complete();
		})
		$scope.artistDetailImg = data[0];
		
	})
	}
	
	$scope.loadArtWork($stateParams.artid);
	$scope.images = [{
		small: 'img/zoomsmall.jpg',
		large: 'img/zoomlarge.jpg'
    }, {
		small: 'img/zoomsmall.jpg',
		large: 'img/zoomlarge.jpg'
    }, {
		small: 'img/zoomsmall.jpg',
		large: 'img/zoomlarge.jpg'
    }];
	
	$scope.artPrev = function(){
		NavigationService.nextPrev($scope.artistDetailImg.artwork.srno,'prev',function(data){
			$scope.artistDetailImg = data;
		})
	}
	
	$scope.artNext = function(){
		NavigationService.nextPrev($scope.artistDetailImg.artwork.srno,'next',function(data){
			$scope.artistDetailImg = data;
		})
	}

	$scope.showitabove = function (artwork) {
		// $scope.aristImages = [];
		// delete $scope.artistDetailImg.artwork;
		// $scope.artistDetailImg.artwork = artwork;
		// _.each($scope.allartworks.artwork, function(n) {
		//     if (n._id != artwork._id) {
		//         $scope.aristImages.push(n);
		//     }
		// })
		// $rootScope.$broadcast('changeImage', {});
//		$location.url("/artwork/detail/" + artwork._id);
		$state.go('detail',{artid:artwork._id})
	}

})

.controller('SculptureCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, $rootScope, $location, $state) {
	$scope.template = TemplateService.changecontent("sculpture");
	$scope.menutitle = NavigationService.makeactive("Sculpture");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.aristImages = [];
	$scope.allartworks = [];

	NavigationService.getartworkdetail($stateParams.artid, function (data, status) {
		console.log(data);
		NavigationService.getoneartist(data[0]._id, function (artistdata, status) {
			console.log(artistdata);
			$scope.allartworks = artistdata;
			_.each(artistdata.artwork, function (n) {
				if (n._id != data[0].artwork._id) {
					$scope.aristImages.push(n);
				}
			})
			$scope.aristImages = _.chunk($scope.aristImages, 6);
			$scope.aristImages = $scope.aristImages[0];
			console.log($scope.aristImages);
		})
		$scope.artistDetailImg = data[0];
	})

	$scope.images = [{
		small: 'img/smallsculpture.jpg',
		large: 'img/largesculpture.jpg'
    }, {
		small: 'img/smallsculpture.jpg',
		large: 'img/largesculpture.jpg'
    }, {
		small: 'img/smallsculpture.jpg',
		large: 'img/largesculpture.jpg'
    }];

	$scope.showitabove = function (artwork) {
		// $scope.aristImages = [];
		// delete $scope.artistDetailImg.artwork;
		// $scope.artistDetailImg.artwork = artwork;
		// _.each($scope.allartworks.artwork, function(n) {
		//     if (n._id != artwork._id) {
		//         $scope.aristImages.push(n);
		//     }
		// })
		// $rootScope.$broadcast('changeImage', {});
//		$location.url("/artwork/detail/" + artwork._id);
		$state.go('detail',{artid:artwork._id});
	}

	$scope.activeImage = function (imagetopush) {
		if ($scope.artistDetailImg.artwork.image.length > 1) {
			$scope.artistDetailImg.artwork.image.splice(_.indexOf($scope.artistDetailImg.artwork.image, imagetopush), 1);
			$scope.artistDetailImg.artwork.image.unshift(imagetopush);
			$rootScope.$broadcast('changeImage', {});
		}
	}
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
	$scope.template = TemplateService.changecontent("artinfrastructure");
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


.controller('ArtistDetailCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $location, $state) {
	$scope.template = TemplateService.changecontent("artistdetail")
	$scope.menutitle = NavigationService.makeactive("Artist");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	//    console.log($stateParams.artistid);
	NavigationService.getoneartist($stateParams.artistid, function (data, status) {
		console.log(data);
		$scope.artistdetail = data
	})

	$scope.goToDetail = function (artid) {
//		$location.url("/artwork/detail/" + artid);
		$state.go('detail',{artid:artid});
	}

	//    $scope.artistdetail = [{
	//        image: 'img/artist/artist1.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist2.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist3.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist4.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Price available on request'
	//    }, {
	//        image: 'img/artist/artist5.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist2.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist5.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//    }, {
	//        image: 'img/artist/artist4.jpg',
	//        id: '1527',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Price available on request'
	//    }];
})


.controller('ArtistCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, cfpLoadingBar) {
	$scope.template = TemplateService.changecontent("artist");
	$scope.menutitle = NavigationService.makeactive("Artists");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.tab = 'grid';
	$scope.pagedata = {};
	$scope.pagedata.pagenumber = 1;
	$scope.pagedata.pagesize = 18;
	$scope.pagedata.search = '';
	$scope.pagedata.searchname = '';
	$scope.artistimage = [];
	$scope.listview = [];
	var lastpage = 2;
	
	NavigationService.getAllArtistByAccess(function (data, status) {
		console.log("All List of Artist");
		$scope.listview = _.uniq(data, '_id');
		console.log($scope.listview);
	});

	$scope.reload = function () {
		cfpLoadingBar.start();
		NavigationService.getallartist($scope.pagedata, function (data, status) {
			console.log("All artist data");
			console.log(data);
			lastpage = parseInt(data.totalpages);
			_.each(data.data, function (n) {
				$scope.artistimage.push(n);
				$scope.listview.push(n);
			})
			$scope.artistimage = _.uniq($scope.artistimage, '_id');
			$scope.listview = _.uniq($scope.listview, '_id');
			cfpLoadingBar.complete();
		});
	}

	//    $scope.reload();

	$scope.getartistbyletter = function (letter) {
		_.each($scope.alphabetjson, function (n) {
			//            var index = n.name.indexOf(letter);
			//            console.log(index);
			if (n.name == letter) {
				n.class = "actived";
			} else {
				n.class = "";
			}
		});

		if (letter == "All")
			letter = "";

		$scope.pagedata.search = letter;
		$scope.pagedata.pagenumber = 1;
		$scope.artistimage = [];
		$scope.listview = [];
		$scope.reload();
	}

	$scope.getartistbysearch = function () {
		$scope.pagedata.pagenumber = 1;
		$scope.artistimage = [];
		$scope.listview = [];
		$scope.reload();
	}

	$scope.makeactive = function (type) {
		console.log(type);
		_.each($scope.typejson, function (n) {
			var index = n.name.indexOf(type);
			if (index != -1) {
				n.class = "actives";
			} else {
				n.class = "";
			}
		})
		if (type == "All")
			type = "";
		else{
			$scope.getartistbyletter(type);
		}
		$scope.pagedata.type = type;
		$scope.pagedata.pagenumber = 1;
		//        $scope.pagedata.search = '';
		$scope.pagedata.searchname = '';
		$scope.artistimage = [];
		$scope.listview = [];
		$scope.reload();
	}

	// $(window).scroll(function() {
	//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	//         console.log("at bottom");
	//         $scope.pagedata.pagenumber++;
	//         $scope.reload();
	//     }
	// });

	$scope.addMoreItems = function () {
		console.log("addmore");
		if (lastpage >= $scope.pagedata.pagenumber) {
			$scope.pagedata.pagenumber++;
			$scope.reload();
		}
	}


	$scope.artistdetail = {};
	$scope.showDetail = function (artist) {
		console.log(artist);
		$scope.artistdetail = artist;
		var makeit4 = _.chunk($scope.artistdetail.artwork, 4);
		$scope.artistdetail.artwork = makeit4[0];

		ngDialog.open({
			scope: $scope,
			template: 'views/content/quickview-artist.html'
		});
	};

	$scope.alphabetjson = [{
		name: "All",
		class: "actived"
    }]

	for (var i = 0; i < 26; i++) {
		$scope.alphabetjson.push({
			name: String.fromCharCode(65 + i),
			class: ''
		})
	}

	$scope.typejson = [{
		name: "All",
		class: "actives"
    }, {
		name: "Paintings",
		class: ""
    }, {
		name: "Sculptures",
		class: ""
    }, {
		name: "Photographs",
		class: ""
    }, {
		name: "Prints",
		class: ""
    }, {
		name: "Others",
		class: ""
    }]

	$scope.makeactive($stateParams.type);
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

.controller('headerctrl', function ($scope, TemplateService, $window, ngDialog, NavigationService, $location, cfpLoadingBar, $state, $stateParams) {
	$scope.template = TemplateService;
	var scrolled = 0;
	$scope.logintab = '1';
	$scope.login = {};
	$scope.register = {};
	$scope.register.accesslevel = "customer";
	$scope.forgot = {};
	$scope.showInvalidLogin = false;
	$scope.showAlreadyRegistered = false;
	$scope.passwordNotMatch = false;
	$scope.showWishlist = false;
	$scope.user = {};
	$scope.user.name = '';
	$scope.art = {};
	$scope.art.search = '';
	$scope.art.pagenumber = 1;
	$scope.art.pagesize = 5;
	$scope.showDropDown = true;
	if($.jStorage.get("searchObj")){
		$scope.art.search = $.jStorage.get("searchObj").search;
	}else{
		$scope.art.search = "";
	}
	
//	$scope.art.search = $.jStorage.get("searchObj").search;
	$scope.getSearchedArt = function () {
		console.log($scope.art);
		
		if ($scope.art.search != '') {
			cfpLoadingBar.start();
			NavigationService.getArtworkbySearch($scope.art, function (data) {
				console.log(data);
				$.jStorage.set("searchObj", $scope.art);
				$.jStorage.set("searchResults", data);
				
				window.location.reload();
//				$location.url("/searchresults");
				$state.go('searchresults');
				cfpLoadingBar.complete();
			})
		}
	}
	
	$scope.onSearchChange = function(search) {
		console.log(search);
		NavigationService.getSearchDrop(search, function(data){
			if(data.value == false){
				$scope.showDropDown = true;
			}else{
				$scope.showDropDown = false;
				$scope.searchData = data;
			}
		})
	}

	$scope.showLogin = function () {
		ngDialog.open({
			template: 'views/content/login.html'
		});
	};
	$scope.changeTab = function (tab) {
		$scope.logintab = tab;
	}

	$scope.toaccount = function () {
//		$location.url("/account");
		$state.go('account');
	}

	if ($.jStorage.get("user")) {
		$scope.showWishlist = true;
		$scope.user.name = $.jStorage.get("user").name;
	}

	$scope.logout = function () {
		$.jStorage.flush();
		$scope.showWishlist = false;
		if (window.location.hash == "#/account") {
//			$location.url("/home");
			$state.go('home');
		}
		window.location.reload();
	}

	$scope.userlogin = function () {
		console.log($scope.login);
		NavigationService.userlogin($scope.login, function (data, status) {
			console.log(data);
			if (data.value != false) {
				$scope.showInvalidLogin = false;
				$scope.showWishlist = true;
				$.jStorage.set("user", data);
				$scope.user.name = data.name;
				ngDialog.closeAll();
				window.location.reload();
			} else {
				$scope.showInvalidLogin = true;
			}
		})
	};

	$scope.registeruser = function () {
		console.log($scope.register);
		if ($scope.register.password === $scope.register.confirmpassword) {
			$scope.passwordNotMatch = false;
			NavigationService.registeruser($scope.register, function (data, status) {
				console.log(data);
				if (data.value != false) {
					$scope.showAlreadyRegistered = false;
					$scope.showWishlist = true;
					$.jStorage.set("user", data);
					$scope.user.name = data.name;
					ngDialog.closeAll();
					window.location.reload();
				} else if (data.value == false && data.comment == "User already exists") {
					$scope.showAlreadyRegistered = true;
				}
			})
		} else {
			$scope.passwordNotMatch = true;
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

	//    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
	//        // Send login to server or save into cookie
	//        console.log(authResult);
	//    });
	//    $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
	//        // Auth failure or signout detected
	//        console.log(authResult);
	//    });

})

.controller('AccountCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
		$scope.template = TemplateService.changecontent("account");
		$scope.menutitle = NavigationService.makeactive("Account");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.info = "bolds";
		$scope.resi = "active";
		$scope.showSuccess = "";
		$scope.showFail = "";
		$scope.showPass = "";
		$scope.formstatus = false;
		$scope.ismatch = "";
		$scope.formstatussec = false;
		$scope.user = "";
		$scope.reload = function () {
			$scope.user = "";
			NavigationService.getoneartist($.jStorage.get('user')._id, function (data) {
				console.log(data);
				$scope.user = data;
			});
		}
		$scope.edituser = function () {
			$scope.user._id = $.jStorage.get('user')._id;
			NavigationService.registeruser($scope.user, function (data) {
				console.log(data);
				if (data.value == true) {
					$scope.reload();
					$scope.showSuccess = true;
					$timeout(function () {
						$scope.showSuccess = false;
					}, 3000);
				} else {
					$scope.reload();
					$scope.showFail = true;
					$timeout(function () {
						$scope.showFail = false;
					}, 3000);
				}
			});
		}
		$scope.reload();
		$scope.changepassword = function () {
			$scope.user._id = $.jStorage.get('user')._id;
			if ($scope.user.editpassword === $scope.user.cnfrmpassword) {
				$scope.ismatch = false;
				delete $scope.user.cnfrmpassword;
				console.log($scope.user);
				NavigationService.changePassword($scope.user, function (data) {
					if (data.value == true) {
						$scope.showSuccess = true;
						$scope.user.password = "";
						$scope.user.editpassword = "";
						$timeout(function () {
							$scope.showSuccess = false;
						}, 3000);
					} else if (data.value == false && data.comment == "Same password") {
						$scope.showPass = true;
						$scope.user.password = "";
						$scope.user.editpassword = "";
						$timeout(function () {
							$scope.showPass = false;
						}, 3000);
					} else {
						$scope.showFail = true;
						$scope.user.password = "";
						$scope.user.editpassword = "";
						$timeout(function () {
							$scope.showFail = false;
						}, 3000);
					}
				});
			} else {
				$scope.ismatch = true;
			}
		}
		$scope.saveAddress = function () {
			$scope.user._id = $.jStorage.get('user')._id;
			NavigationService.registeruser($scope.user, function (data) {
				console.log(data);
				if (data.value == true) {
					$scope.reload();
					$scope.closeTab(1);
					$scope.showSuccess = true;
					$timeout(function () {
						$scope.showSuccess = false;
					}, 3000);
				} else {
					$scope.reload();
					$scope.showFail = true;
					$timeout(function () {
						$scope.showFail = false;
					}, 3000);
				}
			});
		}
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
				$scope.reload();
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
	.controller('RegisterArtistCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService.changecontent("register-artist");
		$scope.menutitle = NavigationService.makeactive("Register Artist");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})

.controller('FavoriteProductCtrl', function ($scope, TemplateService, NavigationService, $stateParams) {
	$scope.template = TemplateService.changecontent("favorite-product");
	$scope.menutitle = NavigationService.makeactive("Favorites");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	NavigationService.getartworkdetail($stateParams.artid, function (data, status) {
		$scope.artistDetailImg = data[0];
		console.log($scope.artistDetailImg);
	});

	//    $scope.artistDetailImg = [{
	//        id: ' 1527',
	//        artistname: 'Arzan Khambatta',
	//        title: ' Floating Dreams',
	//        typename: 'Untitled',
	//        madein: 'Oil on board',
	//        size: '19.5 x 23',
	//        year: '1978',
	//        price: 'Rs.1,00,000/ $6,400'
	//        }];
	//    $scope.images = [{
	//        small: 'img/smallsculpture.jpg',
	//        large: 'img/largesculpture.jpg'
	//    }, {
	//        small: 'img/smallsculpture.jpg',
	//        large: 'img/largesculpture.jpg'
	//    }, {
	//        small: 'img/smallsculpture.jpg',
	//        large: 'img/largesculpture.jpg'
	//    }];
})

.controller('SearchResultsCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $location, ngDialog, $timeout, $state) {
	$scope.template = TemplateService.changecontent("searchresults");
	$scope.menutitle = NavigationService.makeactive("Search Results");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.totalartcont = [];

	if ($.jStorage.get("searchObj"))
		$scope.art = $.jStorage.get("searchObj");

	if ($.jStorage.get("searchResults")) {
		$scope.artworks = $.jStorage.get("searchResults");
		console.log($scope.artworks);
		_.each($scope.artworks.data, function (n) {
			if (n.artwork) {
				_.each(n.artwork, function (m) {
					var item = {};
					item._id = n._id;
					item.name = n.name;
					item.artwork = m;
					var ispresent = '';
					if ($.jStorage.get("user"))
						ispresent = _.findIndex($.jStorage.get("user").wishlist, 'artwork', m._id);
					else
						ispresent = -1;
					if (ispresent != -1) {
						item.heartClass = "fa fa-heart font-color3";
					} else {
						item.heartClass = "fa fa-heart";
					}
					$scope.totalartcont.push(item);
				})
			}
		})
		$scope.totalartcont = _.uniq($scope.totalartcont, 'artwork._id');
		console.log($scope.totalartcont);
	}

	$scope.showDetails = function (oneuser) {
		console.log(oneuser)
		$scope.artistDetailImg = oneuser;
		ngDialog.open({
			scope: $scope,
			template: 'views/content/quickview-imagedetail.html'
		});
	};

	$scope.goToDetailPage = function (artwork) {
		console.log(artwork);
		if (artwork.type == "Sculptures") {
//			$location.url("/sculpture/" + artwork._id);
			$state.go('sculpture',{artid:artwork._id});
		} else {
//			$location.url("/artwork/detail/" + artwork._id);
			$state.go('detail',{artid:artwork._id});
		}
	}

	$scope.makeFav = function (art) {
		if ($.jStorage.get("user")) {
			if (art.heartClass == "fa fa-heart") {
				NavigationService.addToFav(art.artwork._id, function (data) {
					console.log(data);
					if (!data.value) {
						$.jStorage.set("user", data);
						art.heartClass = "fa fa-heart font-color3";
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					} else if (data.value == true && data.comment == "Data already updated") {
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					}
				})
			} else if (art.heartClass == "fa fa-heart font-color3") {
				NavigationService.deleteFromFav(art.artwork._id, function (data) {
					console.log(data);
					if (!data.value) {
						$.jStorage.set("user", data);
						art.heartClass = "fa fa-heart";
						var xyz = ngDialog.open({
							template: '<div class="pop-up"><h5 class="popup-wishlist">Removed from favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
							plain: true
						});
						$timeout(function () {
							xyz.close();
						}, 3000);
					}
				})
			}
		} else {
			var xyz = ngDialog.open({
				template: '<div class="pop-up"><h5 class="popup-wishlist">Please login to add to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
				plain: true
			});
			$timeout(function () {
				xyz.close();
			}, 3000)
		}
	}

});
var dataNextPre = {};
var userProfile = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'valdr', 'ngSanitize', 'ui.select', 'angular-flexslider', 'ui-rangeSlider'])

//.controller('AppCtrl')

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, $location, $state, $stateParams) {
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
  //  $scope.filterby.color = '';
  //  $scope.filterby.style = '';
  //  $scope.filterby.element = '';
  NavigationService.getSlider(function(data) {
    $scope.slides = data;
  });

  function getPress(data) {

    if (data.value != false) {
      $scope.press = data
      console.log(data);
    }
  }
  NavigationService.pressFind(getPress);

  NavigationService.getupcomingevents(function(data) {
    $scope.upcomingEvent = data;
    console.log(data);
  });

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        userProfile.wishlist = favorite;
      })
    }
  })

  $scope.onfock = "";
  $scope.oon = function() {
    if ($scope.onfock == "") {
      $scope.onfock = "sdfs";
    } else {
      $scope.onfock = "";
    }
  }
  dataNextPre.setData = function(data) {
    //      console.log(data);
  }
  $scope.changeUI = 0;
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

  $scope.applyfilter = function() {
    //      console.log($scope.filterby);
    console.log($scope.filterby);
    $.jStorage.set("filterby", $scope.filterby)
      //      $location.url("/artwork/-1");
    $state.go('totalartpage', {
      type: -1
    });
  }

  $scope.goToArtworks = function(type) {
    //      $location.url("/artwork/" + type);
    $state.go('totalartpage', {
      type: type
    });
  }
  $scope.onclick = function(value) {
    $scope.filterby.checked
  }
  var lastChecked = null
  $scope.onclick = function(event) {
    if (event.target.value === lastChecked) {
      $scope.filterby.type = "";
      $scope.getallartist();
      lastChecked = null
    } else {
      lastChecked = event.target.value
    }
  }
  $scope.changetype = function(chang) {
    if (chang == 1) {
      $scope.filterby.type = "Paintings";
      $scope.getallartist();
      $scope.getmedium();
      $scope.getClr();
      $scope.getElm();
      $scope.getStl();
    } else if (chang == 2) {
      $scope.filterby.type = "Sculptures";
      $scope.getallartist();
      $scope.getmedium();
      $scope.getClr();
      $scope.getElm();
      $scope.getStl();
    } else if (chang == 3) {
      $scope.filterby.type = "Photographs";
      $scope.getallartist();
      $scope.getmedium();
      $scope.getClr();
      $scope.getElm();
      $scope.getStl();
    } else if (chang == 4) {
      $scope.filterby.type = "Prints";
      $scope.getallartist();
      $scope.getmedium();
      $scope.getClr();
      $scope.getElm();
      $scope.getStl();
    }
  }
  $scope.setSearch = function(select) {
    $scope.filterby.search = select.selected.name;
  }
  $scope.setMediumSearch = function(select) {
    $scope.filterby.medium = select.selected.name;
  }
  $scope.setColorSearch = function(select) {
    $scope.filterby.color = select.selected.name;
  }
  $scope.setStyleSearch = function(select) {
    $scope.filterby.style = select.selected.name;
  }
  $scope.setElementSearch = function(select) {
    $scope.filterby.element = select.selected.name;
  }
  $scope.allartist = [];
  $scope.allmedium = [];
  $scope.getmedium = function() {
    if ($scope.filterby.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.getallmedium($scope.change, function(data, status) {
        if (data && data.value != false) {
          $scope.allmedium = _.uniq(data, '_id');
        } else {
          $scope.allmedium = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      NavigationService.getallmedium($scope.change, function(data, status) {
        if (data && data.value != false) {
          $scope.allmedium = _.uniq(data, '_id');
        } else {
          $scope.allmedium = [];
        }
      });
    }
  }

  $scope.getClr = function() {
    if ($scope.filterby.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allColor = _.uniq(data, '_id');
          $scope.allColor.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allColor = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allColor = _.uniq(data, '_id');
          $scope.allColor.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allColor = [];
        }
      });
    }
  }
  $scope.getStl = function() {
    if ($scope.filterby.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allStyle = _.uniq(data, '_id');
          $scope.allStyle.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allStyle = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allStyle = _.uniq(data, '_id');
          $scope.allStyle.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allStyle = [];
        }
      });
    }
  }
  $scope.getElm = function() {
    if ($scope.filterby.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allElement = _.uniq(data, '_id');
          $scope.allElement.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allElement = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allElement = _.uniq(data, '_id');
          $scope.allElement.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allElement = [];
        }
      });
    }
  }
  $scope.getClr();
  $scope.getElm();
  $scope.getStl();
  $scope.getallartist = function() {
    if ($scope.filterby.type == "") {
      NavigationService.getAllArtistByAccess(function(data, status) {
        if (data && data.value != false) {
          $scope.allartist = _.uniq(data, '_id');
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    } else {
      NavigationService.userbytype($scope.filterby.type, function(data, status) {
        if (data && data.value != false) {
          $scope.allartist = data;
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    }
  }
  $scope.getDropdown = function(search) {
    if (search.length >= 3) {
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      $scope.change.search = search;
      NavigationService.getAllArtistDrop($scope.change, function(data) {
        if (data && data.value != false) {
          $scope.allartist = data;
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    } else {
      $scope.getallartist();
    }
  }
  $scope.getDropdownMedium = function(search) {
    if (search.length >= 3) {
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      $scope.change.search = search;
      NavigationService.getallmedium($scope.change, function(data) {
        if (data && data.value != false) {
          $scope.allmedium = data;
          $scope.allmedium.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allmedium = [];
        }
      });
    } else {
      $scope.getmedium();
    }
  }

  //search by keyword

  $scope.getColorDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.filterby.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allColor = data;
        } else {
          $scope.allColor = [];
        }
      });
    } else {
      $scope.getClr();
    }
  }
  $scope.getStyleDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.filterby.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allStyle = data;
        } else {
          $scope.allStyle = [];
        }
      });
    } else {
      $scope.getStl();
    }
  }
  $scope.getElementDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.filterby.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allElement = data;
        } else {
          $scope.allElement = [];
        }
      });
    } else {
      $scope.getElm();
    }
  }

})

.controller('FavoriteCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("favorite");
  $scope.menutitle = NavigationService.makeactive("Favorite");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.artistdetail = [];
  $scope.allfavourites = [];
  $scope.noFavs = false;

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        console.log(favorite);
        if (favorite.value != false) {
          $scope.noFavs = false;
          userProfile.wishlist = favorite;
          _.each(favorite, function(n) {
            $scope.allfavourites.push({
              "_id": n.artwork
            });
          });
          getFavorite($scope.allfavourites)
        } else {
          $scope.noFavs = true;
        }
      })
    }
  })

  function getFavorite(allfavourites) {
    NavigationService.getAllFavouritesData(allfavourites, function(datas, status) {
      console.log("favorite data");
      console.log(datas)
      $scope.artistdetail = datas;
      $scope.totalfav = datas.length;
      cfpLoadingBar.complete();
    })
  }

  $scope.addToCart = function(art) {
    dataNextPre.addToCart(art);
  }

})

.controller('CartCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("cart");
  $scope.menutitle = NavigationService.makeactive("Cart");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.totalCartPrice = 0;
  $scope.noCartItems = false;
  cfpLoadingBar.start();

  $scope.getCartItems = function() {
    NavigationService.getCartItems(function(data) {
      console.log(data);
      if (data.length == 0) {
        $scope.noCartItems = true;
      } else {
        $scope.noCartItems = false;
        $scope.cartItems = data;
        $scope.totalCartPrice = 0;
        _.each($scope.cartItems, function(n) {
          if (n.artwork.gprice != 'N/A')
            $scope.totalCartPrice += n.artwork.gprice;
        });
      }
      cfpLoadingBar.complete();
    });
  }

  $scope.getCartItems();

  $scope.removeFromCart = function(artid) {
    NavigationService.removeFromCart(artid, function(data) {
      console.log(data);
      if (data.value == true) {
        dataNextPre.messageBox("Removed from cart");
        dataNextPre.getCartItems();
        $scope.getCartItems();
      }
    })
  }

})

.controller('TeamCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("team");
  $scope.menutitle = NavigationService.makeactive("Team");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ArtistPageCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("artistpage");
  $scope.menutitle = NavigationService.makeactive("Artist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ContactusCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("contactus");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('TotalartWorkCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog, $stateParams, $location, $state) {
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

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        userProfile.wishlist = favorite;
      })
    }
  })

  //get user details
  $scope.setColorSearch = function(select) {
    $scope.pagedata.color = select.selected.name;
  }
  $scope.setStyleSearch = function(select) {
    $scope.pagedata.style = select.selected.name;
  }
  $scope.setElementSearch = function(select) {
    $scope.pagedata.element = select.selected.name;
  }

  $scope.getClr = function() {
    if ($scope.pagedata.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allColor = _.uniq(data, '_id');
          $scope.allColor.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allColor = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.pagedata.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allColor = _.uniq(data, '_id');
          $scope.allColor.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allColor = [];
        }
      });
    }
  }
  $scope.getStl = function() {
    if ($scope.pagedata.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allStyle = _.uniq(data, '_id');
          $scope.allStyle.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allStyle = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.pagedata.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allStyle = _.uniq(data, '_id');
          $scope.allStyle.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allStyle = [];
        }
      });
    }
  }
  $scope.getElm = function() {
    if ($scope.pagedata.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allElement = _.uniq(data, '_id');
          $scope.allElement.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allElement = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.pagedata.type;
      NavigationService.tagSearchType($scope.change, "", function(data, status) {
        if (data && data.value != false) {
          $scope.allElement = _.uniq(data, '_id');
          $scope.allElement.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allElement = [];
        }
      });
    }
  }
  $scope.getClr();
  $scope.getElm();
  $scope.getStl();

  $scope.getColorDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.pagedata.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allColor = data;
        } else {
          $scope.allColor = [];
        }
      });
    } else {
      $scope.getClr();
    }
  }
  $scope.getStyleDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.pagedata.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allStyle = data;
        } else {
          $scope.allStyle = [];
        }
      });
    } else {
      $scope.getStl();
    }
  }
  $scope.getElementDropdown = function(search) {
    if (search.length >= 3) {
      NavigationService.tagSearchType($scope.pagedata.type, search, function(data) {
        if (data && data.value != false) {
          $scope.allElement = data;
        } else {
          $scope.allElement = [];
        }
      });
    } else {
      $scope.getElm();
    }
  }

  $scope.getallartist = function() {
    if ($scope.pagedata.type == "") {
      NavigationService.getAllArtistByAccess(function(data, status) {
        if (data && data.value != false) {
          $scope.allartist = _.uniq(data, '_id');
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    } else {
      NavigationService.userbytype($scope.pagedata.type, function(data, status) {
        if (data && data.value != false) {
          $scope.allartist = data;
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    }
  }

  $scope.getmedium = function() {
    if ($scope.pagedata.type == "") {
      //          console.log("in if");
      $scope.change = "";
      NavigationService.getallmedium($scope.change, function(data, status) {
        if (data && data.value != false) {
          $scope.allmedium = _.uniq(data, '_id');
        } else {
          $scope.allmedium = [];
        }
      });
    } else {
      //          console.log("in else");
      $scope.change = {};
      $scope.change.type = $scope.pagedata.type;
      NavigationService.getallmedium($scope.change, function(data, status) {
        if (data && data.value != false) {
          $scope.allmedium = _.uniq(data, '_id');
        } else {
          $scope.allmedium = [];
        }
      });
    }
  }

  $scope.getDropdown = function(search) {
    if (search.length >= 3) {
      $scope.change = {};
      $scope.change.type = $scope.filterby.type;
      $scope.change.search = search;
      NavigationService.getAllArtistDrop($scope.change, function(data) {
        if (data && data.value != false) {
          $scope.allartist = data;
          $scope.allartist.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allartist = [];
        }
      });
    } else {
      $scope.getallartist();
    }
  }

  $scope.getDropdownMedium = function(search) {
    if (search.length >= 3) {
      $scope.change = {};
      $scope.change.type = $scope.pagedata.type;
      $scope.change.search = search;
      NavigationService.getallmedium($scope.change, function(data) {
        if (data && data.value != false) {
          $scope.allmedium = data;
          $scope.allmedium.unshift({
            "_id": "0",
            name: ""
          });
        } else {
          $scope.allmedium = [];
        }
      });
    } else {
      $scope.getmedium();
    }
  }

  $scope.setSearch = function(select) {
    $scope.pagedata.search = select.selected.name;
  }
  $scope.setMediumSearch = function(select) {
    $scope.pagedata.medium = select.selected.name;
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

  $scope.changeHeartColor = function(totalartcont) {
    if ($scope.isRed == true)
      totalartcont.heartClass = "fa fa-heart";
    else
      totalartcont.heartClass = "fa fa-heart font-color3";
    $scope.isRed = !$scope.isRed;
  }

  $scope.makeFav = function(art) {
    dataNextPre.favorite(art);
  }

  $scope.addToCart = function(art) {
    dataNextPre.addToCart(art);
  }

  $scope.checkForEmpty = function() {

  }

  $scope.reload = function() {
    cfpLoadingBar.start();
    //      console.log($scope.pagedata);
    var filterdata = $scope.pagedata;
    if (filterdata.minprice == '') {
      filterdata.minprice = 0;
      $scope.pagedata.minprice = '';
    }
    if (filterdata.maxprice == '') {
      filterdata.maxprice = 10000000;
      $scope.pagedata.maxprice = '';
    }
    if (filterdata.minwidth == '') {
      filterdata.minwidth = 0;
      $scope.pagedata.minwidth = '';
    }
    if (filterdata.maxwidth == '') {
      filterdata.maxwidth = 10000;
      $scope.pagedata.maxwidth = '';
    }
    if (filterdata.minheight == '') {
      filterdata.minheight = 0;
      $scope.pagedata.minheight = '';
    }
    if (filterdata.maxheight == '') {
      filterdata.maxheight = 10000;
      $scope.pagedata.maxheight = '';
    }
    if (filterdata.minbreadth == '') {
      filterdata.minbreadth = 0;
      $scope.pagedata.minbreadth = '';
    }
    if (filterdata.maxbreadth == '') {
      filterdata.maxbreadth = 10000;
      $scope.pagedata.maxbreadth = '';
    }
    if (filterdata.sort == 1) {
      $scope.lotactive = '';
      $scope.htlactive = '';
      $scope.lthactive = '';
    }
    NavigationService.artworktype(filterdata, function(data, status) {
      lastpage = parseInt(data.totalpages);
      _.each(data.data, function(n) {
        $scope.totalartcont.push(n);
      })
      $scope.callinfinite = false;
      cfpLoadingBar.complete();
    });
  }

  //    $scope.reload();

  $scope.makeactive = function(type) {
    //      console.log(type);
    _.each($scope.typejson, function(n) {
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

  $scope.filterresults = function(search) {
    //      console.log(search);
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

  $scope.addMoreItems = function() {
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
  $scope.showDetails = function(oneuser) {
    //      console.log(oneuser)
    $scope.artistDetailImg = oneuser;
    ngDialog.open({
      scope: $scope,
      template: 'views/content/quickview-imagedetail.html'
    });
  };

  $scope.sortBy = function(num, by) {
    if (num == -1 && by == 'yoc') {
      $scope.lotactive = 'active';
      $scope.htlactive = '';
      $scope.lthactive = '';
    } else if (num == -1 && by == 'gprice') {
      $scope.lotactive = '';
      $scope.htlactive = 'active';
      $scope.lthactive = '';
    } else if (num == 1 && by == 'gprice') {
      $scope.lotactive = '';
      $scope.htlactive = '';
      $scope.lthactive = 'active';
    }
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

  $scope.clearfilters = function() {
    $scope.pagedata.search = "";
    $scope.pagedata.type = "";
    $scope.pagedata.pagenumber = 1;
    $scope.pagedata.pagesize = 20;
    $scope.pagedata.filter = "";
    $scope.pagedata.medium = '';
    $scope.pagedata.sort = 1;

    $scope.makeactive('All');
  }

  $scope.goToDetailPage = function(artwork) {
    //      console.log(artwork);
    if (artwork.type == "Sculptures") {
      //          $location.url("/sculpture/" + artwork._id);
      $state.go('sculpture', {
        artid: artwork._id
      });
    } else {
      //          $location.url("/artwork/detail/" + artwork._id);
      $state.go('detail', {
        artid: artwork._id
      });
    }
  }
})

.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, valdr, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("checkout");
  $scope.menutitle = NavigationService.makeactive("Checkout");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  //Valdr
  $scope.checkout = [];
  $scope.checkout.isshipping = true;
  $scope.payment = {};
  $scope.payment.billing = {};
  $scope.payment.shipping = {};
  $scope.showMobErr = false;
  $scope.showPinErr = false;
  $scope.checkoutRadio = 'guest';

  $scope.showLoginDiv = true;
  NavigationService.getuserprofile(function(data) {
    console.log(data);
    if (data.id) {
      $scope.showLoginDiv = false;
      $scope.payment.billing = data;
      var splited = data.name.split(' ');
      if (splited[0])
        $scope.payment.billing.fname = splited[0];
      if (splited[1])
        $scope.payment.billing.lname = splited[1];
    }
  })

  $scope.showShipping = function(check) {
    //      console.log(check);
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

  $scope.totalCartPrice = 0;

  cfpLoadingBar.start();

  $scope.getCartItems = function() {
    NavigationService.getCartItems(function(data) {
      console.log(data);
      $scope.cartItems = data;
      $scope.totalCartPrice = 0;
      _.each($scope.cartItems, function(n) {
        if (n.artwork.gprice != 'N/A')
          $scope.totalCartPrice += n.artwork.gprice;
      });
      cfpLoadingBar.complete();
    });
  }

  $scope.getCartItems();

  $scope.removeFromCart = function(artid) {
    NavigationService.removeFromCart(artid, function(data) {
      console.log(data);
      if (data.value == true) {
        dataNextPre.messageBox("Removed from cart");
        dataNextPre.getCartItems();
        $scope.getCartItems();
      }
    })
  }

  $scope.toPayment = function() {
    console.log($scope.cartItems);
    if ($scope.payment.billing.mob.toString().length == 10 && $scope.payment.billing.pincode.toString().length == 6) {
      console.log("djk");
    } else {
      if ($scope.payment.billing.mob.toString().length != 10) {
        $scope.showMobErr = true;
      } else {
        $scope.showMobErr = false;
      }
      if ($scope.payment.billing.pincode.toString().length != 6) {
        $scope.showPinErr = true;
      } else {
        $scope.showPinErr = false;
      }
    }
    $scope.user = userProfile;
    $scope.user.cart = $scope.cartItems;
    $scope.order = {};
    $scope.order.price = $scope.totalCartPrice;
    $scope.order.discount = 0;
    NavigationService.placeOrder($scope.order, function(data) {
      if (data.value == true) {
        dataNextPre.messageBox("Your order is placed. Thank You !!");
        $timeout(function() {
          $state.go('account');
        }, 3000);

      }
    });
  }

})

.controller('InviteCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("invite");
  $scope.menutitle = NavigationService.makeactive("Invite");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('EventsCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
  //Used to name the .html file



  $scope.template = TemplateService.changecontent("events");
  $scope.menutitle = NavigationService.makeactive("Events");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.getAllEvents(function(data, status) {
    console.log(data);
    var events = _.groupBy(data, function(n) {
      return n.year;
    });
    $scope.currentYear = parseInt(moment().get("year"));

    console.log($scope.events);

    $scope.events = _.groupBy(events, function(key, value) {
      if (parseInt(value) > $scope.currentYear) {
        return "upcoming";
      } else if (parseInt(value) == $scope.currentYear) {
        return "present"
      } else if (parseInt(value) < $scope.currentYear) {
        return "past"
      }
    });


    $scope.events.past = _.sortBy($scope.events.past, function(n) {
      return -1 * n[0].year;
    });

    console.log($scope.events);
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

.controller('EventdetailCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
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

  $scope.openModal = function(gal) {

    $scope.zoomposition = $scope.gallery.indexOf(gal);

    ngDialog.open({
      disableAnimation: true,
      template: 'views/directive/zoomimage.html',
      scope: $scope
    });
  };

  $scope.nextImage = function(oldposition) {
    if (oldposition == ($scope.gallery.length - 1)) {
      $scope.zoomposition = 0;
    } else {
      $scope.zoomposition++;
    }
  };

  $scope.previousImage = function(oldposition) {
    if (oldposition == 0) {
      $scope.zoomposition = ($scope.gallery.length - 1);
    } else {
      $scope.zoomposition--;
    }
  };
  $scope.openBox = function(id) {
    $(id).attr('openbox', 'show');
  }


})

.controller('FeatureCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
  $scope.template = TemplateService.changecontent("feature");
  $scope.menutitle = NavigationService.makeactive("Features");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  //Angular Loader Example
  //Start loader
  $scope.showLoader = function() {
      cfpLoadingBar.start();
    }
    //Complete loader
  $scope.hideLoader = function() {
    cfpLoadingBar.complete();
  }

  //Angular toaster
  $scope.showToaster = function() {
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
  $scope.showPopup = function() {
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


.controller('PressCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("press");
  $scope.menutitle = NavigationService.makeactive("Press");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.press = [];

  function getPress(data) {



    if (data.value != false) {

      data2 = _.groupBy(data, function(n) {
        var year = moment(n.date).get("year");
        return year;
      }, true);
      $scope.pressYear = _.keys(data2);
      console.log($scope.pressYear);

      $scope.press = data2;
      console.log(data2);
    }
  }
  NavigationService.pressFind(getPress);

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

.controller('ArtistDetailImageCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $rootScope, $location, cfpLoadingBar, $timeout, $state, $filter) {
  $scope.template = TemplateService.changecontent("detailimage");
  $scope.menutitle = NavigationService.makeactive("Artists");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.aristImages = [];
  $scope.allartworks = [];

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        userProfile.wishlist = favorite;
        $scope.loadArtWork($stateParams.artid);
      })
    }
  })

  cfpLoadingBar.start();
  $timeout(function() {
    cfpLoadingBar.complete();
  }, 5000);

  $scope.loadArtWork = function(id) {
    NavigationService.getartworkdetail(id, function(data, status) {
      console.log(data);
      $scope.aristImages = [];
      $scope.artid = data[0]._id;
      NavigationService.getoneartist(data[0]._id, function(artistdata, status) {
        console.log(artistdata);
        $.jStorage.set("reachout", artistdata);
        dataNextPre.reachout = artistdata;
        $scope.allartworks = artistdata;
        _.each(artistdata.artwork, function(n) {
          if (n._id != data[0].artwork._id) {
            $scope.aristImages.push(n);
          }
        })
        $scope.aristImages = _.chunk($scope.aristImages, 6);
        $scope.aristImages = $scope.aristImages[0];
        //              console.log($scope.aristImages);
        cfpLoadingBar.complete();
      })
      $scope.artistDetailImg = data[0];
      $scope.artistDetailImg.heartClass = $filter('showheart')($scope.artistDetailImg.artwork._id);
      console.log($scope.artistDetailImg);
    })
  }

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

  $scope.artPrev = function() {
    NavigationService.nextPrev($scope.artistDetailImg.artwork.srno, 'prev', function(data) {
      $scope.artistDetailImg = data;
    })
  }

  $scope.artNext = function() {
    NavigationService.nextPrev($scope.artistDetailImg.artwork.srno, 'next', function(data) {
      $scope.artistDetailImg = data;
    })
  }

  $scope.showitabove = function(artwork) {
    $state.go('detail', {
      artid: artwork._id
    })
  }

  $scope.addToCart = function(art) {
    dataNextPre.addToCart(art);
  }

  $scope.addToFav = function(art) {
    dataNextPre.favorite(art);
  }

})

.controller('SculptureCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $rootScope, $location, $state) {
  $scope.template = TemplateService.changecontent("sculpture");
  $scope.menutitle = NavigationService.makeactive("Sculpture");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.aristImages = [];
  $scope.allartworks = [];

  NavigationService.getartworkdetail($stateParams.artid, function(data, status) {
    //      console.log(data);
    NavigationService.getoneartist(data[0]._id, function(artistdata, status) {
      //          console.log(artistdata);
      $scope.allartworks = artistdata;
      _.each(artistdata.artwork, function(n) {
        if (n._id != data[0].artwork._id) {
          $scope.aristImages.push(n);
        }
      })
      $scope.aristImages = _.chunk($scope.aristImages, 6);
      $scope.aristImages = $scope.aristImages[0];
      //          console.log($scope.aristImages);
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

  $scope.showitabove = function(artwork) {
    // $scope.aristImages = [];
    // delete $scope.artistDetailImg.artwork;
    // $scope.artistDetailImg.artwork = artwork;
    // _.each($scope.allartworks.artwork, function(n) {
    //     if (n._id != artwork._id) {
    //         $scope.aristImages.push(n);
    //     }
    // })
    // $rootScope.$broadcast('changeImage', {});
    //      $location.url("/artwork/detail/" + artwork._id);
    $state.go('detail', {
      artid: artwork._id
    });
  }

  $scope.activeImage = function(imagetopush) {
    if ($scope.artistDetailImg.artwork.image.length > 1) {
      $scope.artistDetailImg.artwork.image.splice(_.indexOf($scope.artistDetailImg.artwork.image, imagetopush), 1);
      $scope.artistDetailImg.artwork.image.unshift(imagetopush);
      $rootScope.$broadcast('changeImage', {});
    }
  }
})

.controller('ThoughtleadershipCtrl', function($scope, TemplateService, NavigationService) {
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

.controller('ThoughtleadershipdetailCtrl', function($scope, TemplateService, NavigationService) {
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

.controller('ArtInfrastructureCtrl', function($scope, TemplateService, NavigationService) {
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


.controller('ArtistDetailCtrl', function($scope, TemplateService, NavigationService, $stateParams, $location, $state) {
  $scope.template = TemplateService.changecontent("artistdetail")
  $scope.menutitle = NavigationService.makeactive("Artist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.getoneartist($stateParams.artistid, function(data, status) {
    $.jStorage.set("reachout", data);
    $scope.artistdetail = data
    dataNextPre.reachout = data;
  })

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        userProfile.wishlist = favorite;
      })
    }
  })

  $scope.goToDetail = function(artid) {
    //      $location.url("/artwork/detail/" + artid);
    $state.go('detail', {
      artid: artid
    });
  }

  $scope.addToCart = function(art) {
    var test = {}
    test.artwork = art;
    dataNextPre.addToCart(test);
  }

  $scope.addToFav = function(art) {
    console.log(art);
    var test = {}
    test.artwork = art;
    test.heartClass = art.heartClass;
    console.log(test);
    dataNextPre.favorite(test)
  }
})


.controller('ArtistCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, cfpLoadingBar) {
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

  NavigationService.getAllArtistByAccess(function(data, status) {
    //      console.log("All List of Artist");
    $scope.listview = _.uniq(data, '_id');
    //      console.log($scope.listview);
  });

  $scope.reload = function() {
    cfpLoadingBar.start();
    if ($scope.pagedata.type == "All") {
      $scope.pagedata.type = "";
    }
    NavigationService.getallartist($scope.pagedata, function(data, status) {
      console.log(data);
      lastpage = parseInt(data.totalpages);
      _.each(data.data, function(n) {
        $scope.artistimage.push(n);
        $scope.listview.push(n);
      })
      $scope.artistimage = _.uniq($scope.artistimage, '_id');
      $scope.listview = _.uniq($scope.listview, '_id');
      cfpLoadingBar.complete();
    });
  }

  //    $scope.reload();
  $scope.getartistbyletter = function(letter) {
    console.log(letter);
    _.each($scope.alphabetjson, function(n) {
      //            var index = n.name.indexOf(letter);
      //                      console.log(index);
      if (n.name == letter) {
        n.class = "actived";
      } else {
        n.class = "";
      }
    });

    if (letter == "All") {
      letter = "";
    }

    $scope.pagedata.search = letter;
    $scope.pagedata.pagenumber = 1;
    $scope.artistimage = [];
    $scope.listview = [];
    $scope.reload();
  }

  $scope.getartistbyletter('All');
  $scope.getartistbysearch = function() {
    $scope.pagedata.pagenumber = 1;
    $scope.artistimage = [];
    $scope.listview = [];
    $scope.reload();
  }

  $scope.makeactive = function(type) {
    console.log(type);
    console.log($scope.typejson);
    _.each($scope.typejson, function(n) {
        var index = n.name.indexOf(type);
        if (index != -1) {
          n.class = "actives";
        } else {
          n.class = "";
        }
      })
      //      if (type == "All")
      //          type = "";
    $scope.getartistbyletter('All');
    //      else {
    //          $scope.getartistbyletter(type);
    //      }
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
  //           console.log("at bottom");
  //         $scope.pagedata.pagenumber++;
  //         $scope.reload();
  //     }
  // });

  $scope.addMoreItems = function() {
    console.log("addmore");
    if (lastpage >= $scope.pagedata.pagenumber) {
      $scope.pagedata.pagenumber++;
      $scope.reload();
    }
  }


  $scope.artistdetail = {};
  $scope.showDetail = function(artist) {
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


.controller('InfiniteCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("infinite");
  $scope.menutitle = NavigationService.makeactive("Infinite Scroll");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  //Infinite scroll
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for (var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };
})

.controller('headerctrl', function($scope, TemplateService, $window, ngDialog, NavigationService, $location, cfpLoadingBar, $state, $stateParams, $timeout) {
  $scope.template = TemplateService;

  $scope.adminurl = adminurl;


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
  $scope.filterby = {};
  $scope.artworkInterested = [];
  $scope.reachOutForm = {};
  $scope.reachOutForm.srno = "";
  $scope.reachOutForm.to = "harmeet@auraart.in; rishiraj@auraart.in";
  $scope.reachOutForm.action = "1";
  $scope.searchData = [];
  $scope.userProfile = {};
  $scope.cartItems = [];
  $scope.totalCartPrice = 0;

  $scope.reachOutArtistId = 0;
  // if ($.jStorage.get("searchObj")) {
  //     $scope.art.search = $.jStorage.get("searchObj").search;
  // } else {
  //     $scope.art.search = "";
  // }

  NavigationService.getuserprofile(function(data) {
    if (data.id) {
      userProfile = data;
      NavigationService.getMyFavourites(data.id, function(favorite) {
        userProfile.wishlist = favorite;
      })
    }
  })

  NavigationService.getAllArtistByAccess(function(data, status) {
    if (data && data.value != false) {
      $scope.allartist = _.uniq(data, '_id');
    } else {
      $scope.allartist = [];
    }
    //      console.log($scope.allartist);
    //      $scope.reachOutForm.artist = $scope.allartist[0].name;
  });


  NavigationService.getuserprofile(function(data) {
    userProfile = data;
    console.log(data);
    if (data.name) {
      $scope.userProfile = data;
      $scope.user.name = data.name;
      $scope.showWishlist = true;
    }

  });

  $scope.setSearch = function(select) {
    $scope.reachOutForm.artist = select.selected.name;
    cfpLoadingBar.start();
    $scope.reachOutInner(select.selected._id);
  }

  $scope.setSearchSrno = function(select) {
    $scope.reachOutForm.srno = select.selected.srno;
  }
  $scope.selectSearch = function(name) {
    console.log("on search");
    console.log(name);
    $scope.art.search = name.name;
    $scope.art.type = name.type;
    $('#topsearch').focus();
    $scope.getSearchedArt();
  }

  $scope.reachOutInner = function(id) {
    NavigationService.getoneartist(id, function(data) {
      $scope.artworkInterested = data.artwork;
      if (data.artwork != "") {
        //              $scope.reachOutForm.srno = data.artwork[0].srno;
      } else {
        $scope.reachOutForm.srno = "";
      }
      cfpLoadingBar.complete();
    });
  }

  $scope.changeArtist = function(data) {

  }

  $scope.reachOut = function() {
    var reachOutArtist = window.location.hash.split('l/');
    if (reachOutArtist[0] == "#/artist/detai" || reachOutArtist[0] == "#/artwork/detai") {
      $scope.reachOutArtistId = reachOutArtist[1];
      $scope.artworkInterested = dataNextPre.reachout.artwork;
      $scope.reachOutForm.srno = $scope.artworkInterested[0].srno;
      if (dataNextPre.reachout) {
        $scope.reachOutForm.artist = dataNextPre.reachout.name;
        $scope.reachOutInner(dataNextPre.reachout._id)
      }
    } else {

      $scope.reachOutInner($scope.allartist[0]._id);
    }
    ngDialog.open({
      scope: $scope,
      template: 'views/content/reach-out.html'
    });
  }

  //  $scope.art.search = $.jStorage.get("searchObj").search;
  $scope.getSearchedArt = function() {
    console.log($scope.art);

    if ($scope.art.search != '') {
      cfpLoadingBar.start();
      NavigationService.getArtworkbySearch($scope.art, function(data) {
        console.log(data);
        $.jStorage.set("searchObj", $scope.art);
        $.jStorage.set("searchResults", data);

        window.location.reload();
        //              $location.url("/searchresults");
        $state.go('searchresults');
        cfpLoadingBar.complete();
      })
    }
  }

  $scope.onSearchChange = function(search) {
    console.log(search);
    NavigationService.getSearchDrop(search, function(data) {
      if (data.value == false) {
        $scope.showDropDown = true;
      } else {
        $scope.showDropDown = false;
        $scope.searchData = data;
      }
    })
  }

  // reach out submit
  $scope.allvalidation = [{
    field: $scope.reachOutForm.to,
    validation: ""
  }, {
    field: $scope.reachOutForm.from,
    validation: ""
  }, {
    field: $scope.reachOutForm.action,
    validation: ""
  }, {
    field: $scope.reachOutForm.address,
    validation: ""
  }, {
    field: $scope.reachOutForm.number,
    validation: ""
  }, {
    field: $scope.reachOutForm.person,
    validation: ""
  }, {
    field: $scope.reachOutForm.remarks,
    validation: ""
  }];
  $scope.submitReachOut = function() {
    $scope.allvalidation = [{
      field: $scope.reachOutForm.to,
      validation: ""
    }, {
      field: $scope.reachOutForm.from,
      validation: ""
    }, {
      field: $scope.reachOutForm.action,
      validation: ""
    }, {
      field: $scope.reachOutForm.address,
      validation: ""
    }, {
      field: $scope.reachOutForm.number,
      validation: ""
    }, {
      field: $scope.reachOutForm.person,
      validation: ""
    }, {
      field: $scope.reachOutForm.remarks,
      validation: ""
    }];
    var check = formvalidation($scope.allvalidation);
    if (check) {
      NavigationService.reachOutArtist($scope.reachOutForm, function(data) {
        console.log(data);
        if (data.value == true) {
          alert("Thank you! Your query has been successfully submited.");
        }
      });
    } else {
      alert("Enter all data");
    }
  }
  $scope.resetReachOut = function() {
    _.each($scope.reachOutForm, function(n, key) {
      if (key != 'srno' && key != 'to' && key != 'action') {
        $scope.reachOutForm[key] = "";
      }
    });
  }


  $scope.showLogin = function() {
    ngDialog.open({
      template: 'views/content/login.html'
    });
  };
  $scope.changeTab = function(tab) {
    $scope.logintab = tab;
  }

  $scope.toaccount = function() {
    //      $location.url("/account");
    $state.go('account');
  }

  if ($.jStorage.get("user")) {
    $scope.showWishlist = true;
    $scope.user.name = $.jStorage.get("user").name;
  }

  $scope.logout = function() {
    console.log("Logout");
    NavigationService.logout(function(data) {
      $scope.showWishlist = false;
      $scope.cartItems = [];
      userProfile = data;
      $state.go('home');
    });
  }

  $scope.userlogin = function() {
    NavigationService.userlogin($scope.login, function(data, status) {
      console.log(data);
      if (data.value != false) {
        $scope.showInvalidLogin = false;
        $scope.showWishlist = true;
        //$.jStorage.set("user", data);
        $scope.user.name = data.name;
        ngDialog.closeAll();
        window.location.reload();
      } else {
        $scope.showInvalidLogin = true;
      }
    })
  };

  $scope.registeruser = function() {
    if ($scope.register.password === $scope.register.confirmpassword) {
      $scope.passwordNotMatch = false;
      NavigationService.registeruser($scope.register, function(data, status) {
        console.log(data);
        if (data.value != false) {
          $scope.showAlreadyRegistered = false;
          $scope.showWishlist = true;
          //$.jStorage.set("user", data);
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

  $scope.forgotpassword = function() {
    console.log($scope.forgot);
    NavigationService.forgotpassword($scope.forgot, function(data, status) {
      console.log(data);
      if (data.value == true) {
        $scope.changeTab(4);
      }
    })
  }

  //    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
  //        // Send login to server or save into cookie
  //          console.log(authResult);
  //    });
  //    $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
  //        // Auth failure or signout detected
  //          console.log(authResult);
  //    });


  //common function
  dataNextPre.messageBox = function(msg) {
    var xyz = ngDialog.open({
      template: '<div class="pop-up"><h5 class="popup-wishlist">' + msg + '</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
      plain: true
    });
    $timeout(function() {
      xyz.close();
    }, 3000);
  }
  dataNextPre.favorite = function(art) {
    if ($scope.userProfile.id) {
      if (art.heartClass == "fa fa-heart") {
        NavigationService.addToFav($scope.userProfile.id, art.artwork._id, function(data) {
          if (!data.value) {
            // $.jStorage.set("user", data);
            art.heartClass = "fa fa-heart font-color3";
            dataNextPre.messageBox("Added to favourites");
          } else if (data.value == true && data.comment == "Data already updated") {
            dataNextPre.messageBox("Already added to favourites");
          }
        })
      } else if (art.heartClass == "fa fa-heart font-color3") {
        console.log(art.heartClass);
        NavigationService.deleteFromFav($scope.userProfile.id, art.artwork._id, function(data) {
          if (!data.value) {
            // $.jStorage.set("user", data);
            art.heartClass = "fa fa-heart";
            dataNextPre.messageBox("Removed from favourites");
          }
        })
      }
    } else {
      dataNextPre.messageBox("Please login to add to favourites");
    }
  }

  dataNextPre.getCartItems = function() {
    NavigationService.getCartItems(function(data) {
      console.log(data);
      $scope.cartItems = data;
      $scope.totalCartPrice = 0;
      _.each($scope.cartItems, function(n) {
        if (n.artwork.gprice != 'N/A')
          $scope.totalCartPrice += n.artwork.gprice;
      });
    });
  }

  dataNextPre.getCartItems();

  dataNextPre.addToCart = function(art) {
    console.log(art);
    NavigationService.addToCart(art.artwork._id, function(data) {
      console.log(data);
      if (data.value == true) {
        dataNextPre.messageBox("Added to cart");
        dataNextPre.getCartItems();
      } else if (data.value == false) {
        dataNextPre.messageBox("Already added to cart");
      }
    })
  }

  dataNextPre.removeFromCart = function(artid) {
    console.log(artid);
    NavigationService.removeFromCart(artid, function(data) {
      console.log(data);
      if (data.value == true) {
        dataNextPre.messageBox("Removed from cart");
        dataNextPre.getCartItems();
      }
    })
  }

})

.controller('AccountCtrl', function($scope, TemplateService, NavigationService, $timeout) {
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
    $scope.shipping = {};
    $scope.artistdetail = [];
    $scope.allfavourites = [];
    $scope.noFavs = false;

    NavigationService.getuserprofile(function(data) {
      if (data.id) {
        userProfile = data;
        NavigationService.getMyFavourites(data.id, function(favorite) {
          console.log(favorite);
          if (favorite.value != false) {
            $scope.noFavs = false;
            userProfile.wishlist = favorite;
            _.each(favorite, function(n) {
              $scope.allfavourites.push({
                "_id": n.artwork
              });
            });
            getFavorite($scope.allfavourites)
          } else {
            $scope.noFavs = true;
          }
        })
      }
    })

    function getFavorite(allfavourites) {
      NavigationService.getAllFavouritesData(allfavourites, function(datas, status) {
        $scope.artistdetail = datas;
        $scope.totalfav = datas.length;
        cfpLoadingBar.complete();
      })
    }

    NavigationService.getCountryJson(function(data) {
      $scope.allcountries = data;
    })

    NavigationService.getMyOrders(function(data) {
      console.log(data);
      $scope.myorderedproducts = data;
    })

    $scope.reload = function() {
      $scope.user = "";
      NavigationService.getoneartist(userProfile.id, function(data) {
        console.log(data);
        $scope.user = data;
        $scope.shipping = data.shipping;
      });
    }
    $scope.edituser = function() {
      $scope.user._id = userProfile.id;
      NavigationService.registeruser($scope.user, function(data) {
        console.log(data);
        $scope.closeTab(2);
        if (data.value == true) {
          // $scope.reload();
          $scope.showSuccess = true;
          $timeout(function() {
            $scope.showSuccess = false;
          }, 5000);
        } else {
          // $scope.reload();
          $scope.showFail = true;
          $timeout(function() {
            $scope.showFail = false;
          }, 5000);
        }
      });
    }

    $scope.changepassword = function() {
      $scope.user._id = userProfile.id;
      if ($scope.user.editpassword === $scope.user.cnfrmpassword) {
        $scope.ismatch = false;
        delete $scope.user.cnfrmpassword;
        console.log($scope.user);
        NavigationService.changePassword($scope.user, function(data) {
          if (data.value == true) {
            $scope.showSuccess = true;
            $scope.user.password = "";
            $scope.user.editpassword = "";
            $timeout(function() {
              $scope.showSuccess = false;
            }, 5000);
          } else if (data.value == false && data.comment == "Same password") {
            $scope.showPass = true;
            $scope.user.password = "";
            $scope.user.editpassword = "";
            $timeout(function() {
              $scope.showPass = false;
            }, 5000);
          } else {
            $scope.showFail = true;
            $scope.user.password = "";
            $scope.user.editpassword = "";
            $timeout(function() {
              $scope.showFail = false;
            }, 3000);
          }
        });
      } else {
        $scope.ismatch = true;
      }
    }
    $scope.saveAddress = function() {
      $scope.user._id = userProfile.id;
      NavigationService.registeruser($scope.user, function(data) {
        console.log(data);
        if (data.value == true) {
          // $scope.reload();
          $scope.closeTab(1);
          $scope.showSuccess = true;
          $timeout(function() {
            $scope.showSuccess = false;
          }, 5000);
        } else {
          // $scope.reload();
          $scope.showFail = true;
          $timeout(function() {
            $scope.showFail = false;
          }, 5000);
        }
      });
    }

    $scope.saveShipping = function() {
      $scope.user.shipping = $scope.shipping;
      $scope.edituser();
    }

    $scope.changeTab = function(tab) {
      if (tab == 1) {
        $scope.formstatus = true;
        //                $scope.formstatussec = false;
      } else {
        //                $scope.formstatus = false;
        $scope.formstatussec = true;
      }

    }
    $scope.closeTab = function(tab) {
      if (tab == 1) {
        $scope.formstatus = false;
        $scope.reload();
        //                $scope.formstatussec = false;
      } else {
        //                $scope.formstatus = false;
        $scope.formstatussec = false;
      }

    }
    $scope.changeTabs = function() {
      $scope.formstatussec = true;
    }

    $scope.changeresi = function() {
      $scope.resi = "active";
      $scope.offce = "";
    }
    $scope.changeoffice = function() {
      $scope.resi = "";
      $scope.offce = "active";
    }

    $scope.changeinfo = function() {
      $scope.info = "bolds";
      $scope.chngpass = "";
      $scope.chngadd = "";
      $scope.myorders = "";
      $scope.ordertracing = "";
      $scope.listingmsg = "";
      $scope.bankingdetails = "";
    }

    $scope.changeadress = function() {
      $scope.info = "";
      $scope.chngpass = "";
      $scope.chngadd = "bolds";
      $scope.myorders = "";
      $scope.ordertracing = "";
      $scope.listingmsg = "";
      $scope.bankingdetails = "";
    }
    $scope.changechngpass = function() {
      $scope.info = "";
      $scope.chngpass = "bolds";
      $scope.chngadd = "";
      $scope.myorders = "";
      $scope.ordertracing = "";
      $scope.listingmsg = "";
      $scope.bankingdetails = "";
    }

    $scope.changemyorders = function() {
      $scope.info = "";
      $scope.chngpass = "";
      $scope.chngadd = "";
      $scope.myorders = "bolds";
      $scope.ordertracing = "";
      $scope.listingmsg = "";
      $scope.bankingdetails = "";
    }

    $scope.changeordertracing = function() {
      $scope.info = "";
      $scope.chngpass = "";
      $scope.chngadd = "";
      $scope.myorders = "";
      $scope.ordertracing = "bolds";
      $scope.listingmsg = "";
      $scope.bankingdetails = "";
    }
    $scope.changebankingdetails = function() {
      $scope.info = "";
      $scope.chngpass = "";
      $scope.chngadd = "";
      $scope.myorders = "";
      $scope.ordertracing = "";
      $scope.listingmsg = "";
      $scope.bankingdetails = "bolds";
    }
  })
  .controller('ActivitiesCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("activities");
    $scope.menutitle = NavigationService.makeactive("Activities");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('ReachOutCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("reach-out");
    $scope.menutitle = NavigationService.makeactive("Reach Out");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('CreateArtworkCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("create-artwork");
    $scope.menutitle = NavigationService.makeactive("Create Artwork");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // $scope.changePaintings = function() {
    //   $scope.showPaintings = "bolds";
    //   $scope.showSculpture = "";
    //   $scope.showPrints = "";
    //   $scope.showPhotography = "";
    // }
    // $scope.changeSculpture = function() {
    //   $scope.showPaintings = "";
    //   $scope.showSculpture = "bolds";
    //   $scope.showPrints = "";
    //   $scope.showPhotography = "";
    // }
    // $scope.changePrints = function() {
    //   $scope.showPaintings = "";
    //   $scope.showSculpture = "";
    //   $scope.showPrints = "bolds";
    //   $scope.showPhotography = "";
    // }
    // $scope.changePhotography = function() {
    //   $scope.showPaintings = "";
    //   $scope.showSculpture = "";
    //   $scope.showPrints = "";
    //   $scope.showPhotography = "bolds";
    // }
    $scope.artwork = {};
    $scope.artwork.user = [];
    $scope.artwork.reseller = [];
    $scope.artwork.subtype = [];
    $scope.artwork.tag = [];
    $scope.isSculpture = function(type) {
      console.log($scope.artwork.subtype);
      $scope.artwork.subtype = [];
      console.log($scope.artwork.subtype);
      $scope.show = 0;
      $scope.showmed = 0;
      if (type == "Sculptures") {
        $scope.showBreadth = true;
      } else {
        $scope.showBreadth = false;
      }

      switch (type) {
        case "Paintings":
          $scope.showPaintings = true;
          $scope.showSculpture = false;
          $scope.showPrints = false;
          $scope.showPhotography = false;
          break;
        case "Sculptures":
          $scope.showPaintings = false;
          $scope.showSculpture = true;
          $scope.showPrints = false;
          $scope.showPhotography = false;
          break;
        case "Photographs":
          $scope.showPaintings = false;
          $scope.showSculpture = false;
          $scope.showPrints = false;
          $scope.showPhotography = true;
          break;
        case "Prints":
          $scope.showPaintings = false;
          $scope.showSculpture = false;
          $scope.showPrints = true;
          $scope.showPhotography = false;
          break;
      }
    }
  })
  .controller('RegisterArtistCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("register-artist");
    $scope.menutitle = NavigationService.makeactive("Register Artist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })

.controller('FavoriteProductCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
  $scope.template = TemplateService.changecontent("favorite-product");
  $scope.menutitle = NavigationService.makeactive("Favorites");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.getartworkdetail($stateParams.artid, function(data, status) {
    $scope.artistDetailImg = data[0];
    console.log($scope.artistDetailImg);
  });

  $scope.addToCart = function(art) {
    dataNextPre.addToCart(art);
  }

})

.controller('SearchResultsCtrl', function($scope, TemplateService, NavigationService, $stateParams, $location, ngDialog, $timeout, $state) {
  $scope.template = TemplateService.changecontent("searchresults");
  $scope.menutitle = NavigationService.makeactive("Search Results");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.totalartcont = [];

  if ($.jStorage.get("searchObj"))
    $scope.art = $.jStorage.get("searchObj");

  if ($.jStorage.get("searchResults")) {
    $scope.artworks = $.jStorage.get("searchResults");
    _.each($scope.artworks.data, function(n) {
      if (n.artwork) {
        _.each(n.artwork, function(m) {
          var item = {};
          item._id = n._id;
          item.name = n.name;
          item.artwork = m;
          $scope.totalartcont.push(item);
        })
      }
    })
    $scope.totalartcont = _.uniq($scope.totalartcont, 'artwork._id');
    console.log($scope.totalartcont);
  }

  $scope.showDetails = function(oneuser) {
    console.log(oneuser)
    $scope.artistDetailImg = oneuser;
    ngDialog.open({
      scope: $scope,
      template: 'views/content/quickview-imagedetail.html'
    });
  };

  $scope.goToDetailPage = function(artwork) {
    console.log(artwork);
    if (artwork.type == "Sculptures") {
      //          $location.url("/sculpture/" + artwork._id);
      $state.go('sculpture', {
        artid: artwork._id
      });
    } else {
      //          $location.url("/artwork/detail/" + artwork._id);
      $state.go('detail', {
        artid: artwork._id
      });
    }
  }

  $scope.makeFav = function(art) {
    dataNextPre.favorite(art);
    //      if ($.jStorage.get("user")) {
    //          if (art.heartClass == "fa fa-heart") {
    //              NavigationService.addToFav(art.artwork._id, function (data) {
    //                  console.log(data);
    //                  if (!data.value) {
    //                      $.jStorage.set("user", data);
    //                      art.heartClass = "fa fa-heart font-color3";
    //                      var xyz = ngDialog.open({
    //                          template: '<div class="pop-up"><h5 class="popup-wishlist">Added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //                          plain: true
    //                      });
    //                      $timeout(function () {
    //                          xyz.close();
    //                      }, 3000);
    //                  } else if (data.value == true && data.comment == "Data already updated") {
    //                      var xyz = ngDialog.open({
    //                          template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //                          plain: true
    //                      });
    //                      $timeout(function () {
    //                          xyz.close();
    //                      }, 3000);
    //                  }
    //              })
    //          } else if (art.heartClass == "fa fa-heart font-color3") {
    //              NavigationService.deleteFromFav(art.artwork._id, function (data) {
    //                  console.log(data);
    //                  if (!data.value) {
    //                      $.jStorage.set("user", data);
    //                      art.heartClass = "fa fa-heart";
    //                      var xyz = ngDialog.open({
    //                          template: '<div class="pop-up"><h5 class="popup-wishlist">Removed from favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //                          plain: true
    //                      });
    //                      $timeout(function () {
    //                          xyz.close();
    //                      }, 3000);
    //                  }
    //              })
    //          }
    //      } else {
    //          var xyz = ngDialog.open({
    //              template: '<div class="pop-up"><h5 class="popup-wishlist">Please login to add to favourites</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //              plain: true
    //          });
    //          $timeout(function () {
    //              xyz.close();
    //          }, 3000)
    //      }
  }

});

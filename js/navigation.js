var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "Home",
        active: "",
        link: "#/home",
        classis: "active",
        subnav: []
    }, {
        name: "About",
        active: "",
        link: "#/about",
        classis: "active",
        subnav: []
    }, {
        name: "Artists",
        active: "",
        link: "#/artist",
        classis: "active",
        subnav: []
    }, {
        name: "Paintings & more",
        active: "",
        link: "#/paintings-more",
        classis: "active",
        subnav: []
    }, {
        name: "Infra Services",
        active: "",
        link: "#/infra-services",
        classis: "active",
        subnav: []
    }, {
        name: "Events",
        active: "",
        link: "#/events",
        classis: "active",
        subnav: []
    }, {
        name: "Press",
        active: "",
        link: "#/press",
        classis: "active",
        subnav: []
    }, {
        name: "Contact Us",
        active: "",
        link: "#/contact",
        classis: "active",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    }
});
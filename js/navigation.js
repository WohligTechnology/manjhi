var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "About",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Artists",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Paintings",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Infra Service",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Events",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Press",
        active: "",
        link: "#",
        classis: "active",
        subnav: []
    }, {
        name: "Contact",
        active: "",
        link: "#",
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
var adminurl = "http://localhost:1337/";
var adminurl = "http://104.197.23.70/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Home",
            active: "",
            link: "#/home",
            classis: "active",
            subnav: []
    },
        {
            name: "About",
            active: "",
            link: "#",
            classis: "active",
            subnav: [
                {
                    name: "Team",
                    classis: "active",
                    link: "#/team"
        }, {
                    name: "Activities",
                    classis: "active",
                    link: "#/activities"
        }]
    }, {
            name: "Artists",
            active: "",
            link: "#/artist/All",
            classis: "active",
            subnav: [
                {
                    name: "Paintings",
                    classis: "active",
                    link: "#/artist/Paintings"
        }, {
                    name: "Sculptures",
                    classis: "active",
                    link: "#/artist/Sculptures"
        }, {
                    name: "Photographs",
                    classis: "active",
                    link: "#/artist/Photographs"
        }, {
                    name: "Prints",
                    classis: "active",
                    link: "#/artist/Prints"
        }, {
                    name: "Others",
                    classis: "active",
                    link: "#/artist/Others"
        }]
    }, {
            name: "Paintings & more",
            active: "",
            link: "#/artwork/All",
            classis: "active",
            subnav: [
                {
                    name: "Paintings",
                    classis: "active",
                    link: "#/artwork/Paintings"
        }, {
                    name: "Sculptures",
                    classis: "active",
                    link: "#/artwork/Sculptures"
        }, {
                    name: "Commissioned Sculptures",
                    classis: "active",
                    link: "#/artwork/Sculptures"
        }, {
                    name: "Photographs",
                    classis: "active",
                    link: "#/artwork/Photographs"
        }, {
                    name: "Prints",
                    classis: "active",
                    link: "#/artwork/Prints"
        }, {
                    name: "Others",
                    classis: "active",
                    link: "#/artwork/Others"
        }]
    }, {
            name: "Infra Services",
            active: "",
            link: "#/infra-services",
            classis: "active",
            subnav: [
                {
                    name: "Data Management",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Valuation & Insurance",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Strategy for Art Initiatives, including CSR",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Packing & Logistics",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Archival Facility Set-up",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Trusteeship & Warehousing",
                    classis: "active",
                    link: "#/infra-services"
                }, {
                    name: "Training & Workshops",
                    classis: "active",
                    link: "#/infra-services"
                }
            ]
    }, {
            name: "Events",
            active: "",
            link: "#/events",
            classis: "active",
            subnav: [{
                name: "Current Events",
                classis: "active",
                link: "#/events"
        }, {
                name: "Upcoming Events",
                classis: "active",
                link: "#/events"
        }, {
                name: "Past Events",
                classis: "active",
                link: "#/events"
        }]
    }, {
            name: "Press",
            active: "",
            link: "#/press",
            classis: "active",
            subnav: []
    }, {
            name: "Contact Us",
            active: "",
            link: "",
            classis: "active",
            subnav: [
                {
                    name: "Join our mailing list",
                    classis: "active",
                    link: ""
        }, {
                    name: "Reach out for artworks",
                    classis: "active",
                    link: "#/reach-out"
        }, {
                    name: "Contact Details",
                    classis: "active",
                    link: "#/contactus"
        }
            ]
    }];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        registeruser: function (register, callback) {
            delete register.confirmpassword
            $http({
                url: adminurl + "user/save",
                method: "POST",
                data: register
            }).success(callback);
        },
        userlogin: function (login, callback) {
            $http({
                url: adminurl + "user/login",
                method: "POST",
                data: login
            }).success(callback);
        },
        forgotpassword: function (forgot, callback) {
            $http({
                url: adminurl + "user/forgotpassword",
                method: "POST",
                data: forgot
            }).success(callback);
        },
        artworktype: function (pagedata, callback) {
//            delete pagedata.sort;
//            delete pagedata.filter;
            $http({
                url: adminurl + "artwork/artworktype",
                method: "POST",
                data: pagedata
            }).success(callback);
        },
        getartworkdetail: function (artid, callback) {
            $http({
                url: adminurl + "artwork/findbyid",
                method: "POST",
                data: {
                    "_id": artid
                }
            }).success(callback);
        },
        getallartist: function (pagedata, callback) {
            $http({
                url: adminurl + "user/findbyletter",
                method: "POST",
                data: pagedata
            }).success(callback);
        },
        getoneartist: function (artistid, callback) {
            $http({
                url: adminurl + "user/findone",
                method: "POST",
                data: {
                    "_id": artistid
                }
            }).success(callback);
        }
    }
});
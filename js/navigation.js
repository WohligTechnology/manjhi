var adminurl = "http://localhost:1337/";
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
            link: "#/artist",
            classis: "active",
            subnav: [
                {
                    name: "Paintings",
                    classis: "active",
                    link: "#/paintings"
        }, {
                    name: "Sculptures",
                    classis: "active",
                    link: "#/sculptures"
        }, {
                    name: "Photographs",
                    classis: "active",
                    link: "#/photographs"
        }, {
                    name: "Prints",
                    classis: "active",
                    link: "#/prints"
        }, {
                    name: "Others",
                    classis: "active",
                    link: "#/others"
        }]
    }, {
            name: "Paintings & more",
            active: "",
            link: "#/totalartpage",
            classis: "active",
            subnav: [
                {
                    name: "Paintings",
                    classis: "active",
                    link: "#/paintings"
        }, {
                    name: "Sculptures",
                    classis: "active",
                    link: "#/sculptures"
        }, {
                    name: "Commissioned Sculptures",
                    classis: "active",
                    link: "#/commissionedsculptures"
        }, {
                    name: "Photographs",
                    classis: "active",
                    link: "#/photographs"
        }, {
                    name: "Prints",
                    classis: "active",
                    link: "#/prints"
        }, {
                    name: "Others",
                    classis: "active",
                    link: "#/others"
        }]
    }, {
            name: "Infra Services",
            active: "",
            link: "#/artInfrastructure",
            classis: "active",
            subnav: [
                {
                    name: "Data Management",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Valuation & Insurance",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Strategy for Art Initiatives, including CSR",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Packing & Logistics",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Archival Facility Set-up",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Trusteeship & Warehousing",
                    classis: "active",
                    link: "#"
                }, {
                    name: "Training & Workshops",
                    classis: "active",
                    link: "#"
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
                link: "#"
        }, {
                name: "Upcoming Events",
                classis: "active",
                link: "#"
        }, {
                name: "Past Events",
                classis: "active",
                link: "#"
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
        forgotpassword:function (forgot, callback) {
            $http({
                url: adminurl + "user/forgotpassword",
                method: "POST",
                data: forgot
            }).success(callback);
        }
    }
});
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
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
            link: "#/team",
            classis: "active",
            subnav: [
                {
                    name: "Team",
                    classis: "active",
                    link: "#/team"
        }, {
                    name: "Activities",
                    classis: "active",
                    link: "#/activity"
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
            link: "#/paintings-more",
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
//                {
//                    name: "Data Management",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Valuation & Insurance",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Strategy for Art Initiatives, including CSR",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Packing & Logistics",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Archival Facility Set-up",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Trusteeship & Warehousing",
//                    classis: "active",
//                    link: "#"
//        }, {
//                    name: "Training & Workshops",
//                    classis: "active",
//                    link: "#"
//        }
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
            link: "#/mediacoverages",
            classis: "active",
            subnav: []
    }, {
            name: "Contact Us",
            active: "",
            link: "#/contact",
            classis: "active",
            subnav: [
                {
                    name: "Join our mailing list",
                    classis: "active",
                    link: "#"
        }, {
                    name: "Reach out for artworks",
                    classis: "active",
                    link: "#"
        }, {
                    name: "Contact Details",
                    classis: "active",
                    link: "#"
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

    }
});
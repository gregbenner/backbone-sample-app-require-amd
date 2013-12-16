// var appleData = [{
//     name: "fuji",
//     url: "img/fuji.jpg"
// }, {
//     name: "gala",
//     url: "img/gala.jpg"
// }];
// var app;

// var router = Backbone.Router.extend({
//     routes: {
//         '': 'home',
//         'apples/:appleName': 'loadApple'
//     },
//     initialize: function() {
//         var apples = new Apples();
//         apples.reset(appleData);
//         this.homeView = new homeView({
//             collection: apples
//         });
//         this.appleView = new appleView({
//             collection: apples
//         });
//     },
//     home: function() {
//         this.homeView.render();
//     },
//     loadApple: function(appleName) {
//         this.appleView.loadApple(appleName);
//         //this.appleView.render(appleName);
//     }
// });



// $(document).ready(function() {
//     app = new router;
//     Backbone.history.start();
// });


require([
    'js/apple-item.tpl',
    'js/apple-home.tpl',
    'js/apple-spinner.tpl',
    'js/apple.tpl',
    'js/apple-item-view',
    'js/apple-home-view',
    'js/apple-view',
    'js/apples'
], function(appleItemTpl, appleHomeTpl, appleSpinnerTpl, appleTpl, appleItemView, homeView, appleView, Apples) {
    var appleData = [{
        name: "fuji",
        url: "img/fuji.jpg"
    }, {
        name: "gala",
        url: "img/gala.jpg"
    }];
    var app;
    var router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'apples/:appleName': 'loadApple'
        },
        initialize: function() {
            var apples = new Apples();
            apples.reset(appleData);
            this.homeView = new homeView({
                collection: apples
            });
            this.appleView = new appleView({
                collection: apples
            });
        },
        home: function() {
            this.homeView.render();
        },
        loadApple: function(appleName) {
            this.appleView.loadApple(appleName);
        }
    });


    $(document).ready(function() {
        app = new router;
        Backbone.history.start();
    });

});

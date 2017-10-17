(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "views/home/home.view.client.html",
            controller: "homeController",
            controllerAs: "model"
        })
        .when("/login", {
            templateUrl: "views/user/templates/login.view.client.html",
            controller: "loginController",
            controllerAs: "model"
        })
        .when("/register", {
            templateUrl: "views/user/templates/register.view.client.html",
            controller: "registerController",
            controllerAs: "model"
        })
        .when("/profile/:userId", {
            templateUrl: "views/user/templates/profile.view.client.html",
            controller: "profileController",
            controllerAs: "model"
        })
            // Website routes
            .when("views//user/:userId/website", {
                templateUrl: "website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            }).when("views//user/:userId/website/new", {
                templateUrl: "website/templates/website-new.view.client.html"
                // controller: "websiteListController",
                // controllerAs: "model"
            })
    }
})();   
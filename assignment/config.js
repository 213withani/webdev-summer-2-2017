(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "user/templates/login.view.client.html",
            controller: "loginController",
            controllerAs: "model"
        }).when("/register", {
            templateUrl: "user/templates/register.view.client.html",
            controller: "registerController",
            controllerAs: "model"
        }).when("/profile/:userId", {
            templateUrl: "user/templates/profile.view.client.html",
            controller: "profileController",
            controllerAs: "model"
        })
            // Website routes
            .when("/user/:userId/website", {
                templateUrl: "website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })
    }
})();   
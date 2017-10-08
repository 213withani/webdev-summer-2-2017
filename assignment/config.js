(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "login.html"
        }).when("/register", {
            templateUrl: "register.html"
        }).when("/profile/:userId", {
            templateUrl: "profile.html"
        })
    }
})();   
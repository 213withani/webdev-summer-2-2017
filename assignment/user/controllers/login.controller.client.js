(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .controller("loginController", loginController);

    function loginController($scope, $location, userService) {
        // Event handlers
        $scope.login=login;

        function init() {
            
        }
        init();

        function login(user) {
            var user = userService.findUserByUsernameAndPassword(user.username, user.password);
            
            if (user === null) {
                $scope.errorMessage = "User not found.";
            } else {
                $location.url("profile/" + user._id);
            }

        }
    }
})();   
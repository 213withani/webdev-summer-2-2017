(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, userService) {
        var userId = $routeParams.userId;

        $scope.updateUser=updateUser;
        $scope.unregister=unregister;

        function init() {
            $scope.user=userService.findUserById(userId); 
        }
        init(); 
    }

    function updateUser() {
        
    }

    function unregister() {
        
    }
})();   
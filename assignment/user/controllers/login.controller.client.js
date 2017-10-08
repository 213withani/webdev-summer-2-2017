(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .controller("loginController", loginController);

    var users = [
        { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
        { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
    ];

    function loginController($scope, $location) {
        $scope.login = function (user) {
            for (var u in users) {
                var _user = users[u];

                if (_user.username === user.username && _user.password === user.password) {
                    $location.url("profile/" + _user._id);
                }
            }
            $scope.errorMessage = "User not found.";
        }
    }
})();   
(function () {
    // Bind the HTML. Declare a variable to be reused.
    var app = angular.module("WampApp", ["ngRoute"]);

    // Binding the view with the controller: 
    // View notify the controller of its events.
    app.controller("loginController", loginController);
    app.config(configuration);

    function configuration($routeProvider) {
        $routeProvider.when("/login",{
            templateUrl:"login.html"
        })
    }
    function loginController($scope) {
        var users = [{ _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
        { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
        ];

        $scope.login = function (user) {
            for (var u in users) {
                var _user = users[u];

                if (_user.username === user.username && _user.password === user.password) {
                    $scope.welcomeUser = _user;
                }
            }
        }
    }
})();
// (function () {
    // Bind the HTML. Declare a variable to be reused.
    var app = angular.module("WampApp", ["ngRoute"]);

    // Binding the view with the controller: 
    // View notify the controller of its events.
    app.controller("loginController", loginController);
    app.controller("profileController", profileController);
    app.config(configuration);

    var users = [
        { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
        { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
    ];

    function profileController($scope, $routeParams) {
        var userId = $routeParams.userId;
        
        for (var u in users) {
            
            if (users[u]._id === userId) {
                $scope.user = users[u];
                alert(users[u].username);
            }
        }
    }
    function configuration($routeProvider) {
        $routeProvider.when("/login", {
            templateUrl: "login.html"
        }).when("/register", {
            templateUrl: "register.html"
        }).when("/profile/:userId", {
            templateUrl: "profile.html"
        })
    }

    function loginController($scope, $location) {
        var users = [
            { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
            { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" }
        ];

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
// })();   
// (function() {

// })();

// Bind the HTML. Declare a variable to be reused.
var app = angular.module("WampApp", []);

// Binding the view with the controller: 
// View notify the controller of its events.
app.controller("loginController", loginController);

function loginController($scope) {
    $scope.login =  function (usr,pwd) {
        alert("login click: "+usr +" pwd:"+pwd);
    }
}

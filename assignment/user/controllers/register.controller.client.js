(
    function () {
        angular
            .module("WampApp")
            .controller("registerController", registerController);

        function registerController(userService,$location) {
            var model = this;

            model.registerUser = registerUser;

            function init() {

            }
            init();

            function registerUser(user) {
                var user = userService.registerUser(user);
                console.log("registerUser");
                console.log(user);
                $location.url("/profile/" + user._id);

            }
        }
    }
)();
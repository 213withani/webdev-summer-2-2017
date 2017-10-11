(function() {
    angular
        .module("WampApp")
        .controller("websiteListController",websiteListController);

    function websiteListController($routeParams) {
        var model = this;

        var userId = $routeParams.userId;
        var websites =[
            {"id": "123", "name":"Facebook","developerId":"456", "description":"Yo facebook"},
            {"id": "234", "name":"Tweeter","developerId":"456", "description":"Yo Tweet"}
        ];

        function init() {
            model.websites=websites;
        }
        init();
    }
})();
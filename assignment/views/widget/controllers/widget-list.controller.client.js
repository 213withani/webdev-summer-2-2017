(function () {
    angular
        .module("WampApp")
        .controller("widgetListController", widgetListController);

    function widgetListController() {
        var model = this;
        function init() {
            model.hello = "Hello from widget";
        }
        init();
    }
})();
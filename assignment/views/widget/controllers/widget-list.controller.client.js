(function () {
    angular
        .module("WampApp")
        .controller("widgetListController", widgetListController);

    function widgetListController() {
        var model = this;
        function init() {
            model.hello = "Hello from widget";
            model.widgets =
            [
                { "_id": "123", "WidgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO" },
                { "_id": "234", "WidgetType": "HEADING", "pageId": "321", "size": 4, "text": "GIZMODO" },
                { "_id": "345", "WidgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200" }
            ];
        }
        init();
    }
})();
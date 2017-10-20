(function () {
    angular
        .module("WampApp")
        .controller("widgetListController", widgetListController);

    function widgetListController($sce) {
        var model = this;
        model.trustHtmlContent = trustHtmlContent;
        
        function init() {
            model.hello = "Hello from widgetListController";
            model.widgets =
                [
                    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO" },
                    { "_id": "234", "widgetType": "HTML", "pageId": "321", "size": 4, "text": "<p>GIZMODO</p>" },
                    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200" }
                ];
        }
        init();

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }
    }
})();
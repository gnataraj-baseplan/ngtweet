(function() {
'use strict';

angular
    .module('ngtweet')
    .directive('twitterWidget', TwitterWidget);

function TwitterWidget($log, TwitterWidgetFactory) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="ngtweet-wrapper" ng-transclude></div>',
        link: function(scope, element, attrs) {
            $log.debug('Linking', element, attrs);
            if (attrs.twitterWidgetId && attrs.twitterWidgetId !== '') {
                TwitterWidgetFactory.create(attrs.twitterWidgetId, element[0]).then(function success(embed) {
                    $log.debug('Success!!!');
                });
            } else {
                TwitterWidgetFactory.load(element[0]);
            }
        }
    };
}
})();
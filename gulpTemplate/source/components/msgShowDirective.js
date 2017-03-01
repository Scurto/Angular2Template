/**
 * Created by yustymenko on 01.03.2017.
 */
(function() {
    angular.module('app')
        .directive('msgShow', function() {
            return {
                restrict: 'E',
                template: [
                    '<button type="button" class="btn btn-primary btn-lg" ng-click="addMsg()">Large Button</button>',
                    '<p class="bg-danger" ng-repeat="msg in messages">Hello, {{msg.date | date}}</p>'
                ].join(''),
                link: function(scope, el, attr) {
                    scope.messages = [];
                    scope.addMsg = function() {
                        scope.messages.push({
                            id: +(new Date()),
                            date: new Date()
                        })
                    }
                }
            }
        })
})()
define(['app'], function(app)
{
    app.directive('bindHtmlUnsafe', function () {
        return function (scope, element, attr) {
            element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
            scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
                element.html(value || '');
            });
        };
    });
    app.factory('newsStoresSvs', ['$http', '$q', function($http, $q){
        return {
            'getTopStories': function (){
                var deferred = $q.defer();
                $http.get('http://feeds.feedburner.com/NdtvNews-TopStories?format=xml', {
                    headers: {
                        'Content-Type': 'text/xml'
                    }
                }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    deferred.resolve($.xml2json(data));
                }).
                error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            'getLatestStories': function(){
                var deferred = $q.defer();
                $http.get('http://feeds.feedburner.com/NDTV-LatestNews?format=xml', {
                    headers: {
                        'Content-Type': 'text/xml'
                    }
                }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    deferred.resolve($.xml2json(data));
                }).
                error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        deferred.reject(data);
                    });
                return deferred.promise;
            },
            'getTreandingStories': function(){
                var deferred = $q.defer();
                $http.get('http://feeds.feedburner.com/NDTV-Trending?format=xml', {
                    headers: {
                        'Content-Type': 'text/xml'
                    }
                }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    deferred.resolve($.xml2json(data));
                }).
                error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
    }]);
});
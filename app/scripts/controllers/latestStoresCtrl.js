define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('latestStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        '$rootScope',
        function($scope, newsStoresSvs, $timeout, $rootScope)
        {
            $rootScope.currentNews = 'latest';
            $timeout(function(){
                $scope.getLatestStories();
            }, 100, true);

            $scope.getLatestStories = function(){
                newsStoresSvs.getLatestStories().then(function(data){
                    $scope.newsData = data;
                    /*$timeout(function(){
                        $scope.getLatestStories();
                    }, 100, true);*/
            });
            }
        }
        ]);
});
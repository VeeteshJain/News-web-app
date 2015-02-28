define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('latestStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        function($scope, newsStoresSvs, $timeout)
        {
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
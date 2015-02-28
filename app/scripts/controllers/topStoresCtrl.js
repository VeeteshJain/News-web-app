define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('topStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        function($scope, newsStoresSvs, $timeout)
        {
            $timeout(function(){
                $scope.getTopStories();
            }, 100, true);

            $scope.getTopStories = function(){
                newsStoresSvs.getTopStories().then(function(data){
                    $scope.newsData = data;
                    /*$timeout(function(){
                        $scope.getTopStories();
                    }, 100, true);*/
            });
            }
        }
        ]);
});
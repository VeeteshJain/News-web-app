define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('topStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        '$rootScope',
        function($scope, newsStoresSvs, $timeout, $rootScope)
        {
            $rootScope.currentNews = 'top';
            debugger;
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
define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('trendingStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        '$rootScope',
        function($scope, newsStoresSvs, $timeout, $rootScope)
        {
            $rootScope.currentNews = 'trending';
            $timeout(function(){
                $scope.getTreandingStories();
            }, 100, true);

            $scope.getTreandingStories = function(){
                newsStoresSvs.getTreandingStories().then(function(data){
                    $scope.newsData = data;
                    /*$timeout(function(){
                        $scope.getTreandingStories();
                    }, 100, true);*/
            });
            }
        }
        ]);
});
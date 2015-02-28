define(['app', 'services/newsStoresSvs'], function(app)
{
    app.controller('trendingStoresCtrl',
        [
        '$scope',
        'newsStoresSvs',
        '$timeout',
        function($scope, newsStoresSvs, $timeout)
        {
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
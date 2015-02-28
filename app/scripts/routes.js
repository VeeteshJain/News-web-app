define([
    ], function()
    {
        return {
            defaultRoutePath: '/top',
            routes: {
                '/top': {
                    templateUrl: '/views/topStores.html',
                    dependencies: [
                    'controllers/topStoresCtrl'
                    ]
                },
                '/latest': {
                    templateUrl: '/views/latestStores.html',
                    dependencies: [
                    'controllers/latestStoresCtrl'
                    ]
                },
                '/trending': {
                    templateUrl: '/views/trendingStores.html',
                    dependencies: [
                    'controllers/trendingStoresCtrl'
                    ]
                }
            }
        };
    });
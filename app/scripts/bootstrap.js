require.config({
	baseUrl: '/scripts',
	paths: {
		'angular': '/bower_components/angular/angular',
		'angular-route': '/bower_components/angular-route/angular-route',
		'bootstrap3': '/bower_components/bootstrap/dist/js/bootstrap',
		'jquery': '/bower_components/jquery/dist/jquery',
		'xml2json': '../lib/xml2json',
		'jquery.xml2json': '../lib/jquery.xml2json'
	},
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap3', 'xml2json', 'jquery.xml2json']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap3': {
			deps: ['jquery']
		},
		'jquery.xml2json': {
			deps: ['jquery']
		}
	}
});

require
(
	[
	'app'
	],
	function(app)
	{
		angular.bootstrap(document, ['app']);
	}
	);
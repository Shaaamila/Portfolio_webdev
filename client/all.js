( function (angular) {
	angular
		.module('portfolioApp', ['ui.router', 'ngAnimate']);
} )(angular);

(function (angular){
	angular
		.module('portfolioApp')
		.config(routes);
                     
	function routes($stateProvider, $urlRouterProvider, $compileProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: '/partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.state('about',{
				url: '/about',
				templateUrl: '/partials/about.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			.state('portfolio',{
				url: '/portfolio',
				templateUrl: 'partials/portfolio.html',
				controller: 'portfolioCtrl',
				controllerAs: 'vm'
			})
			.state('skills',{
				url: '/skills',
				templateUrl: 'partials/skills.html',
				controller: 'skillsCtrl',
				controllerAs: 'vm'
			})
			.state('contact',{
				url: '/contact',
				templateUrl: 'partials/contact.html',
				controller: 'contactCtrl',
				controllerAs: 'vm'
			});
		$compileProvider.debugInfoEnabled(false);
	}


}  ) (angular);
console.log('halua');
(function (angular){	
	angular
		.module('portfolioApp')
		.controller('homeCtrl',homeCtrl);

	function homeCtrl($scope, $location){
		var vm = this;
	}
} ) (angular);

(function (angular){
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

//$rootscope,
	function navCtrl ($rootScope, $scope, $location){
		var vm = this;

		vm.currentUrl = currentUrl;
		// vm.showLinks = showLinks;
		// vm.mobileScreen = false;
		// vm.openMenu = false;

		//Autoscroll on top on statechange
		$rootScope.$on('$stateChangeSuccess', function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

		function currentUrl(urlLocation){
			return urlLocation === $location.url();
		}

		// 		function showLinks() {
		// 	if (vm.mobileScreen === true && vm.openMenu === true) {
		// 		vm.mobileScreen = false;
		// 		vm.openMenu = false;
		// 	} else {
		// 		vm.openMenu = true;
		// 		vm.mobileScreen = true;
		// 	}
		// }
	}
} ) (angular);
(function (angular){
	angular
	.module('portfolioApp')
	.controller('aboutCtrl', aboutCtrl);

	function aboutCtrl($scope, $location){
		var vm = this;
	}
} ) (angular);
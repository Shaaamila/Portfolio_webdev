(function (angular){
	angular
	.module('portfolioApp')
	.controller('aboutCtrl');

	function aboutCtrl($scope, $location, $anchorScroll){
		$scope.scrollTo = function(id){
			$location.hash(id);
			$anchorScroll();
			console.log('directive anchor value:', scope.anchor);
		}
		var vm = this;
	}
} ) (angular);
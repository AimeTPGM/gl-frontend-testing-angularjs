angular.module('app')
.controller('IndexCtrl',['$scope',
	function($scope){
		$scope.templates = {
			"top" : "/views/top.html",
			"intro" : "/views/intro.html",
			"content" : "/views/content.html",
			"footer" : "/views/footer.html"
		}
	}
])
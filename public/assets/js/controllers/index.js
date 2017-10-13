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

	$scope.cards = [
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			},
			{
				"header" : "Lorem ipsum",
				"content" : "dolor sit amet, consectetur adipiscing elit. Nullam sed nisi nec lorem viverra laoreet."
			}
		]
])
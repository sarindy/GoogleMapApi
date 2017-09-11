
var app = angular.module('app', []);

/*
 * app.config('$httpProvider', function($httpProvider) {
 * $httpProvider.interceptors.push('AuthInterceptor'); });
 * 
 * app.factory('AuthInterceptor', function() { return { // Sent the token (if
 * present) with each request 'request': function(config) { config.headers =
 * config.headers || {}; var encodedString = btoa("api@dnynn.com:123456");
 * config.headers.Authorization = 'Basic '+ encodedString;
 * //config.headers.Content-Type = 'application/json;charset=utf-8;';
 * 
 * return config; } }; });
 */


// Add Course Controller
app.controller('addCourse', function($scope, $http, $location) {
	$scope.createCourse = function() {
		var url = "/api/addCourse";
		

		var config = {
			headers : {	
				'Content-Type' : 'application/json;charset=utf-8;'	,
				'Authorization' : 'Basic ' + 'YXBpQGRueW5uLmNvbToxMjM0NTY='
			}
		}
		console.log(config);
		var data = {
			/*
			 * firstName is the one in Java Class and firstnames is the one in
			 * html index file
			 */

			courseName : $scope.coursename

		};

		$http.post(url, data, config).then(function(response) {
			$scope.postResultMessage = response.data;
		}, function(response) {
			$scope.postResultMessage = "Fail!";
		});

		$scope.coursename = "";

	}

	$scope.getAllCourse=function (){
		var url = "/api/getAllCourse";
		

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;',	
				'Authorization' : 'Basic ' + 'YXBpQGRueW5uLmNvbToxMjM0NTY='
			}
		}
		
		console.log(config);
		
		

		$http.get(url,config).then(function(myResponse) {
			$scope.myResponse = myResponse.data
		}, function(myResponse) {
			$scope.getResultMessage = "Fail!";
		});
	}
});

app.controller('results', function($scope, $http) {

  //get data from "backend"
   $http.get('data/results-data.json').
	  then(function onSuccess(response) {
	     $scope.results = response.data;
	     console.log($scope.results);
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});
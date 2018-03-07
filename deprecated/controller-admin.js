app.controller('admin', function($scope, $http) {

  //get data from "backend"
   $http.get('data/election-array.json').
	  then(function onSuccess(response) {
	     $scope.elections = response.data;
	     console.log($scope.elections);
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});
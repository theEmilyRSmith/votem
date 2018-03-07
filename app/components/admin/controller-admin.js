app.controller('admin', function($scope, $http) {

  //get data from "backend"
   $http.get('data/election-data.json').
	  then(function onSuccess(response) {
	     $scope.elections = response.data;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});
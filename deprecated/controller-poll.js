app.controller('poll', function($scope, $http) {
  //get data from "backend"
   $http.get('data/election-data.json').
	  then(function onSuccess(response) {
	     $scope.election = response.data;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});
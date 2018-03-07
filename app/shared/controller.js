app.controller('admin', function($scope, $http, $routeParams, $route) {

  //get data from "backend"
   $http.get('data/election-array.json').
	  then(function onSuccess(response) {
	     $scope.elections = response.data;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});
app.controller('home', function($scope, $http, $routeParams, $route) {

  //get data from "backend"
   $http.get('data/election-array.json').
    then(function onSuccess(response) {
       $scope.elections = response.data;
    }).
    catch(function onError(response) {
     console.log(response);
    });

});
app.controller('election', function($scope, $http, $routeParams, $route) {
  //get data from "backend"
   $http.get('data/election-data-'+ $routeParams.electionId+ '.json').
	  then(function onSuccess(response) {
	     $scope.election = response.data;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});

app.controller('results', function($scope, $http, $routeParams, $route) {
  //get data from "backend"
   $http.get('data/results-data-'+ $routeParams.electionId+ '.json').
	  then(function onSuccess(response) {
	     $scope.results = response.data;
	     console.log($scope.results);
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});

app.controller('vote', function($scope, $http, $routeParams, $route) {
    //get data from "backend"
     $http.get('data/election-data-'+ $routeParams.electionId+ '.json').
      then(function onSuccess(response) {
        $scope.election = response.data;
      }).
      catch(function onError(response) {
       console.log(response);
      });

    //helper functions
    $scope.updateCount= function(question,value) {
      question.count += value == true ? 1 : -1;
    }

    $scope.rankOptions= function(length) {
      var arr = [];
      for(var i = 1; i <= length; i++) {
          arr.push(i);
      } 
      return arr;
    }

    $scope.optionTaken = function(i, answer, answers) {
      angular.forEach(answers, function(value, key) {
        if((value.value == i) && value.name != answer.name) { 
          return true;
        }
      });
      return false;
    }
});
app.controller('admin', function($scope, $http, $routeParams, $route) {

  //get data from "backend"
   $http.get('data/election-array.json').
	  then(function onSuccess(response) {
	     $scope.elections = response.data;
       $scope.show_admin = true;
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
   $http.get('data/' + $routeParams.electionId + '/election-data.json').
	  then(function onSuccess(response) {
	     $scope.election = response.data;
       $scope.show_admin = true;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});

app.controller('results', function($scope, $http, $routeParams, $route) {
  //get data from "backend"
   $http.get('data/' + $routeParams.electionId + '/results-data.json').
	  then(function onSuccess(response) {
	     $scope.results = response.data;
       $scope.show_admin = true;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

});

app.controller('vote', function($scope, $http, $routeParams, $route) {
    //get data from "backend"
     $http.get('data/' + $routeParams.electionId + '/election-data.json').
      then(function onSuccess(response) {
        $scope.election = response.data;
        $scope.show_summary = true;
      }).
      catch(function onError(response) {
       console.log(response);
      });

    //helper functions
    $scope.updateCount= function(question,value) {
      question.count += value == true ? 1 : -1;
    }

    $scope.rankOptions= function(question) {
      var len = question.answers.length;
      var arr = [];
      for(var i = 1; i <= len; i++) {
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
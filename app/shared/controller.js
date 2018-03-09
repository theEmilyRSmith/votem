app.controller('admin', function($scope, $http, $routeParams, $route) {

  //get data from backend
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

  //get data from backend
  $http.get('data/election-array.json').
  then(function onSuccess(response) {
     $scope.elections = response.data;
  }).
  catch(function onError(response) {
   console.log(response);
  });

});
app.controller('election', function($scope, $http, $routeParams, $route) {

  //get data from backend
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
  
  //get data from backend
  $http.get('data/' + $routeParams.electionId + '/results-data.json').
  then(function onSuccess(response) {
     $scope.results = response.data;
     $scope.show_admin = true;
  }).
  catch(function onError(response) {
    //send this log to the backend
    console.log(response);
  });

});

app.controller('vote', function($scope, $http, $routeParams, $route) {
    $scope.disabled = {};

    //get data from backend
    $http.get('data/' + $routeParams.electionId + '/election-data.json').
    then(function onSuccess(response) {
      $scope.election = response.data;
      $scope.show_summary = true;
    }).
    catch(function onError(response) {
      //send this log to the backend
      console.log(response);
    });

    //helper functions
    $scope.updateCount= function(question,value) {
      question.count += value == true ? 1 : -1;
    }

    $scope.rankOptions= function(question) {
      var arr = [];
      for(var i = 1; i <=  question.answers.length; i++) {
          arr.push(i);
      } 
      return arr;
    }
    $scope.submitBallot= function() {
      $scope.election.submitted = true;
    }

    $scope.submitFinal = function() {
      $scope.election.complete = true;
      $scope.show_summary = false;
    }

    $scope.showMaxed = function(question) {
      return ((question.count >= question.max) && question.max != false);
    }
    $scope.restrictOptions = function(question, answer) {
      return ((question.count >= question.max) && answer.value != true && question.max != false);
    }

    $scope.rankUpdate = function(i, answer, question) {
      if(answer.value) {
        $scope.disabled[answer.value + question.question] = false;
        if(answer.value == i) {
          answer.value = null;
          $scope.disabled[i + question.question] = false;
        } else {
          answer.value = i;
          $scope.disabled[i + question.question] = true;
        }
      } else {
        answer.value = i;
        $scope.disabled[i + question.question] = true;
      }
    }
});
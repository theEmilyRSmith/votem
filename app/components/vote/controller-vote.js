app.controller('vote', function($scope, $http, $filter) {
  $scope.questionIndex = 0;
    $scope.init = function(election, ballot){
      //get data from "backend"
       $http.get('data/election-data.json').
        then(function onSuccess(response) {
          $scope.election = response.data;
        }).
        catch(function onError(response) {
         console.log(response);
        });

    };

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
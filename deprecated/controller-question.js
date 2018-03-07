app.controller('question', function($scope) {
	$scope.init = function(question) {
    console.log(question);
    console.log("in question init");
		$scope.question = question;
    console.log($scope.question);
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
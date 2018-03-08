app.directive('ballotQuestion', function() {
    return { 
      templateUrl: 'app/components/vote/views/ballot-question.html'
    };
});
app.directive('ballotQuestionWriteIn', function() {
    return { 
      templateUrl: 'app/components/vote/views/ballot-question-write-in.html'
    };
});
app.directive('ballotSummary', function() {
    return { 
      templateUrl: 'app/components/vote/views/ballot-summary.html'
    };
});
app.directive('header', function() {
    return {
      templateUrl: 'app/shared/header.html'
    };
});
app.directive('footer', function() {
    return { 
      templateUrl: 'app/shared/footer.html'
    };
});
app.directive('addPoll', function() {
    return { 
      templateUrl: 'app/components/admin/views/add-poll.html'
    };
});
app.directive('createElection', function() {
    return { 
      templateUrl: 'app/components/admin/views/create-election.html'
    };
});
app.directive('pollTable', function() {
    return { 
      templateUrl: 'app/components/admin/views/poll-table.html'
    };
});
app.directive('headerVote', function() {
    return {
      templateUrl: 'app/components/vote/views/header.html'
    };
});
app.directive('footerVote', function() {
    return { 
      templateUrl: 'app/components/vote/views/footer.html'
    };
});
app.directive('ballotQuestion', function() {
    return { 
      templateUrl: 'app/components/vote/views/ballot-question.html'
    };
});
app.directive('ballotSummary', function() {
    return { 
      templateUrl: 'app/components/vote/views/ballot-summary.html'
    };
});
app.directive('headerAdmin', function() {
    return {
      templateUrl: 'app/components/admin/views/header.html'
    };
});
app.directive('footerAdmin', function() {
    return { 
      templateUrl: 'app/components/admin/views/footer.html'
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
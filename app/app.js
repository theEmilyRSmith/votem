var app = angular.module('voteApp', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
	.when('/admin', {
        controller: 'admin',
        templateUrl: 'app/views/admin.html'
    })
    .when('/ballot/:electionId', {
        controller: 'election',
        templateUrl: 'app/views/ballot.html'
    })
    .when('/election', {
        controller: 'action',
        templateUrl: 'app/views/election.html'
    })
    .when('/poll/:electionId', {
        controller: 'poll',
        templateUrl: 'app/views/poll.html'
    })
    .when('/results/:electionId', {
        controller: 'results',
        templateUrl: 'app/views/results.html'
    })
    .when('/home', {
        controller: 'home',
        templateUrl: 'app/views/home.html'
    })
    .when('/delete/:electionId', {
        controller: 'action',
        templateUrl: 'app/views/delete.html'
    })
    .when('/edit/:electionId/poll/:pollId', {
        controller: 'election',
        templateUrl: 'app/views/edit.html'
    })
    .when('/vote/:electionId', {
        controller: 'vote',
        templateUrl: 'app/views/vote.html'
    });
}]);
var app = angular.module('voteApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
	.when('/admin', {
        controller: 'admin',
        templateUrl: 'admin.html'
    })
    .when('/ballot/:electionId', {
        controller: 'election',
        templateUrl: 'ballot.html'
    })
    .when('/election', {
        controller: 'action',
        templateUrl: 'election.html'
    })
    .when('/poll/:electionId', {
        controller: 'poll',
        templateUrl: 'poll.html'
    })
    .when('/results/:electionId', {
        controller: 'results',
        templateUrl: 'results.html'
    })
    .when('/home', {
        controller: 'home',
        templateUrl: 'home.html'
    })
    .when('/delete/:electionId', {
        controller: 'action',
        templateUrl: 'delete.html'
    })
    .when('/edit/:electionId/poll/:pollId', {
        controller: 'election',
        templateUrl: 'edit.html'
    })
    .when('/vote/:electionId', {
        controller: 'vote',
        templateUrl: 'vote.html'
    });
}]);
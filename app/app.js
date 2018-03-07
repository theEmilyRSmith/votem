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
        controller: 'election',
        templateUrl: 'election.html'
    })
    .when('/poll/:electionId', {
        controller: 'election',
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
        controller: 'election',
        templateUrl: 'delete.html'
    })
    .when('/vote/:electionId', {
        controller: 'vote',
        templateUrl: 'vote.html'
    });
}]);
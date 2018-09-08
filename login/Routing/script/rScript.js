/// <reference path="../../scripts/angular.min.js" />

var app = angular.module("rModule", ['ngRoute', 'ngResource', 'registrationService'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Template/home.html",
                controller: "homeController"
            })
            .when("/login", {
                templateUrl: "Template/login.html",
                controller: "loginController"
            })
            .when("/signup", {
                templateUrl: "Template/signup.html",
                controller: "signupController"
            })
            .when("/courses", {
                templateUrl: "Template/courses.html",
                controller: "coursesController"
            })
            .when("/contact", {
                templateUrl: "Template/contact.html",
                controller: "contactController"
            })
            .otherwise({
                redirectTo:"/home"
            })
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    })
    .controller('loginController', function ($scope, $location) {
        $scope.msg = "Login";
        $scope.submit = function () {
            var uname = $scope.username;
            var pass = $scope.password;
            if ($scope.username == 'admin' && $scope.password == 'admin') {
                $location.path('/home');
            } else {
                alert('Something Went Wrong !! please check your credentials');
            }
        }
        $scope.register = function () {
            $location.path('/signup');
        }
    })
    
    app.controller('signupController', [
        '$scope', 'registration',
        function ($scope, registration) {
            $scope.reset = reset;
            $scope.submit = submit;

            reset();

            function submit(model) {
                registration.submit(model).$promise
                    .then(function (response) {
                        alert('success');
                    },
                        function (response) {
                            alert('error');
                        });
            }

            function reset() {
                $scope.model = {};
            }
        }
    ])
    .controller("homeController", function ($scope) {
        $scope.message = " Home Page ";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["Angular Js", "Java", "C#", "Visual Basic", "Visual Code"];
    })
    .controller("contactController", function ($scope) {
        $scope.contact = [
            { id: 1111, name: 'Nadeem' },
            { id: 2222, name: 'Avinash' },
            { id: 3333, name: 'Vivek' },
            { id: 4444, name: 'Ritesh' },
        ];
    });
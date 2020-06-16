'use strict';
var app = angular.module("MoveLogApp", []);

app.controller('MainController', ['$scope', function ($scope) {

    $scope.increase = function (index) {
        $scope.exercises[index].count += 1;
    };

    $scope.decrease = function (index) {
        $scope.exercises[index].count -= 1;
    };

    $scope.exercises = [{
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GB2Wk5rhorHEM9dtMWfmdFCW1-G8IU1jdn_94f0qwTrfbcIJfg',
            name: 'Pushups',
            count: 20
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqKzJCiBrjF2VYq2U4T5Ba1WuCFjJPIGKwyFDCBg82Cbx4qXb',
            name: 'Squats',
            count: 15
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GB2Wk5rhorHEM9dtMWfmdFCW1-G8IU1jdn_94f0qwTrfbcIJfg',
            name: 'Pullups',
            count: 10
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqKzJCiBrjF2VYq2U4T5Ba1WuCFjJPIGKwyFDCBg82Cbx4qXb',
            name: 'Rows',
            count: 10
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GB2Wk5rhorHEM9dtMWfmdFCW1-G8IU1jdn_94f0qwTrfbcIJfg',
            name: 'Lunges',
            count: 10
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqKzJCiBrjF2VYq2U4T5Ba1WuCFjJPIGKwyFDCBg82Cbx4qXb',
            name: 'Step Ups',
            count: 10
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GB2Wk5rhorHEM9dtMWfmdFCW1-G8IU1jdn_94f0qwTrfbcIJfg',
            name: 'Sit Ups',
            count: 15
        }
    ];

}]);
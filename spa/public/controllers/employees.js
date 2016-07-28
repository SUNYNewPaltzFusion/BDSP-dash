angular.module('app')
    .controller('employeesController', function($http, $location, $scope){
        var self = this;
        $http.get("/employees")
            .success(function(data) {
                self.rows = data;
        })
        $http.get("/runs")
            .success(function(data) {
                self.runs = data;
        });
    })
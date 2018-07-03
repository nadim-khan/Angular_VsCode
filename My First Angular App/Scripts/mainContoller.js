app.controller('mainController',['$scope',function($scope){
    $scope.times = Date();
    $scope.message= "2018";
    var _first = "Your";
    var _last = "Name";
    $scope.user={
        firstname: function (first) {return argument.length ? (_first = first): _first
        },
        lastname: function (last) {return argument.length ? (_last = last) : _last
        },
        fullname: function ()  { return _first + ' ' + _last;}
    }
    
}]);
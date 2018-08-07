app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.Menu={title : 'Our Menu'};

       /* $scope.changeMainDish = function (item) {
            $scope.mainDish = item;
        };*/
        $scope.model= [
            {name : "Cheese Pizza",price : "$5 usd"},
            {name : "Pepperoni Pizza",price : "$3 usd"},
            {name : "Margherita Pizza",price : "$2.1 usd"},
            {name : "BBQ Chicken Pizza",price : "$4.5 usd"},
            {name : "Combo Pizza",price : "$5.5 usd"},
            {name : "Special ",price : "$15 usd"}
        ];
        $scope.changeMainDish = function (item) {
            $scope.mainDish = item;
        };
// Use of watch object
        $scope.$watch('mainDish',function(newValue,oldValue){
            //alert(oldValue); -- initially undefined
            if(newValue==="BBQ Chicken Pizza")
                alert('Great Choice --> '+newValue);
        });
    }
]);

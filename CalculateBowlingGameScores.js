var app = angular.module('app', []);
    app.controller('ctrl', function($scope) {
        $scope.hi = "hi!!";
        $scope.frame = {};
        $scope.calculateScores = function(frame) {
            console.log($scope.frame);
            console.log($scope.frame.frame1a);
            console.log($scope.frame.frame1b);
            if($scope.frame.frame1a==10){
                console.log("Strike!!!");
                $scope.frame.frame1b = null;
                console.log($scope.frame.frame1b);
            } else {
                console.log($scope.frame.frame1a);
                console.log($scope.frame.frame1b);
            }
//            for(var i=0; i<$scope.frame.frame1; i++) {
//                console.log($scope.frame.value);
//                if($scope.frame[i].value==10){
//                    console.log("Strike!!!");
//                } else {
//                    console.log($scope.frame.frame1a);
//                    console.log($scope.frame.frame1b);
//                }
//            }            
        };
});




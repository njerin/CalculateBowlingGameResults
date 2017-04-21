var app = angular.module('app', []);
    app.controller('ctrl', function($scope) {
        $scope.hi = "hi!!";
        $scope.frame1;
        $scope.frame2;
        $scope.frame3;
        $scope.frame4;
        $scope.frame5;
        $scope.frame6;
        $scope.frame7;
        $scope.frame8;
        $scope.frame9;
        $scope.frame10;
        $scope.frame;
        $scope.frames;
        //$scope.secondBowl = 0;
        $scope.frameScore;
        $scope.calculateScores = function(frame1, frame2) {
          //console.log($scope.frames);  
          console.log($scope.frame1);
          console.log($scope.frame2);
//          console.log($scope.frame3);
//          console.log($scope.frame4);
//          console.log($scope.frame5);
//          console.log($scope.frame6);
//          console.log($scope.frame7);
//          console.log($scope.frame8);
//          console.log($scope.frame9);
//          console.log($scope.frame10);
          $scope.frames = [frame1, frame2];
          for(var i=0; i<$scope.frames.length; i++){
              $scope.frame = $scope.frames[i];
              console.log($scope.frame);
              console.log("Here!!!");
//              for(var j=0; j<$scope.frame.length; j++){
//                  console.log("Here Again!!!");
//                  console.log($scope.frame[j]);
//              }
              Object.keys($scope.frame).forEach(function(key){
                console.log(key, $scope.frame[key]);
                if($scope.frame[key]==10){
                    console.log("Strike!!!");
                    $scope.frame[key+1] = null;
                    console.log($scope.frame[key+1]);
                    $scope.frameScore == 10;
                } 
//                else {
//                    console.log($scope.frame.frame1a);
//                    console.log($scope.frame.frame1b);
//                    var frame1aScore = $scope.frame.frame1a;
//                    var frame1bScore = $scope.frame.frame1b;
//                    $scope.frameScore = +frame1aScore + +frame1bScore;
//                    console.log($scope.frameScore);
//                    if($scope.frameScore==10){
//                        console.log("Spare!");
//                    }
//                }
              });
//              for(var j=0; j<$scope.frame.length; j++){
//                  console.log("Here Again!!!");
//                  console.log($scope.frame[j]);
//              };
//            Object.keys($scope.frames).forEach(function(key){
//              console.log(key, $scope.frames[key]); 
//             //console.log(key, $scope.frames[key]);
//             //console.log($scope.frames[key])
////             if($scope.frames[key]==10) {
////                console.log("Strike!!!");
////                $scope.frame.['key' + i] = null;
////                console.log($scope.frame.['key' + i]);
////                $scope.frameScore == 10;
////             }
//             
//            });
          };
          
//          $scope.frames = $scope.frame;
//          console.log($scope.frames);
//          Object.keys($scope.frames).forEach(function(key){
//             console.log(key, $scope.frames[key]); 
//             //console.log($scope.frames[key])
//             if($scope.frames[key]==10) {
//                console.log("Strike!!!");
//                $scope.frame.['key' + i] = null;
//                console.log($scope.frame.['key' + i]);
//                $scope.frameScore == 10;
//             }
//             
//          });
          //Object { frame1a: "10", frame2a: "3", frame3a: "4", frame4a: "5", frame5a: "7", frame6a: "8", frame7a: "9", frame8a: "7", frame9a: "7", frame10a: "10", 10 more… }
//          for(var i=0; i<frame; i++) {            
//            console.log($scope.frame.frame1a);
//            console.log($scope.frame.frame1b);
//            if($scope.frame.frame1a==10){
//                console.log("Strike!!!");
//                $scope.frame.frame1b = null;
//                console.log($scope.frame.frame1b);
//                $scope.frameScore == 10;
//            } else {
//                console.log($scope.frame.frame1a);
//                console.log($scope.frame.frame1b);
//                var frame1aScore = $scope.frame.frame1a;
//                var frame1bScore = $scope.frame.frame1b;
//                $scope.frameScore = +frame1aScore + +frame1bScore;
//                console.log($scope.frameScore);
//                if($scope.frameScore==10){
//                    console.log("Spare!");
//                }
//            }
//          }
//            console.log($scope.frame);
//            console.log($scope.frame.frame1a);
//            console.log($scope.frame.frame1b);
//            if($scope.frame.frame1a==10){
//                console.log("Strike!!!");
//                $scope.frame.frame1b = null;
//                console.log($scope.frame.frame1b);
//                $scope.frameScore == 10;
//            } else {
//                console.log($scope.frame.frame1a);
//                console.log($scope.frame.frame1b);
//                var frame1aScore = $scope.frame.frame1a;
//                var frame1bScore = $scope.frame.frame1b;
//                $scope.frameScore = +frame1aScore + +frame1bScore;
//                console.log($scope.frameScore);
//                if($scope.frameScore==10){
//                    console.log("Spare!");
//                }
//            }
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




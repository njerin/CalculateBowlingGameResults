var app = angular.module('app', []);
    app.controller('ctrl', function($scope) {
        $scope.hi = "hi!!";
        $scope.frames;
        $scope.currentFrame;
        $scope.ball1;
        $scope.ball2;
        $scope.ball1Score;
        $scope.ball2Score;
        $scope.frameScore;
        $scope.framesScore = [];
        
//        $scope.calculateScores = function(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10) {
//          $scope.frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];
        $scope.calculateScores = function(frame1, frame2) {
          $scope.frames = [frame1, frame2];
          for(var i=0; i<$scope.frames.length; i++){
              console.log($scope.frames);
              $scope.currentFrame = $scope.frames[i];
              $scope.ball1 = $scope.currentFrame.ball1;
              $scope.ball2 = $scope.currentFrame.ball2;
              console.log('!!!!!!!!!');
              console.log($scope.currentFrame);
              console.log($scope.ball1);
              console.log($scope.ball2);
              if($scope.ball1==10){
                  //$scope.ball2 = null;
                  console.log("Strike!!!");
                  console.log($scope.ball2);
                  $scope.ball1Score = $scope.ball1;
                  $scope.framesScore.push([$scope.ball1Score]);
                  console.log($scope.framesScore);
              } else{
                  $scope.ball1Score = $scope.ball1;
                  $scope.ball2Score = $scope.ball2;
                  $scope.framesScore.push([$scope.ball1Score, $scope.ball2Score]);
                  console.log($scope.framesScore);
                  $scope.frameScore = +$scope.ball1Score + +$scope.ball2Score; 
                  console.log($scope.frameScore);
                  if($scope.frameScore==10) {
                      console.log("Spare!!!");
                  }
              }
          };
          $scope.totalScore();
        };
        
        $scope.totalScore = function() {  
            Object.keys($scope.framesScore).forEach(function(key){
                console.log("Total Score!");
                console.log(key, $scope.framesScore[key]);
                $scope.firstElement = $scope.framesScore[key][0];                
                $scope.secondElement = $scope.framesScore[key][1];
                $scope.totalFrameScore = +$scope.firstElement + +$scope.secondElement; 
                if($scope.firstElement == 10) {
                    console.log("Strike in the Score!");                    
                    if($scope.framesScore[key+1][0]==10) {
                        if($scope.framesScore[key+2][0]==10) {
                            $scope.framesScore[key+1][0];
                            $scope.framesScore[key+2][0];
                        }
                        $scope.framesScore[key+1][0];
                        $scope.framesScore[key+1][1];
                    } 
                    else {            
                        $scope.addTwoBallsScore = +$scope.framesScore[key+1][0] + $scope.framesScore[key+1][1];
                    }
                } else if($scope.totalFrameScore == 10 ) {
                    console.log("Spare in the Score!");
                    $scope.framesScore[key+1][0];
                } else {
                    $scope.framesScore[key];
                }
                
          });
//            for(var i=0; i<$scope.framesScore.length; i++){
//                console.log("Total Score!");
//                console.log($scope.framesScore);
//                $scope.eachFrameScore = $scope.framesScore[i];
//                console.log($scope.eachFrameScore);
//                $scope.firstElement = $scope.eachFrameScore[0];
//                $scope.secondElement = $scope.eachFrameScore[1];
//                console.log($scope.firstElement);
//                console.log($scope.secondElement);
//          };
        };
          
//              for(var j=0; j<$scope.currentFrame.length; j++){
//                   
//                    
//                    $scope.ball1 = $scope.currentFrame[j];
//                    console.log($scope.ball1);
//              }
//            $scope.currentFrame = $scope.frames[i];
//            console.log('!!!!!!!!!');
//            console.log($scope.currentFrame);
//            //for(var j=0; j<$scope.currentFrame.length; j++) {
//                $scope.ball1 = $scope.frame[i][j];
//                console.log($scope.ball1);
            //}
            //$scope.ball1 = $scope.frames[i][j];
//            $scope.ball2 = $scope.currentFrame[i+1];
           //console.log($scope.ball1);
//            console.log($scope.ball2);
            
            
              //$scope.frame = $scope.frames[i];
              //console.log($scope.frame);
              //console.log("Here!!!");
//              for(var j=0; j<$scope.frame.length; j++){
//                  console.log("Here Again!!!");
//                  console.log($scope.frame[j]);
//              }
//              Object.keys($scope.frame).forEach(function(key){
//                console.log(key, $scope.frame[key]);
//                if($scope.frame[key]==10){
//                    console.log("Strike!!!");
//                    $scope.frame[key+1] = null;
//                    console.log($scope.frame[key+1]);
//                    $scope.frameScore == 10;
//                } 
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
              //});
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
        
});




angular.module('app.controllers', ['firebase', 'ngIOS9UIWebViewPatch'])

.controller('ConnexionCtrl', function($scope, $state) {
    $scope.save = function(user){
      $scope.conversation = user;
      $state.go("chat", { "conversation": user.conversation, "user" : user.pseudo });
    }
})
.controller('ChatCtrl', function($scope, $stateParams, $firebaseArray, $state){
    $scope.conversation = $stateParams.conversation;
    $scope.user = $stateParams.user;
    //utiliser Firebase
    var ref = new Firebase("https://chatcode-5b633.firebaseio.com");
    var query = ref.orderByChild("conversation").startAt($scope.conversation).endAt($scope.conversation);
    $scope.messages = $firebaseArray(query);
    ref.on('child_added', function(snap) {
      var newMessage = snap.val();
      if (newMessage.user != $scope.user){
        var audio = new Audio('js/message.mp3');
        audio.play();
      };
    });
    $scope.add = function(add){
      $scope.messages.$add({
        "conversation": $scope.conversation,
        "date": new Date().getTime(),
        "user": $scope.user,
        "content": add.message
      });
      $scope.add.message = "";
    };
    $scope.logOut = function(){
      $state.go("connexion");
    };

  });
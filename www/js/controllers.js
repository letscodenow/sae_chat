angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, socket,$ionicPlatform) {



        socket.on('init', function (data) {
            $scope.name = data.name;
            $scope.users = data.users;
            console.log('sonnected');
        });

        socket.on('news', function(data){
            console.log(data)
            //socket.emit("lala");
        })

        socket.emit('chat', "aslkdlakds");

})

.controller('LoginCtrl', function($scope, $cordovaInAppBrowser) {
  //check if user is logged in, and if not go to login procedure

        /* var options = {
         location: 'yes',
         clearcache: 'yes',
         toolbar: 'no'
         };
         $ionicPlatform.ready(function() {

         $cordovaInAppBrowser.open('https://learn.sae.edu.rs/login/oauth2/auth?client_id=' + '2' + '&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob', '_blank', options)
         .then(function(event) {
         alert(event);
         })
         .catch(function(event) {
         // error
         alert(event);
         });

         $cordovaInAppBrowser.close();

         }, false);*/
});
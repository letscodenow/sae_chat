angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, socket, $cordovaInAppBrowser, $ionicPlatform) {

            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
        $ionicPlatform.ready(function() {
            alert('sa');
            $cordovaInAppBrowser.open('https://learn.sae.edu.rs/login/oauth2/auth?client_id=' + '2' + '&response_type=code&redirect_uri=urn:ietf:wg:oauth:2.0:oob', '_blank', options)
                .then(function(event) {
                    alert(event);
                })
                .catch(function(event) {
                    // error
                    alert(event);
                });


            //$cordovaInAppBrowser.close();

        }, false);

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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ChatroomCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, socket) {
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

'use strict';

app.factory('socket', function ($rootScope) {
    var socket = io.connect('http://saechat.app:8080/');
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                console.log(eventName);
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});
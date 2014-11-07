angular.module("myk.sockets", [])
	.service("Socket", function() {
		var currentConnections = {};

        return {
            register: function(url, handlers, fireOnOpenWhenJoiningExistingSession) {
                if (!currentConnections[url]) {
                    currentConnections[url] = {
                        socket: new WebSocket(url),
                        handlers: [handlers]
                    };
                } else {
                    currentConnections[url].handlers.push(handlers);
                    if (fireOnOpenWhenJoiningExistingSession && handlers.onopen && handlers.onopen.apply) {
                        handlers.onopen("joined existing socket session at " + url);
                    }
                }

                var socket = currentConnections[url].socket;

                socket.onopen = function(e) {
                    currentConnections[url].handlers.map(function(handler) {
                        if (handler.onopen && handler.onopen.apply) {
                            handler.onopen(e);
                        }
                    });
                }

                socket.onclose = function(e) {
                    currentConnections[url].handlers.map(function(handler) {
                        if (handler.onclose && handler.onclose.apply) {
                            handler.onclose(e);
                        }
                    });

                    delete currentConnections[url];
                }

                socket.onmessage = function(e) {
                    currentConnections[url].handlers.map(function(handler) {
                        if (handler.onmessage && handler.onmessage.apply) {
                            handler.onmessage(e);
                        }
                    });
                }

                return {
                    send: function(payload) {
                        socket.send(payload);
                    },
                    close: function() {
                        socket.close();
                    }
                }
            }	
		}
	});
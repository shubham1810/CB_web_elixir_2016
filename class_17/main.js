 var socket = io();
    $('form').submit(function(){
        // console.log("Emitting");
        socket.emit('chat message', $('#m').val());
        // console.log($('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function(msg) {
        // console.log("message received" + msg);
        $('#messages').append($('<li>').text(msg));
    });
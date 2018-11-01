var socket = io(); 
        
socket.on('connect', function () {
    console.log('Connected to Server.');

    socket.emit('createMessage', {
        form: 'ahmet@message.com',
        text: 'Hey, This is just message.'
    });

});

socket.on('newMessage', function (message){
    console.log('New Message: ', message);
});

socket.on('disconnect', function () {
    console.log('Disconnected from Server.');
});


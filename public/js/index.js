var socket = io(); 
        
socket.on('connect', function () {
    console.log('Connected to Server.');

    // socket.emit('createMessage', {
    //     form: 'ahmet@message.com',
    //     text: 'Hey, This is just message.'
    // });

});

socket.on('newMessage', function (message){
    console.log('New Message: ', message);
    var li= jQuery('<li></li>');
    li.text(`${message.from} : ${message.text}`);

    jQuery('#messages').append(li);
});

socket.on('disconnect', function (message) {
    console.log('Disconnected from Server.');   
});

socket.emit('createMessage', {
    from: 'Frank', 
    text: 'Hi'
}, function(data){
    console.log('Got it.', data);

});

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    },function () {

    });

})

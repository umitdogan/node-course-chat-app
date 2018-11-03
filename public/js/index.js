var socket = io(); 
        
socket.on('connect', function () {
    console.log('Connected to Server.');
    // socket.emit('createMessage', {
    //     form: 'ahmet@message.com',
    //     text: 'Hey, This is just message.'
    // });

});

socket.on('newMessage', function (message){
    formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });
    jQuery('#messages').append(html);
    
    //console.log('New Message: ', message);
    //var li= jQuery('<li></li>');
    //li.text(`${message.from} ${formattedTime}: ${message.text}`);
    //jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message){
    formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        createdAt: formattedTime
    });
    jQuery('#messages').append(html);

    //var li= jQuery('<li></li>');
    //var a = jQuery('<a target="_blank">My current location</a>');
    //li.text(`${message.from} ${formattedTime}: `);
    //a.attr('href', message.url);
    //li.append(a);

    jQuery('#messages').append(li);
});

var messageTextbox = jQuery('[name=message]');

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    },function () {
        messageTextbox.val('');
    });

});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser.');
    };

    locationButton.attr('disabled','disabled').text('Sending location...');
 
    navigator.geolocation.getCurrentPosition(function (position){
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })        
    }, function() {
        locationButton.removeAttr('disabled').text('Send location');
        alert ('Unable to fetch location.')
    });
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





var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = 'Ahmet';
        var text = 'some message';
        var message = generateMessage(from,text);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
    })

});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        var from = 'Ahmet';
        var latitude = 25;
        var longitude = 35;
        var url = 'https://www.google.com/maps?=25,35' 
        var message = generateLocationMessage(from,latitude,longitude);
      
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, url });
    })

});



var expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', ()=>{
    it('Should reject non-string value', ()=>{
        var text= 123;
        var validation = isRealString(text);
        expect(validation).toBe(false);
    });
    it('Should reject with only space', ()=>{
        var text= "    ";
        var validation = isRealString(text);
        expect(validation).toBe(false);

    });
    it('Should allow string with non-space characters', ()=>{
        var text= "String test message";
        var validation = isRealString(text);
        expect(validation).toBe(true);
    });
})
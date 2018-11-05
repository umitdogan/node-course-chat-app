const expect = require('expect');

const {Users} = require('./users');

describe('User', () => {
    var users;

    beforeEach(()=>{
        users = new Users;
        users.users = [{
            id: 1, 
            name: 'Ali', 
            room: 'Node Course'
        },{
            id: 2, 
            name: 'Veli', 
            room: 'Java Course'
        },{
            id: 3, 
            name: 'Can', 
            room: 'Node Course'
        }]
    });

    it('should add new user', ()=> {
        var users = new Users();

        var user = {
            id: 12345,
            name: 'Ahmet Yaşlı',
            room: 'The Bussiness Fun Room'
        };
        var resUser = users.addUser(user.id, user.name,user.room);

        expect(users.users).toEqual([user]);
    });

    it ('should remove a user', ()=>{
        var userId = 1;
        var user = users.removeUser(userId);
        console.log(user);
        console.log(user.id);
        
        expect(user.id).toBe(1);
        expect(users.users.length).toBe(2);


    });

    it ('should not remove a user', ()=>{

        var userId = 99;
        var user = users.removeUser(userId);
        console.log(user);
       // console.log(user.id);
        
        expect(user).toBe(undefined);
        expect(users.users.length).toBe(3);

    });

    it ('should find a user', ()=>{
        var user = users.getUser(1);
        expect(user).toEqual([{
            id: 1, 
            name: 'Ali', 
            room: 'Node Course'
        }]);

    });

    it ('should not find a user', ()=>{
        var user = users.getUser(123);
        expect(user).toNotExist;

    });



    it('should return names for Node Course', ()=>{
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Ali', 'Can']);

    });

    it('should return names for Java Course', ()=>{
        var userList = users.getUserList('Java Course');
        expect(userList).toEqual(['Veli']);
         
    });




});
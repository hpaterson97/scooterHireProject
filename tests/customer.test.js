const {Customer} = require('../scooterhiremain/customerClass');

describe('Customer Attribute Tests', ()=>{
    beforeAll(()=>{
        customer1 = new Customer('John', 20, 'town1');
        customer2 = new Customer('Jack', 17, 'town1')
    });
    test('should throw error if customer is created with no name', ()=>{
        expect(()=>new Customer()).toThrowError('Customer must have name');
    });
    test('should throw error if customer name is not a string', ()=>{
        expect(()=>new Customer(123)).toThrowError('Customer name must be a string');
    });
    test('should throw error if customer age not entered', ()=>{
        expect(()=>new Customer('John')).toThrowError('Customer must have age');
    });
    test('should throw error if customer age is not a number', ()=>{
        expect(()=>new Customer('John', '123')).toThrowError('Customer age must be a number');
    });
    test('should throw error if town is not entered', ()=>{
        expect(()=>new Customer('John', 1)).toThrowError('Town must be entered');
    });
    test('should throw error if town is not a string', ()=>{
        expect(()=>new Customer('John', 1, 3)).toThrowError('Town must be a string');
    });
    test('should give welcome message when someone over 18 registers', ()=>{
        expect(customer1.register()).toBe(console.log('Welcome to our scooter hire app, ' + customer1.name));
    });
    test('should give rejection message when someone under 18 registers', ()=>{
        expect(customer2.register()).toBe(console.log('Unable to register'));
    });
    test('should expect setTravelTime to give console message when trying to travel without scooter', ()=>{
        expect(customer1.setTravelTime()).toBe(console.log('No scooter to travel on'));
    });

    
    

});
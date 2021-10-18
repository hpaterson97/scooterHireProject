const {Customer} = require('../scooterhiremain/customerClass');

describe('Customer Attribute Tests', ()=>{
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
    test('should throw error if member status is set to anything but boolean', ()=>{
        expect(()=>new Customer('John', 1, 'town1').setMemberStatus(4)).toThrowError('Member must be boolean');
    });
    

});
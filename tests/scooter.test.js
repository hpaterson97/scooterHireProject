const {Scooter} = require('../scooterhiremain/scooterClass');

describe('Scooter Unit Test', ()=>{
    test('should throw error if scooter does not have ID', ()=>{
        expect(()=>new Scooter()).toThrowError('Scooter must have ID');
    });
    test('should throw error if scooter ID is not a number', ()=>{
        expect(()=>new Scooter('abc')).toThrowError('Scooter ID must be a number');
    });
    test('should throw error if status is not boolean when setRentedStatus is called', ()=>{
        expect(()=>new Scooter(1).setRentedStatus('abc')).toThrowError('Status must be boolean');
    });
    test('should throw error if status is not boolean when setChargedStatus is called', ()=>{
        expect(()=>new Scooter(1).setChargedStatus('abc')).toThrowError('Status must be boolean');
    });
    test('should throw error if status is not boolean when setBrokenStatus is called', ()=>{
        expect(()=>new Scooter(1).setBrokenStatus('abc')).toThrowError('Status must be boolean');
    });
});
const {Scooter} = require('../scooterhiremain/scooterClass');

describe('Scooter Unit Test', ()=>{
    beforeAll(()=>{
        scooter1 = new Scooter(1);
    });
    test('should throw error if scooter does not have ID', ()=>{
        expect(()=>new Scooter()).toThrowError('Scooter must have ID');
    });
    test('should throw error if scooter ID is not a number', ()=>{
        expect(()=>new Scooter('abc')).toThrowError('Scooter ID must be a number');
    });
    test('should expect that the scooter created is an instance of Scooter class', ()=>{
        expect(scooter1).toBeInstanceOf(Scooter);
    });
    test('should expect that the rented attribute is a boolean', ()=>{
        expect(typeof scooter1.rented).toBe('boolean');
    });
    test('should expect that the charged attribute is a boolean', ()=>{
        expect(typeof scooter1.charged).toBe('boolean');
    });
    test('should expect that the broken attribute is a boolean', ()=>{
        expect(typeof scooter1.broken).toBe('boolean');
    });

});
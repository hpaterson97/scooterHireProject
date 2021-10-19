const {ChargingStn} = require('../scooterhiremain/chargingstnClass');

describe('Charging Station Unit Test', ()=>{
    test('should throw error if station does not have town name', ()=>{
        expect(()=>new ChargingStn()).toThrowError('Charging Station must have town name');
    });
    test('should throw error if town name is not a string', ()=>{
        expect(()=>new ChargingStn(1)).toThrowError('Town name must be a string');
    });
});
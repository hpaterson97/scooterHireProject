const {ChargingStn} = require('../scooterhiremain/chargingstnClass');
const {Customer} = require('../scooterhiremain/customerClass');
const {Scooter} = require('../scooterhiremain/scooterClass');
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Charging Station Unit Test', ()=>{
    beforeAll(()=>{
        customer1 = new Customer('John', 25, 'town1');
        customer2 = new Customer('Sally', 19, 'town2');
        station1 = new ChargingStn('town1');
        scooter1 = new Scooter(1);
        
    });
    test('should throw error if station does not have town name', ()=>{
        expect(()=>new ChargingStn()).toThrowError('Charging Station must have town name');
    });
    test('should throw error if town name is not a string', ()=>{
        expect(()=>new ChargingStn(1)).toThrowError('Town name must be a string');
    });
    test('should expect station1 to have no available scooters when initialised', ()=>{
        expect(station1.avscooters).toHaveLength(0);
    });
    test('should expect rentOutScooter to print an error message when no scooters are in the avscooters array', ()=>{
        expect(station1.rentOutScooter(customer1)).toBe(console.log('No scooters available for ' + customer1.name + '. Please try again later.'));
    });
    test('should expect that customer can"t hire a scooter from a different town', ()=>{
        expect(station1.rentOutScooter(customer2)).toBe(console.log('Customer is not in ' + station1.town + "'s range. Please try a different station"));
    });
    test('should expect that returnScooter gives an error message/log when customer has no scooter', ()=>{
        expect(station1.returnScooter(customer1)).toBe(console.log('No scooter to return'));
    });
    test('should expect that chargeCustomer charges the customer 0 pounds if they have not travelled', ()=>{
        expect(station1.chargeCustomer(customer1)).toBe(console.log(customer1.name + ' has been charged ' + customer1.debt + ' pounds'));
    });
    test('waits 1 second before executing the chargeScooter code', ()=>{
        station1.avscooters.push(scooter1);
        station1.chargeScooter(scooter1);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    })
    test('waits 1 second before executing the reportBrokenScooter code', ()=>{
        station1.avscooters.push(scooter1);
        station1.rentOutScooter(customer1);
        station1.reportBrokenScooter(customer1);
        expect(setTimeout).toHaveBeenCalledTimes(3);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    })
});
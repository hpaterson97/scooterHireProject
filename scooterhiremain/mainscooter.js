const {Scooter} = require('./scooterClass');
const {ChargingStn} = require('./chargingstnClass');
const {Customer} = require('./customerClass');
const scooter1 = new Scooter(1);
const scooter2 = new Scooter(2);
const scooter3 = new Scooter(3);
const station1 = new ChargingStn('town1');
const station2 = new ChargingStn('town2');
const customer1 = new Customer('Sally', 25, 'town1');


console.log(scooter1);
console.log(station1);
console.log(customer1);
customer1.register();

station1.avscooters.push(scooter1, scooter2, scooter3);
//console.log(station1);
station1.rentOutScooter(customer1);

station1.reportBrokenScooter(customer1);

station1.returnScooter(customer1);
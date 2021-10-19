const {Scooter} = require('./scooterClass');
const {ChargingStn} = require('./chargingstnClass');
const {Customer} = require('./customerClass');
const scooter1 = new Scooter(1);
const station1 = new ChargingStn('town1');
const customer1 = new Customer('Sally', 19, 'town1');

console.log(scooter1);
console.log(station1);
console.log(customer1);
customer1.register();

station1.avscooters.push(scooter1);
console.log(station1);
station1.rentOutScooter(scooter1, customer1);

console.log(station1);
console.log(customer1);



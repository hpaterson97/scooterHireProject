const {Scooter} = require('./scooterClass');
const {Customer} = require('./customerClass')

class ChargingStn{
    static stations = []
    constructor(town) {
        this.town = town;
        this.avscooters = [];
        
        ChargingStn.stations.push(this);

        if(!this.town) {
            throw new Error('Charging Station must have town name');
        }
        if(typeof this.town !== 'string') {
            throw new Error('Town name must be a string');
        }
    }
    rentOutScooter(scooter, customer) {
        scooter.setRentedStatus(true);
        customer.addScooter(scooter);
        const sctindex = this.avscooters.indexOf(scooter);
        this.avscooters.splice(sctindex, 1);

    }
    fixScooter(scooter) {
        // add in function so after a certain amount of time, the scooter is added back to array
        console.log('scooter has been fixed');
        scooter.setBrokenStatus(false);
        this.avscooters.push(scooter);
    }


}

module.exports = {ChargingStn};
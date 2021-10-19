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
    rentOutScooter(customer) {
        if(this.town === customer.town) {
            const scooter = this.avscooters[Math.floor(Math.random() * (this.avscooters.length-1))];
            scooter.setRentedStatus(true);
            customer.addScooter(scooter);
            const sctindex = this.avscooters.indexOf(scooter);
            this.avscooters.splice(sctindex, 1);
        }
        else{
            console.log('Customer is not in ' + this.town + "'s range. Please try a different station");
        }
        

    }
    fixScooter(scooter, customer) {
        // add in function so after a certain amount of time, the scooter is added back to array
        setTimeout(()=>{
            console.log('scooter: ' + scooter.id + ' has been fixed at station: ' + this.town);
            scooter.setBrokenStatus(false);   
        }, 1000) //waits 1 second before executing code
        this.chargeScooter(scooter, customer);
        
    }
    chargeScooter(scooter, customer) {
        this.chargeCustomer(customer);
        setTimeout(()=>{
            scooter.setChargedStatus(true);
            this.avscooters.push(scooter);
            console.log('scooter: ' + scooter.id + ' has been charged at station: ' + this.town);
        }, 1000); //waits 1 second before executing code
    }

    chargeCustomer(customer) {
        const dist = customer.dist_travelled;
        customer.debt =+ dist * 2;
        console.log(customer.name + ' has been charged ' + customer.debt + ' pounds');
    }


}

module.exports = {ChargingStn};
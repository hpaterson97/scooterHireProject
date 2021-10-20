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
            scooter.rented = true;
            customer.scooter.push(scooter);
            const sctindex = this.avscooters.indexOf(scooter);
            this.avscooters.splice(sctindex, 1);
            console.log(customer.name + ' has hired scooter: ' + scooter.id);

        }
        else{
            console.log('Customer is not in ' + this.town + "'s range. Please try a different station");
        }
        

    }
    reportBrokenScooter(customer) {
        const sct = customer.scooter[0]
        customer.scooter.splice(0,1);
        // add in function so after a certain amount of time, the scooter is added back to array
        console.log(sct.id + ' has been reported as broken by ' + customer.name);
        
        setTimeout(()=>{
            console.log('scooter: ' + sct.id + ' has been fixed at station: ' + this.town);
            sct.broken = false;   
        }, 1000) //waits 1 second before executing code
        this.chargeScooter(sct, customer);
        this.rentOutScooter(customer);
        
    }
    chargeScooter(scooter, customer) {
        this.chargeCustomer(customer);
        setTimeout(()=>{
            scooter.charged = true;
            this.avscooters.push(scooter);
            console.log('scooter: ' + scooter.id + ' has been charged at station: ' + this.town);
        }, 1000); //waits 1 second before executing code
    }

    chargeCustomer(customer) {
        const dist = customer.dist_travelled;
        customer.debt =+ dist * 2;
        console.log(customer.name + ' has been charged ' + customer.debt + ' pounds');
    }
    returnScooter(customer) {
        if (customer.scooter.length > 0) {
            customer.setTravelTime();
            console.log('scooter: ' + customer.scooter[0].id + ' is in process of being returned to charging station: ' + this.town + ' and waiting to be charged');
            customer.scooter[0].rented = false;
            this.chargeScooter(customer.scooter[0], customer);
            customer.scooter.splice(0, 1);
        }
        else {
            console.log('No scooter to return');
        }
    }


}

module.exports = {ChargingStn};
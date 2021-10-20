const {Scooter} = require('./scooterClass');
const {Customer} = require('./customerClass')

class ChargingStn{

    constructor(town) {
        this.town = town;
        this.avscooters = [];
        

        if(!this.town) {
            throw new Error('Charging Station must have town name');
        }
        if(typeof this.town !== 'string') {
            throw new Error('Town name must be a string');
        }
    }
    rentOutScooter(customer) {
        if(this.town === customer.town) {
            if(this.avscooters.length > 0) {
                const scooter = this.avscooters[Math.floor(Math.random() * (this.avscooters.length-1))];
                scooter.rented = true;
                customer.scooter.push(scooter);
                const sctindex = this.avscooters.indexOf(scooter);
                this.avscooters.splice(sctindex, 1);
                console.log(customer.name + ' has hired scooter: ' + scooter.id);
            }
            else{
                console.log('No scooters available for ' + customer.name + '. Please try again later.');
            }
            

        }
        else{
            console.log('Customer is not in ' + this.town + "'s range. Please try a different station");
        }
    }
    reportBrokenScooter(customer) {
        const sct = customer.scooter[0]
        customer.scooter.splice(0,1);
        console.log(sct.id + ' has been reported as broken by ' + customer.name + '. scooter: ' + sct.id + ' is waiting to be fixed.');
        setTimeout(()=>{
            sct.broken = false; 
            console.log('scooter: ' + sct.id + ' has been fixed at station: ' + this.town);  
        }, 1000) //waits 1 second before executing code
        this.chargeScooter(sct);
        this.rentOutScooter(customer);
        
    }
    chargeScooter(scooter) {
        console.log('Scooter: ' + scooter.id + ' is being charged');
        setTimeout(()=>{
            scooter.charged = true;
            this.avscooters.push(scooter);
            console.log('scooter: ' + scooter.id + ' has been charged at station: ' + this.town);
        }, 1000); //waits 1 second before executing code
    }
    returnScooter(customer) {
        if (customer.scooter.length > 0) {
            customer.setTravelTime();
            console.log('scooter: ' + customer.scooter[0].id + ' has been returned to charging station: ' + this.town + ' and is waiting to be charged');
            customer.scooter[0].rented = false;
            this.chargeScooter(customer.scooter[0], customer);
            customer.scooter.splice(0, 1);
            this.chargeCustomer(customer);
        }
        else {
            console.log('No scooter to return');
        }
    }
    chargeCustomer(customer) {
        const dist = customer.dist_travelled;
        customer.debt =+ dist * 2;
        console.log(customer.name + ' has been charged ' + customer.debt + ' pounds');
    }


}

module.exports = {ChargingStn};
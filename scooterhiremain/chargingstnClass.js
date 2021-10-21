const {Scooter} = require('./scooterClass');
const {Customer} = require('./customerClass')

class ChargingStn{

    constructor(town) {
        this.town = town;
        this.avscooters = [];              //array of available scooters
        

        if(!this.town) {throw new Error('Charging Station must have town name');} //throws error if the station does not have a name
        
        if(typeof this.town !== 'string') {throw new Error('Town name must be a string');} //throws error if name is not a string
        
    }


    rentOutScooter(customer) {             //function that gives a scooter to specified customer
        if(this.avscooters.length === 0){throw new Error('No scooters available for ' + customer.name + '. Please try again later.');} 
        
        if(this.town !== customer.town){throw new Error('Customer is not in ' + this.town + "'s range. Please try a different station");} 
        
        if(customer.scooter.length > 1){ throw new Error('Customer can only hire one scooter at a time');}
                
        const scooter = this.avscooters[Math.floor(Math.random() * (this.avscooters.length-1))]; //picking a random scooter from the array of available scooters and assigning it to a variable
        scooter.rented = true; 

        const sctindex = this.avscooters.indexOf(scooter); //finds the index of the scooter that has been rented out in the station's array of available scooters
        this.avscooters.splice(sctindex, 1); //removes the scooter from the station's available scooter array
        customer.scooter.push(scooter);    //pushes this scooter into the customer's scooter array
        
        return(console.log(customer.name + ' has hired scooter: ' + scooter.id));  
    }


    reportBrokenScooter(customer) {        //function to report a broken scooter
        if(customer.scooter.length === 0){throw new Error('Customer is not renting any scooter currently');}

        const sct = customer.scooter[0]    //assigns customer's scooter to a variable (customer can only have 1 scooter so scooter in use will always have an index of 0 in the array)
        sct.broken = true;                 //sets the scooter to 'broken'
        customer.scooter.splice(0,1);      //removes the scooter from the customer
        console.log(sct.id + ' has been reported as broken by ' + customer.name + '. scooter ' + sct.id + ' is waiting to be fixed.');

        setTimeout(()=>{                   //simulating the time it takes to fix the scooter
            sct.broken = false; 
            console.log('scooter ' + sct.id + ' has been fixed at station: ' + this.town);
            this.chargeScooter(sct);       //chargescooter function is then called to charge specified scooter  
        }, 1000)                           //waits 1 second before executing code/'fixing scooter'

        this.avscooters.push(sct);         //adds scooter to station's available scooters array
        this.rentOutScooter(customer);     //another scooter is given to customer with no added costs (customer is only charged after having returned a working scooter)
    }

/*
    chargeScooter(scooter) {               //function to charge scooter
        console.log('Scooter ' + scooter.id + ' is being charged');
        setTimeout(()=>{                   //simulates time it takes to charge scooter
            scooter.charged = true;          
            console.log('scooter ' + scooter.id + ' has been charged at station: ' + this.town);
        }, 1000);                          //waits 1 second before executing code
    }*/
    async chargeScooter(scooter) {
        console.log('Scooter ' + scooter.id + ' is being charged');
        return new Promise(resolve => {
            setTimeout(()=>{
                scooter.charged = true; 
                resolve(console.log('scooter ' + scooter.id + ' has been charged at station: ' + this.town))
                ;}, 1000)
            });}


    async returnScooter(customer) {              //function to return scooter back to station
        if (customer.scooter.length < 1){throw new Error('No scooter to return');} //checks that the customer has a scooter
        customer.setDistance();            //calculates the distance since hiring scooter
        console.log('scooter ' + customer.scooter[0].id + ' has been returned to charging station: ' + this.town + ' and is waiting to be charged');

        customer.scooter[0].rented = false; 
        await this.chargeScooter(customer.scooter[0]);
        this.avscooters.push(customer.scooter[0]); //adds scooter to station's available scooters array
        console.log('scooter has been added back to ' + this.town);
        customer.scooter.splice(0, 1);     //removes scooter from customer
        this.chargeCustomer(customer);     //charges customer based on distance travelled
        
        
        
    }


    chargeCustomer(customer) {             //function to charge customer
        const dist = customer.dist_travelled;
        customer.debt =+ dist * 2;         //calculates the fee as twice the distance travelled (arbitrarily)
        return(console.log(customer.name + ' has been charged ' + customer.debt + ' pounds'));
    }


}

module.exports = {ChargingStn};
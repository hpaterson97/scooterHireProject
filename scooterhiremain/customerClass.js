const {Scooter} = require('./scooterClass');

class Customer{
    static customers =[];
    constructor(name, age, town) {
        this.name = name;
        this.age = age;
        this.town = town;
        this.member = false;
        this.dist_travelled = 0;
        this.usingscooter = [];
        

        if(!this.name) {
            throw new Error('Customer must have name');
        }
        if(typeof this.name !== 'string') {
            throw new Error('Customer name must be a string');

        }
        if(!this.age) {
            throw new Error('Customer must have age');
        }
        if(typeof this.age !== 'number') {
            throw new Error('Customer age must be a number');
        }
        if(!this.town) {
            throw new Error('Town must be entered');
        }

        if(typeof this.town !== 'string') {
            throw new Error('Town must be a string');
        }

        if(typeof this.dist_travelled !== 'number') {
            throw new Error('dist_travelled must be a number');
        }
        
    }
    setMemberStatus(status) {
        if (typeof status === 'boolean') {
            this.member = status;
        }
        else{
            throw new Error('Member must be boolean');
        }
        
    }
    checkOver18() {
        if (this.age >= 18) {
            return true;

        }
    }

    register() {
        if (this.checkOver18() == true) {
            Customer.customers.push(this);
            this.setMemberStatus(true);
            console.log('Welcome to our scooter hire app, ' + this.name);
        }
        else {
            console.log('Unable to register');
        }
    }
    addScooter(scooter) {
        if(this.member === true){
            if(scooter instanceof Scooter) {
                if(this.usingscooter.length === 0) {
                    this.usingscooter.push(scooter);
                }
                else{
                    console.log('You can only hire one scooter at a time');
                }
            }
            else{
                console.log('You can only hire scooters');
            }
        }
        else{
            console.log('Only members can hire a scooter');
        }
        
        
        
    }
    reportBroken() {
        if (this.usingscooter.length > 0) {
            this.usingscooter[0].setBrokenStatus(true);
            this.usingscooter.splice(0, 1);
        }
        else{
            console.log('No scooter in use to report');
        }

    }
}




module.exports = {Customer};
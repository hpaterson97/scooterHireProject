class Customer{
    static customers =[];
    constructor(name, age, town) {
        this.name = name;
        this.age = age;
        this.town = town;
        this.member = false;
        this.dist_travelled = 0;
        

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
            return this.member = status;
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
            console.log('Welcome to our scooter hire app');
        }
        else {
            console.log('Unable to register');
        }
    }
}

const john = new Customer('John', 18, 'town1');
john.register();





module.exports = {Customer};
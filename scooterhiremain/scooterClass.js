class Scooter{
    constructor(id) {
        this.id = id;
        this.rented = false; //always set to false initially
        this.charged = true; //scooters are fully charged when created
        this.broken = false; //set to false initially

        if(!this.id) {
            throw new Error('Scooter must have ID');
        }
        if(typeof this.id !== 'number') {
            throw new Error('Scooter ID must be a number');
        }
    }

}
module.exports = {Scooter};













/*
    setRentedStatus(status) {
        if(typeof status === 'boolean') {
            this.rented = status;
        }
        else {
            throw new Error('Status must be boolean');
        }
    }
    setChargedStatus(status) {
        if(typeof status === 'boolean') {
            this.charged = status;
        }
        else{
            throw new Error('Status must be boolean');
        }
    }
    setBrokenStatus(status) {
        if(typeof status === 'boolean') {
            this.broken = status;
        }
        else{
            throw new Error('Status must be boolean');
        }
    }
*/




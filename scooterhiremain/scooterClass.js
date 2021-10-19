class Scooter{
    constructor(id) {
        this.id = id;
        this.rented = false;
        this.charged = true;
        this.broken = false;

        if(!this.id) {
            throw new Error('Scooter must have ID');
        }
        if(typeof this.id !== 'number') {
            throw new Error('Scooter ID must be a number');
        }
    }
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
}

module.exports = {Scooter};
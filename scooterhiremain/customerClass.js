class Customer{
    constructor(name, age) {
        this.name = name;
        this.age = age;

        if(!this.name) {
            throw new Error('Customer must have name');
        }
        if(typeof this.name !== 'string') {
            throw new Error('Customer name must be a string');

        }
        if(!this.age) {
            throw new Error('Customer must have age');
        }
    }

}

module.exports = {Customer};
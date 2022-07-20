const Employee = require("./Employee");

class Engineer extends Employee{
    constructor( name, id, email, GitHub){
        super(name, id, email);
        this.GitHub= GitHub;
    }
    }


    
module.exports = Engineer;
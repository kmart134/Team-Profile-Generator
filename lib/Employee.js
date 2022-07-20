class Employee {
  constructor(name, id, email){
  this.name = name;
  this.id = id;
  this.email = email;
  }
  printInfo() {
    console.log(`name: ${this.name}`);
    console.log(`id: ${this.id}`);
    console.log(`email: ${this.email}`);
  }
   
    // each method for getting the information you'll be taking in for this employee
  
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return "Employee";
  }
 
}

  module.exports = Employee;
  
  // reference activities 21 - 26
  
// require all of your classes/constructors, (Manager, Engineer, Intern)// require all of your classes/constructors, (Manager, Engineer, Intern)
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// require packages needed (inquirer, path, fs)
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHTML  = require('./src/generateHTML');
// set up an empty array for the Team Members
const teamMembers = [];


//initializing function
function init() {
  //create manager
  function createManager() {
    inquirer.prompt([
           {type:"input", 
            message:"What is the manager's name?",
            name:"name"},
            {type:"input", 
            message:"What is the employee's ID?",
            name:"id"},
            {type:"input", 
            message:"What is the employee's email?",
            name:"email"},
            {type:"input", 
            message:"What is the employee's office number",
            name:"office"},
     ])
  
      // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      console.log(answers);
      teamMembers.push(manager);

      createTeam();
    })
  }
  
   
    function createTeam() {
      inquirer.prompt([
       {
        type:"list",
        name:"memberChoice",
        message:"Would you like to add more members to your team?",
        choices: [
          "Engineer",
          "Intern",
          "None"],
        } 
        ])

      .then((choice) => {
        switch(choice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      // conditional that runs function for employee type that the user selected
      // if they choose Intern, run addIntern function
      // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
      }
      )}
   

    function addEngineer() {
      inquirer.prompt([
        {type:"input", 
        message:"What is the employee's name?",
        name:"name"},
        {type:"input", 
        message:"What is the employee's ID?",
        name:"id"},
        {type:"input", 
        message:"What is the employee's email?",
        name:"email"},
        {type:"input", 
        message:"What is the employee's GitHub",
        name:"gitHub"},
      ])

   .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
      console.log(answers);
      teamMembers.push(engineer);

      createTeam();
    })
    }


    function addIntern() {
      inquirer.prompt([
        {type:"input", 
        message:"What is the employee's name?",
        name:"name"},
        {type:"input", 
        message:"What is the employee's ID?",
        name:"id"},
        {type:"input", 
        message:"What is the employee's email?",
        name:"email"},
        {type:"input", 
        message:"What is the employee's school",
        name:"school"},
    ])

   .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      console.log(answers);
      teamMembers.push(intern);

      createTeam();
    })
  }
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
      if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, generateHTML(teamMembers),"utf-8");
      // creating the file, adding your team to it
      // probably call a function, passing in your team members array - send it to another js file 
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
  createManager();
  }

  init();
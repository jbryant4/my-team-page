const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// prompt user with intro question team name and team color 
// that data will be save for page style 

//prompt user for manager questions 
// make manager card 

//set up loop for Engineer and Intern questions 
//make approprite cards


// back tick html page with all scrpits and links for style attached 
//back tick css page 

//write those files out 







//example of how to send answers to functions and make 

function buildPage() {

    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is you Employees name?',
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your Employee id?',
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your employee email?',
        }]).then(answers => {
            const {name,id,email} = answers;
            const employee = new Employee(name,id,email);

            printIt(employee);
        })
}



buildPage()
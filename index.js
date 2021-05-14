const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

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


function printIt(employee) {

    console.log(employee)
}

buildPage()
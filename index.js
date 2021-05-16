//npms
const inquirer = require("inquirer");
const fs = require('fs');
//classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//generate functions
const html = require('./src/generateHtml.js');
const css = require('./src/generateCss.js');
const javascript = require('./src/generateJava');

//globals

// prompt user with intro question team name and team color 
// that data will be save for page style 

//prompt user for manager questions 
// make manager card 

//set up loop for Engineer and Intern questions 
//make approprite cards


// back tick html page with all scrpits and links for style attached 
//back tick css page 

//write those files out 
function getTeamInfo() {
    console.log(`
    =================
    Team Page Builder
    =================
    
    
    `);

    inquirer
        .prompt([{
            type: 'text',
            name: 'teamName',
            message: 'What is your team name?',
            default: 'Team',
        },
        {
            type: 'list',
            name: 'teamColor',
            message: 'What is your team color?',
            choices: ['Red', 'Blue', 'Green', 'Orange', 'Grey', 'Samlmon'],
        }]).then(answers => {

            //generate html and css 
            const getHtml = html.generateHtml(answers.teamName);
            const getCss = css.generateCss(answers.teamColor);
            //write html file and css file

            writeHtml(getHtml);
            writeCss(getCss);

        });

    getTeam()
}

function getTeam() {
    const teamInfo = [];

    console.log(`
    
    
    ========================
    Please fill in team info
    ========================

    
    `);

    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the employee's id?",
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?",
        },
        {
            type: 'list',
            name: 'teamMember',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        }
        ]).then(answers => {

            if (answers.teamMember === 'Manager') {
                answers.officeNumber = inquirer
                    .prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: "What is the Manager's office number?",
                    }).then(answers => {
                        const officeNumber = answers.officeNumber
                        return officeNumber;
                    });

                const { name, id, email, officeNumber } = answers;
                const manager = new Manager(name,id,email,officeNumber)

                teamInfo.push(manager);
            } else if (answers.teamMember === 'Engineer') {
                answers.githubId = inquirer
                    .prompt({
                        type: 'text',
                        name: 'githubId',
                        message: "What is the Engineer's Github Id?",
                    }).then(answers => {
                        const githubId = answers.githubId
                        return githubId;
                    });

                const { name, id, email, githubId } = answers;
                const engineer = new Engineer(name,id,email,githubId)

                teamInfo.push(engineer);
            } else if (answers.teamMember === 'Intern') {
                answers.school = inquirer
                    .prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: "What school did the Intern attend?",
                    }).then(answers => {
                        const school = answers.school
                        return school;
                    });

                const { name, id, email, school } = answers;
                const intern = new Intern(name,id,email,school)

                teamInfo.push(intern);
            }

            const getJava = javascript.generateJava(answers);
            writeScript(getJava)

        });
}

function writeHtml(data) { fs.writeFile('./dist/index.html', data, err => { if (err) throw err; }); }
function writeCss(data) { fs.writeFile('./dist/style.css', data, err => { if (err) throw err; }); }
function writeScript(data) { fs.writeFile('./dist/script.js', data, err => { if (err) throw err; }); }




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
            const { name, id, email } = answers;
            const employee = new Employee(name, id, email);

            printIt(employee);
        })
}


getTeam();

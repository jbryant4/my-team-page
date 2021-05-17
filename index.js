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
const teamInfo = [];
// questions order in array [name,id,email,office number,githubId,school]
const questions = [{
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
    type: 'text',
    name: 'officeNumber',
    message: "What is the Manager's office number?",
},
{
    type: 'text',
    name: 'githubId',
    message: "What is the Engineer's Github Id?",
},
{
    type: 'text',
    name: 'school',
    message: "What school did the Intern attend?",
}];
// prompt user with intro question team name and team color 
// that data will be save for page style 

//prompt user for manager questions 
// make manager card 

//set up loop for Engineer and Intern questions 
//make approprite cards


// back tick html page with all scrpits and links for style attached 
//back tick css page 

//! Grap html and css input
function getPageInfo() {
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

    getManager()
}

//! Get manager Info
function getManager() {
    const managerQ = questions.slice()

    console.log(`
    
    
    ===========================
    Please fill in manager info
    ===========================

    
    `);
    inquirer
        .prompt(managerQ.splice(0, 4)).then(answers => {

            const { name, id, email, officeNumber } = answers;
            const manager = new Manager(name, id, email, officeNumber)
            // const manager = answers
            manager.memberType = 'manager'
            teamInfo.push(manager);

            buildTeam();
        });

}

//! Choose to add Member or Build page
function buildTeam() {
    console.log(`
========
add team
========
`)

    inquirer
        .prompt({
            type: 'list',
            name: 'teamMember',
            message: 'What type of team member are we adding?',
            choices: ['Engineer', 'Intern', 'No more members'],
        }).then(answers => {
            if (answers.teamMember === 'Engineer') {
                getEngineer();
            } else if (answers.teamMember === 'Intern') {
                getIntern()
            } else {
                const data = teamInfo
                buildPage(data)
            }
        })

};

function getEngineer() {

    const engineerQ = questions.slice(0, 3)
    engineerQ.push(questions[4])

    inquirer
        .prompt(engineerQ).then(answers => {

            const { name, id, email, githubId } = answers;
            const engineer = new Engineer(name, id, email, githubId)
            // const engineer = answers
            engineer.memberType = 'engineer';
            teamInfo.push(engineer);

            buildTeam();
        });
};

function getIntern(data) {

    const internQ = questions.slice(0, 3)
    internQ.push(questions[5])

    inquirer
        .prompt(internQ).then(answers => {

            const { name, id, email, school } = answers;
            const intern = new Intern(name, id, email, school)
            // const intern = answers
            intern.memberType = 'intern';
            teamInfo.push(intern);

            buildTeam();
        });
};

function buildPage(data) {
    // generate script plag
    const getJava = javascript.generateJava(JSON.stringify(data));

    writeScript(getJava)
    
};

function writeHtml(data) { fs.writeFile('./dist/index.html', data, err => { if (err) throw err; }); }
function writeCss(data) { fs.writeFile('./dist/style.css', data, err => { if (err) throw err; }); }
function writeScript(data) { fs.writeFile('./dist/script.js', data, err => { if (err) throw err; }); }







getManager();



const inquirer = require('inquirer')
const template = require('./src/template')
const writeFile = require('./src/write-file')
const { Manager, managerArr } = require('./lib/Manager')
const { Intern, internArr } = require('./lib/Intern')
const { Engineer, engineerArr } = require('./lib/Engineer')
const employeeArr = []

const init = () => { managerQuestions() }
// prompts manager questions then creates object from user inputs based on Manager class 
const managerQuestions = () => {
    inquirer.prompt(managerArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.number)
        employeeArr.push(answers);
        return employeePrompt();
    })
}
// prompts engineer questions then creates object from user inputs based on Engineer class 
const engineerQuestions = () => {
    inquirer.prompt(engineerArr)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(answers);
        return employeePrompt();
    })
}
// prompts intern questions then creates object from user inputs based on Intern class 
const internQuestions = () => {
    inquirer.prompt(internArr)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArr.push(answers);
        return employeePrompt();
    })
}
// handles prompts
const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        // sends correct prompts based on the employee type
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            // converts users inputs into HTML
            let html = template(employeeArr)
            console.log('...');
            // creates HTML file
            writeFile(html);
        }
    })
}

init();
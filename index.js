const inquirer = require('inquirer')
const template = require('./src/template')
const writeFile = require('./src/write-file')
const employeeArr = []
const { Manager, managerArr } = require('./lib/Manager')
const { Intern, internArr } = require('./lib/Intern')
const { Engineer, engineerArr } = require('./lib/Engineer')
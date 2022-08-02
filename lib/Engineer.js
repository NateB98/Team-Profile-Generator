const employee = require('./Employee')

const engineerArr = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineers name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'what is your engineers employee Id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your engineers email?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'what is your engineers Github username?'
  }
]

class Engineer extends employee{
  constructor(name, id, email, github) {
    super(name, id, email);
  this.github = github;
  }

  Role() {
    return 'Engineer'
  }

  getNumber() {
    return this.github
  }
}

module.exports = { Engineer, engineerArr };
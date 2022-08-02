const employee = require('./Employee')

const managerArr = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the managers name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'what is your managers employee Id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your managers email?'
  },
  {
    type: 'input',
    name: 'number',
    message: 'what is your managers office number?'
  }
]

class Manager extends employee{
  constructor(name, id, email, number) {
    super(name, id, email);
  this.number = number;
  }

  Role() {
    return 'Manager'
  }

  getNumber() {
    return this.number
  }
}

module.exports = { Manager, managerArr };
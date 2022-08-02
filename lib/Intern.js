const employee = require('./Employee')

const internArr = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the interns name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the interns Id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the interns Email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school is the intern from?'
  }
]

class Intern extends employee{
  constructor(name, id, email, school) {
    super(name, id, email);
  this.school = school;
  }

  Role() {
    return 'Intern'
  }

  getSchool() {
    return this.school
  }
}

module.exports = { Intern, internArr };
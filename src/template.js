
// Manager card
const manager = ((managerData) => {
  return `
  <div id="${managerData.Role()}-card" class="card" style="width: 20%">
    <div class="card-header name-role manager-name">
      <h2>${managerData.getName()}</h2>
      <h3>Role: ${managerData.Role()}</h3>
    </div> 
    <div class="card-body employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.getNumber()}</li>
      </ul>
    </div>
  </div>
`
});
// Engineer card
const engineer = ((engineerData) => {
  return `
  <div id="${engineerData.Role()}-card" class="card" style="width: 20%">
    <div class="card-header name-role engineer-name">
      <h2>${engineerData.getName()}</h2>
      <h3>Role: ${engineerData.Role()}</h3>
    </div> 
    <div class="card-body employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineerData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
        </li>
      </ul>
    </div>
  </div>
`
});
// Intern card
const intern = ((internData) => {
  return `
  <div id="${internData.Role()}-card" class="card" style="width: 20%">
    <div class="card-header name-role intern-name">
      <h2>${internData.getName()}</h2>
      <h3>Role: ${internData.Role()}</h3>
    </div> 
    <div class="card-body employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
        <li class="list-group-item">School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
`
});
// cycles through each answer array and generates a card for each memeber
const employeesDiv = ((employeeArr) => {
  let employeeHtml = ''

  for (i = 0; i < employeeArr.length; i++) {
    if (employeeArr[i].Role() === "Manager") {
      employeeHtml = employeeHtml + manager(employeeArr[i])
    }
    if (employeeArr[i].Role() === "Engineer") {
      employeeHtml = employeeHtml + engineer(employeeArr[i])
    }
    if (employeeArr[i].Role() === "Intern") {
      employeeHtml = employeeHtml + intern(employeeArr[i])
    }
  } return employeeHtml
});

// html page template
const template = ((data) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
    </head>
    <body>
      <header class = "container">
        <div class = "flex box justify-center my-team">
          <h1>My Team</h1>
        </div>
      </header>
      <main class="container container-fluid">
        <div class=row>
          ${employeesDiv(data)}
        </div>
      </main>
    </body>
  </html>
`
});

module.exports = template
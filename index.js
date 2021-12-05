const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

var employeeArr = [];

// gather information on the manager 
function managerInfo() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the Manager's name (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a valid name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'ID',
        message: "Please enter the Manager's ID (Required)",
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log('Please enter a valid ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the Manager's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter a valid email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number (Required)",
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter a valid office number!');
            return false;
          }
        }
      }
    ])

    // process manager's information
    .then(managerInput => {
      const manager = new Manager(managerInput.name, managerInput.ID, managerInput.email, managerInput.officeNumber)

      employeeArr.push(manager);
      // console.log(employeeArr);

      createTeamMember();

      // return;
    }
    )
}

// gather and process information for an intern
const internInfo = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the Intern's name (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a valid name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the Intern's ID (Required)",
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log('Please enter a valid ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the Intern's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter a valid email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "Please enter the Intern's school (Required)",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log('Please enter a valid school!');
            return false;
          }
        }
      },
    ])

    .then(internInput => {
      const { name, id, email, school } = internInput;
      const intern = new Intern(internInput.name, internInput.id, internInput.email, internInput.school)

      employeeArr.push(intern);
      // console.log(employeeArr);

      createTeamMember();

      return;

    }
    )
}

// gather and process information for engineers
function engineerInfo() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Please enter the Engineer's name (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a valid name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the Engineers's ID (Required)",
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log('Please enter a valid ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter the Engineers's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter a valid email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineer's gitHub (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter a valid GitHub account!');
            return false;
          }
        }
      }
    
    ])

    .then(engineerInput => {
      const { name, id, email, github } = engineerInput;
      const engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github)

      employeeArr.push(engineer);
      // console.log(employeeArr);

      createTeamMember();

      return;
    }
    )
}


// function to write all of the html to make the page writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// the loop to rerun the prompts until all employees are entered
const createTeamMember = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'anotherEmp',
        message: "Would you like to add another employee?",
        choices: ['engineer', 'intern', 'none']
      }])
      .then(newMember => {
        switch (newMember.anotherEmp) {
          case 'intern': internInfo();
            break;
          case 'engineer': engineerInfo();
            break;
          case 'none':
            var htmlString = generatePage(employeeArr)
            // console.log(htmlString) //let's start with this!
              writeFile(htmlString);
            break;
        }
        
      }
       )

 }
      
// start with obtaining the info on the manager
managerInfo();



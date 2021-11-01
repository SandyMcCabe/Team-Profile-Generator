const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');

var employeeArr = [];
// var position = 'manager';



const managerInfo = () => {
  return inquirer
    .prompt([
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

    .then(managerInput => {
      const { name, ID, email, officeNumber } = managerInput;
      const manager = new Manager(name, ID, email, officeNumber)

      // position = managerInput.anotherEmp
      // console.log(position);

      employeeArr.push(manager);
      console.log(employeeArr);

      createTeamMember();

      return;
    }
    )
}


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
      const { name, ID, email, school } = internInput;
      const intern = new Intern(name, ID, email, school)

      employeeArr.push(intern);
      console.log(employeeArr);

      createTeamMember();

      return;

    }
    )
}



const engineerInfo = () => {
  return inquirer
    .prompt([
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
      const { name, ID, email, github } = engineerInput;
      const engineer = new Engineer(name, ID, email, github)

      employeeArr.push(engineer);
      console.log(employeeArr);

      createTeamMember();

      return;
    }
    )
}

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
        case 'none': return;
      }
    })


}
managerInfo();





  //function to write all of the html to make the page
  // writing files
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/index.html', fileContent, err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: 'File created!'
//       });
//     });
//   });
// };



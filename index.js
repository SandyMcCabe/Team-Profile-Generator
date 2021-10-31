const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const inquirer = require('inquirer');

var employeeArr = [];
var position = 'manager';



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
      }}
    },
    {
  type: 'input',
  name: 'id',
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
  },
    {
      type: 'list',
      name: 'anotherEmp',
      message: "Would you like to add another employee?",
     choices: ['engineer', 'intern', 'none'] 
       },

])

    .then(managerInput => {
      const { name, ID, email, officeNumber } = managerInput;
      const manager = new Manager(name, ID, email, officeNumber)
      
      position = managerInput.anotherEmp
      console.log(position);

      employeeArr.push(manager);
      console.log(employeeArr);

      return;
    }
    )}

    
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
          }}
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
        {
          type: 'list',
          name: 'anotherEmp',
          message: "Would you like to add another employee?",
         choices: ['engineer', 'intern', 'none'] 
           },
    
    ])
    
        .then(internInput => {
          const { name, ID, email, school } = internInput;
          const intern = new Intern(name, ID, email, school)
          
          position = internInput.anotherEmp
          console.log(position);
    
          employeeArr.push(intern);
          console.log(employeeArr);
    
          return;
        }
        )}


            
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
      }}
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
  },
    {
      type: 'list',
      name: 'anotherEmp',
      message: "Would you like to add another employee?",
     choices: ['engineer', 'intern', 'none'] 
       },

])

    .then(engineerInput => {
      const { name, ID, email, github } = engineerInput;
      const engineer = new engineer(name, ID, email, gethub)
      
      position = engineerInput.anotherEmp
      console.log(position);

      employeeArr.push(engineer);
      console.log(employeeArr);

      return;
    }
    )}

    const buildTeam = () => {
      managerInfo();

      switch (position) {
        case 'intern': internInfo();
        case 'engineer': engineerInfo();
        
      }
      

      //this caused my computer to run like mad
      // (position != 'none') {
      //   if (position === 'intern') {
      //     internInfo();
      //   }else {}

        
      // }
    }

      buildTeam();

// .then(function(answers){
//   // employeeArr.push(answers);
//   // console.log(answers);

//   employeeArr.push(answers);
//   console.log(answers);

//     if (answers.another === 'intern' || answers.another === 'engineer' ){
    
//       userInfo(answers.another);




    // //loop back to first prompt again
    // return prompt('question 1 data');
//   }else{
//     employeeArr.push(answers);
//     console.log(answers);

//   }
// } )







// userInfo()
// .then(employeeData => {
//   employeeArr.push(employeeData);
//   console.log(employeeArr);
// });



// {
  //         type: 'confirm',
  //         name: 'confirmAddProject',
  //         message: 'Would you like to enter another project?',
  //         default: false
  //       }
  //     ])
  //     .then(projectData => {
  //       portfolioData.projects.push(projectData);
  //       if (projectData.confirmAddProject) {
  //         return promptProject(portfolioData);
  //       } else {
  //         return portfolioData;
  //       }









//       function to add employee (type)

//       team manager's name
//       team managers ID Number
//       team manager's email

//       if (type === manager)
//       team manager's office number
//       else if (type === intern)
//       intern's school
//       else if (type --- engineer)
//       github page

//       push to Array
//       return


//       would you like to add (list) = intern/engineer/none

//       function to add employee...
//       or contine to write webpage



//       

// const promptProject = portfolioData => {
//   console.log(`
// =================
// Add a New Project
// =================
// `);

//   // If there's no 'projects' array property, create one
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project name!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project description!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//      
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ])


//     .then(projectData => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };



// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });





  // questions to prompt for input

  // promise to deal with answers

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


// {
//   type: 'list',
//   name: 'another',
//   message: 'Would you like to add another employee',
//   choices: ['intern', 'engineer', 'none']
//   }
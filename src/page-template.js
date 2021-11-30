const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer'); 
 
 
 const generateManager = templateData => {
    return `    
    ${templateData
        // .filter(({ templateData.getRole() }) => 'Manager')
        .filter(({ Manager}) => Manager)
        .map(({ name, id, email, officeNumber }) => {
            return `
        <div class= "card">
        <div class="card-head"> 
            <div><h3><b>${name}</b></h3> </div>
            <div><h4>Manger</h4> </div>
        </div>
        <div class="card-body">
          <h4>ID: ${id}</h4>
          <h4>Email: ${email}</h4>
          <h4>OfficeNumber: ${officeNumber}</h4>
        </div>
    </div>
    `;
})
.join('')}
     
    `;
  };
  


  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;
    const {Manger, Engineer, Intern} = templateData
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    
    <body>
    <header>
        <h1>Team Profile</h1>
    </header>
     
    ${generateManager(templateData)}
  
    </body>
    </html>
    `;
  };
  
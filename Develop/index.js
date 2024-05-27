// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Console } = require("console");

//  array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is the projects name?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Can you describe the project?',
  },
  {
    type: 'input',
    name: 'siteURL',
    message: 'Please Provide a link to the deployed webpage?',
  },
  {
    type: 'input',
    name: 'siteImage',
    message: 'Please Provide a file path for an image depicting the website?',
  },
  {
    type: 'input',
    name: 'wireframe',
    message: 'Please provide a file path for an image depicting the wireframe',
  },];

//  function to write README file
function createReadme({name, description, siteURL, siteImage, wireframe}) {
    return `# ${name}

${description} 



## Table of Contents

- [Features](#features)
- [Link-to-Webpage](#Link-to-Webpage)
- [Appearance](#Appearance)
- [About-Developer](#About-developer)
- [Wireframe](#Wireframe)


## About-developer

Hi my name is Molaligne (Mola) Dafa. I am currently taking part in a coding boot camp and this is my Second project. 
In it, I have attempted to demonstrate my skills in CSS and HTML.

## Features

- Function nav bar.
- semantic HTML design.
- Accessible design features
- 

## Link-to-Webpage
- ${siteURL}

## Appearance

The following image demonstrates the webpage's appearance
![Screenshot of webpage](${siteImage})

## Wireframe
The following image displays a wireframe of my design
![Wireframe of website](${wireframe})`;   
}



//  function to initialize app
function init() {
    inquirer.prompt(questions)
.then((answers) => {
            const readMeContent = createReadme(answers);
            fs.writeFile(`README.md`, readMeContent, (err)=>{
            err ? console.log(err) : console.log("Successfull written to file")});    
});
}

// Function call to initialize app
init();

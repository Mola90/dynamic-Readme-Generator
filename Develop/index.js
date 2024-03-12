// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

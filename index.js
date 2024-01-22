// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a short description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide information on your projects usage:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines on contributing for this project:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide testing instructions for this project:',
        name: 'testing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project:',
        choices: ['MIT', 'Apache', 'ISC', 'BSD'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const readmeContent = generateMarkdown(answers);
            fs.writeFile('myREADME.md', readmeContent, err => {
                if (err) {
                  console.error(err);
                } else {
                  console.log('README file created successfully!');
                }
              });
            })
            .catch(error => {
              console.error(error);
            });
};

// Function call to initialize app
init();

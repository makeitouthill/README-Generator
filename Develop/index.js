// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Question 1",
        message: "Question 1 Answer",
    },
    {
        type: "input",
        name: "Question 2",
        message: "Question 2 Answer",
    },
    {
        type: "input",
        name: "Question 3",
        message: "Question 3 Answer",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("App is running");
    inquirer.prompt(questions).then(input => {
        console.log(input);
    });
}

// Function call to initialize app
init();

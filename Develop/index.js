// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description for your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide your installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide your usage instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["None","GNU General Public License v3.0" ,"MIT License" ,"BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0" ,
            "GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense",]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide your contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide tests intructions for the project:",
    },
    {
        type: "input",
        name: "githubName",
        message: "Provide your Github username:",
    },
    {
        type: "input",
        name: "reachMe",
        message: "Provide a email to be reached for questions:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.promises.writeFile(fileName, data)
        .then(()=> {
            console.log(`Wrote ${fileName}`);
        })
        .catch(err =>{
            console.error(err)
        });
}

// TODO: Create a function to initialize app
function init() {
    console.log("App is running");
    inquirer.prompt(questions).then(input => {
        console.log(input);
        const README = `
# ${input.projectTitle}

## Description
        
${input.description}

## Table of Contents
- [Installation](#installation-installation)
- [Usage](#usage-usage)
- [License](#license-license)
- [Contributing](#contributing-contributing)
- [Tests](#tests-tests)
- [Questions](#questions-questions)
        
## Installation {#installation}
        
${input.installation}

## Usage {#usage}
        
${input.usage}
        
## License {#license}
        
${input.license}
        
## Contributing {#contributing}
        
${input.contributing}
        
## Tests {#tests}
        
${input.tests}
        
## Questions {#questions}
If you have any questions, please feel free to contact me at ${input.reachMe} 
or check out my GitHub profile at [${input.githubName}](https://github.com/${input.githubName}).`;
writeToFile("README.md", README);
});
}

// Function call to initialize app
init();

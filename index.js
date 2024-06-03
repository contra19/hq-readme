// Include the required modules
const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const generateMarkdown = require('./js/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is the ${colors.cyan('TITLE')} of your project?`,
    },
    {
        type: 'editor',
        name: 'description',
        message: `Please provide a ${colors.cyan('DESCRIPTION')} of your project:`,
        validate: function (text) {
            if (text.trim().length === 0) {
                return 'Description cannot be empty. Please provide a description. Make sure to save your response in the external editor for it to be recorded.';
            }
            return true;
        }
    },
    {
        type: 'editor',
        name: 'installation',
        message: `Please provide the ${colors.cyan('INSTALLATION')} instructions for your project:`,
        validate: function (text) {
        if (text.trim().length === 0) {
            return 'Installation instructions cannot be empty. Please provide the instructions. Make sure to save your response in the external editor for it to be recorded.';
        }
        return true;
    }
    },
    {
        type: 'editor',
        name: 'usage',
        message: `What are the ${colors.cyan('USAGE')} instructions for your project:`,
        validate: function (text) {
            if (text.trim().length === 0) {
                return 'Usage instructions cannot be empty. Please provide the usage instructions. Make sure to save your response in the external editor for it to be recorded.';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: `Select a ${colors.cyan('LICENSE')} for your project:`,
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0',
            'The Unlicense', 'None',],
    },
    {
        type: 'list',
        name: 'contributions',
        message: `Will you allow others to ${colors.cyan('CONTRIBUTE')} to your project?`,
        choices: ['Yes', 'No'],
    },
    {
        type: 'editor',
        name: 'contributionInstructions',
        message: `Please provide the ${colors.cyan('CONTRIBUTION INSTRUCTIONS')}:`,
        when: function (answers) {
            return answers.contributions === 'Yes';
        },
        validate: function (text) {
            if (text.trim().length === 0) {
                return 'Contribution instructions cannot be empty. Please provide the instructions.';
            }
            return true;
        }
    },
    {
        type: 'editor',
        name: 'tests',
        message: `Please provide the ${colors.cyan('TESTING')} instructions:`,
        validate: function (text) {
            if (text.trim().length === 0) {
                return 'Testing instructions cannot be empty. Please provide the instructions. Make sure to save your response in the external editor for it to be recorded.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'username',
        message: `What is your ${colors.cyan('GitHub USERNAME')}?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your ${colors.cyan('email address')}?`,
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    // Delete the existing README file if it exists
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }

    // Write the generated markdown to a README file
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
        } else {
            console.log(`Your file, ${colors.cyan(fileName)}, has been generated successfully!`);
        }
    });
}

// function to initialize the application
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate the markdown
            const markdown = generateMarkdown(answers);

            // Write the markdown to a README file
            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateReadme")

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function questions() {
       return inquirer.prompt([
        {
        type: "input",
        message: "what is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project about? Give a detailed description!",
        name: "Description"
    },
    {   
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"   
    },
    {
        type: "input",
        message: "How is the app used? Give Instructions!",
        name: "usage"
    },
    {
        type:"list",
        message: "What license is being used?",
        name: "License",
        choices: [
            "MIT",
            "Apache 2.0",
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installations",
        default: "npm i"
    },
    {
        type: "input",
        message: "Who is contributing to the project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "tests"
    },
    {
        type: "input",
        message: "Contact info for questions.",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name:"email"
    }
]);
}


// TODO: Create a function to write README file




//TODO: Create a function to initialize app
async function init(){
    try{
        const answers = await questions();
        const generateContent = generateReadme(answers);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log(' successfully wrote to README.md')
    }
    catch(err) {
        console.log(err);
    }
}

init();



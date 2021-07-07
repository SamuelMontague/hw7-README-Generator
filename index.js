
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
       
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
        type:"input",
        message: "What license is being used?",
        name: "License",
        
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
];



// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err){
        if (err){
        return console.log(err);
    }
    console.log("successfully wrote: "+ fileName);
})
}



//TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("previewREADME.md", generateMarkdown(data));
    })
}

init();



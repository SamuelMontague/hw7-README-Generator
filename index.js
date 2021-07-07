
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
       
        {
        type: "input",
        message: "what is the title of the project?",
        name: "Title"
    },
    {
        type: "input",
        message: "What is the project about? Give a detailed description!",
        name: "Description"
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
        name: "Installation",
        
    },
    {
        type: "input",
        message: "Who is contributing to the project?",
        name: "Contribute"
    },
    {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    },
    {
        type: "input",
        message: "Contact info for questions.",
        name: "Questions"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email?",
        name:"Email"
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



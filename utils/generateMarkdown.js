// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center" ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## Description
  ${data.description}
    
    ## Table of Contents 
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    To install necessary dependencies, run the following command:
    \`\`\`${data.installations}\`\`\`
    ## Usage
    ${data.usage}
    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${data.license} license
    ${data.license}
    ## Contributing
    ${data.contribute}
    ## Tests
    To run tests, run the following command:
    \`\`\`${data.tests} \`\`\`
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at (https://github.com/${data.username}/).`
}

module.exports = generateMarkdown;

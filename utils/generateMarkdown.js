
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) (https://github.com/${data.username}/${data.Title})
  
  #Description

  ${data.description}
    
    # Table of Contents

    * [Installation](#installation)
    
    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)
    
    # Installation
    The following necessary dependcies must be installed to run the application properly: ${data.installations}

    # Usage

    ${data.usage}

    #License

    
    
    This application is covered by the ${data.license} license
    
    # Contributing

    Contributors: ${data.contribute}

    # Tests

    To run tests, run the following command: ${data.tests}
    
    # Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at (https://github.com/${data.username}/).`
}

module.exports = generateMarkdown;

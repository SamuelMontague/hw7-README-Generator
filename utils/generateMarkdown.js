
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.Username}/${data.Title})
  
#Description

${data.Description}
    
# Table of Contents

* [Installation](#installation)
    
* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
    
# Installation
    The following necessary dependcies must be installed to run the application properly: ${data.Installation}

# Usage

This application is used for ${data.Usage}

#License

This application is covered by the ${data.License} license.
    
# Contributing

Contributors: ${data.Contribute}

# Tests

To run tests, run the following command: ${data.Tests}
    
# Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work at (https://github.com/${data.Username}/).

`
}

module.exports = generateMarkdown;

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-red)

  ## Description
  ${answers.description}


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)


  ## Installation
  ${answers.installation}


  ## Usage
  ${answers.usage}

  ## License
  This project is licensed under the ${answers.license} license. Please visit https://choosealicense.com/licenses/${answers.license.toLowerCase()}/ for more information.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.testing}

  ## Questions
  GitHub: https://github.com/${answers.username}/
  For all questions please reach out via email to ${answers.email} and I will get back to you.
`;
}

module.exports = generateMarkdown;

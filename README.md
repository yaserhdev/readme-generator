# readme-generator
Week 9 Challenge

In this challenge, I was given starter code and a task of creating CLI application which can generate a professional README based on user input. This application contains the following features:

- prompts for customizing your README to your liking

- generates a professional README from your inputs with the following categories:

    1. Project Title
    2. Description
    3. Table of Contents
    4. Installation Instructions
    5. Usage Information
    6. License
    7. Contributing Guidelines
    8. Test Instructions
    9. Questions 


## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


Application available for download at: https://github.com/yaserhdev/readme-generator

Demo video of application use is located in /utils

* Source code: yaser/bootcamp/readme-generator

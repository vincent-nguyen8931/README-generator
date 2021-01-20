const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

/*
a high-quality, professional README.md is generated with the 
title of my project - make appear as title
sections entitled: 
Description, 
Table of Contents, 
Installation, 
Usage, 
License, - choose list of license, add badge to top of readme, add content to license section
Contributing, 
Tests, 
Questions - github link and email
*/
// ask user questions to fill out readme template
const promptUser = () =>
inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instructions: ',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Usage information: ',
    name: 'usage',
  },
   {
    type: 'list',
    message: 'Which license do you want to apply?',
    choices: ["E-mail", "Phone", "Mailing", "postcard", "carrier pigeon"],
    name: 'communication',
  },
  {
    type: 'input',
    message: 'Contribution guidelines: ',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Test instructions: ',
    name: 'testing',
  },
  {
    type: 'input',
    message: 'GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'E-mail address?',
    name: 'email',
  },
])

// Literal template for generating readme
const generateREADME = (data) =>
`# ${data.title}

Description
------------
${data.description}

Table of contents
---------------
[Installation](#Installation)<br />
[Usage](#Usage)<br />
[License](#License)<br />
[Contributing](#Contributing)<br />
[Tests](#Tests)<br />
[Questions](#Questions)

Installation
-------------------
${data.description}

Usage
-------------
${data.description}

License
------------------
${data.description}

Contributing
-----------------------
${data.description}

Tests
---------------
${data.description}

Questions
----------
Github: <a href="https://github.com/${data.github}">https://github.com/${data.github}</a>
E-mail: <a ${data.description}

`;

promptUser()
.then((response) => writeFileAsync("./Generated-readme/README-Template.md", generateREADME(response))).then(() => console.log("Successfully created readme template in Generated-readme folder.")).catch((err) => console.error(err));
// export the 
module.exports = generateMarkdown;

// function to generate Table of Contents
function renderTableOfContents(data) {
  let tableOfContents = '';
  if (data.description) {
    tableOfContents += '* [Description](#description)\n';
  }
  if (data.installation) {
    tableOfContents += '* [Installation](#installation)\n';
  }
  if (data.usage) {
    tableOfContents += '* [Usage](#usage)\n';
  }
  if (data.license && data.license.toLowerCase() !== 'none') {
    tableOfContents += '* [License](#license)\n';
  }
  if (data.contributions) {
    tableOfContents += '* [Contributing](#contributing)\n';
  }
  if (data.tests) {
    tableOfContents += '* [Tests](#tests)\n';
  }
  tableOfContents += '* [Questions](#questions)\n';
  return tableOfContents;
}

// function to render the contributions section. If contributions are allowed instructions are printed with a link to the code of conduct. 
// If contributions are not allowed, a message is printed stating that contributions are not allowed.
function renderContributions(contributions, contributionInstructions) {
  if (contributions && contributions.toLowerCase() === 'yes') {
    return `${contributionInstructions}\n\n 
If you are interested in contributing, please review the [Contributor Covenant](code_of_conduct.md).\n\n
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)`;
  } else {
    return 'This project is not accepting contributions at this time.';
  }
}

// function to render the license badge. If no license is selected, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/license-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/license-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/license-BSD_3--Clause-red.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/license-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0](https://img.shields.io/badge/license-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/license-EPL_2.0-cyan.svg)](https://opensource.org/licenses/EPL-2.0)';
    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/license-AGPL_v3-lightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/license-GPL_v2-lightorange.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Lesser General Public License v2.1':
      return '[![License: LGPL v2.1](https://img.shields.io/badge/license-LGPL_v2.1-purple.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/license-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-brown.svg)](http://unlicense.org/)';
    case 'None':
      return '';
  }
}

// function to render the license link. If no license is selected, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause':
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 2.0':
      return '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)';
    case 'GNU Affero General Public License v3.0':
      return '[GNU AGPL v3.0](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[GNU GPL v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Lesser General Public License v2.1':
      return '[GNU LGPL v2.1](https://www.gnu.org/licenses/lgpl-2.1)';
    case 'Mozilla Public License 2.0':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    case 'None':
      return '';
  }
}

// function to render the license section
function renderLicenseSection(license) {
  if (!license || license.toLowerCase() === 'none') {
    return 'This project is not licensed.';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `This project is licensed under the ${licenseLink}.`;
  }
}

// function to render the questions section
function renderQuestions(data) {
  return `If you should have any questions please contact the creator of this project at either of the following:\n
github: [${data.username}](https://github.com/${data.username})\n
email: [${data.email}](mailto:${data.email})`;
}

// function to generate the markdown for the README file
function generateMarkdown(data) {
  const tableOfContents = renderTableOfContents(data);
  const contributingSection = renderContributions(data.contributions, data.contributionInstructions);
  const licenseSection = renderLicenseSection(data.license);
  const questionsSection = renderQuestions(data);
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.title} ${licenseBadge}

## DESCRIPTION
${data.description}

## Table of Contents
${tableOfContents}

## INSTALLATION
${data.installation}

## USAGE
${data.usage}

## LICENSE
${licenseSection}

## Contributing
${contributingSection}
  
## TESTS
${data.tests}

## Questions
${questionsSection}

This Readme was generated using [README Generator](https://github.com/contra19/hq-readme) created by [Contra19](https://github.com/contra19)`;
}

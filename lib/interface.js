const inquirer = require('inquirer');



let validParam = ['rest']

module.exports = {
  askForProjectType: () => {
    const questions = [
      {
        name: 'type',
        type: 'input',
        message: 'Enter Project Type:',
        validate: function( value ) {
          if (value.length && validParam.indexOf(value) >= 0 ) {    
              return true;              
            } else {
              return 'Please enter kind of app type for example (rest,..)';
            }
        }
      },
      {
        name: 'slnName',
        type: 'input',
        message: 'Enter solution name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter solution name.';
          }
        }
      },
      {
        name: 'path',
        type: 'input',
        message: 'Enter path of project:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter path of project.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};
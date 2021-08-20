const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const interface  = require('./lib/interface');
const generator = require('./lib/generator');

console.clear();
clear();

console.log(
  chalk.yellow(
    figlet.textSync('dotgen', { horizontalLayout: 'full'}),
  ),  
);

const run = async () => {
  const projectType = await interface.askForProjectType();  
  generator.createProject(projectType);
};


run();

#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));
// let frames = ['t', 'ty', 'typ', 'type', 'type h', 'type he', 'type her', 'type here', 'type here.', 'type here..', 'type here...']

// let i = 0
const CHOICES = fs.readdirSync(`${__dirname}/templates/`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'Choose one option from the below dropdown',

    choices: CHOICES,
  },

  
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },

  
];




console.log(chalk.yellowBright(`
88888888ba,      ,ad8888ba,   88888888888  888b      88      
88      \`"8b    d8"'    \`"8b  88           8888b     88      
88        \`8b  d8'            88           88 \`8b    88      
88         88  88             88aaaaa      88  \`8b   88      
88         88  88      88888  88"""""      88   \`8b  88      
88         8P  Y8,        88  88           88    \`8b 88      
88      .a8P    Y8a.    .a88  88           88     \`8888      
88888888Y"'      \`"Y88888P"   88888888888  88      \`888`))



console.log('‎')
inquirer.prompt(QUESTIONS).then(answers => {
  const projectChoice = answers['project-choice']; 


  const projectName = answers ['project-name']
  
 
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);

  console.log(chalk.whiteBright('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯'))
  console.log('‎')
  console.log(chalk.yellowBright.italic('Thanks for using ') + chalk.italic.greenBright('Dgen ') + chalk.yellowBright.italic('if you need any help please join our discord server' ))
  console.log('‎')
  console.log('‎')
  console.log('┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄')
  console.log('‎')
  console.log(chalk.bold.yellowBright('How to use ?'))
  console.log('‎')
  console.log(chalk.cyanBright('➦ ') + chalk.whiteBright.bold(' Step 1 - ') + chalk.cyanBright.italic(`\`cd ${projectName}\``))
  console.log('‎')
  console.log(chalk.cyanBright('➨ ') + chalk.whiteBright.bold(' Step 2 - ') + chalk.cyanBright.italic('Please edit ') + chalk.italic.magentaBright('Data/config.js') + chalk.cyanBright.italic('file'))
  console.log('‎')
  console.log(chalk.cyanBright('➥ ') + chalk.whiteBright.bold(' Step 3 - ') + chalk.cyanBright.italic('`npm install`'))
  
  console.log('‎')
  console.log(chalk.cyanBright('➥ ') + chalk.whiteBright.bold(' Step 3 - ') + chalk.cyanBright.italic('`npm install`'))
  console.log(chalk.whiteBright('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯'))

  createDirectoryContents(templatePath, projectName);
})

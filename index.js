// imports and requires all the packages needed for the application
const inquirer = require('inquirer');
// imports node file system
const fs = require('fs');
// imports classes from lib folder
const { generateSVG } = require('./lib/generateSVG');
const { generateShapes } = require('./lib/generateShapes');

class Svg{ 
    constructor(logoName, logoColor, logoTextColor, logoShape) {
        this.logoName = logoName;
        this.logoColor = logoColor;
        this.logoTextColor = logoTextColor;
        this.logoShape = logoShape;
    }
    generateSvg() {
        return `
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
            Sorry, your browser does not support inline SVG.
        </svg>
        `;
    }
}



const promptUser = () =>
inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'Please enter 1-3 letters for your logo name:',
            validate: (logoName) => {
                if (logoName.length > 3) {
                    console.log('Please enter 1-3 letters for your logo name:');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'logoTextColor',
            message: 'Please enter a color for your logo text:',
            validate: (logoTextColor) => {
                if (logoTextColor.length === 0) {
                    console.log('Please enter a color for your logo text:');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'logoBackgroundColor',
            message: 'Please enter a color for your logo background:',
            validate: (logoBackgroundColor) => {
                if (logoBackgroundColor.length === 0) {
                    console.log('Please enter a color for your logo background:');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Please select a shape for your logo:',
            choices: ['Square', 'Circle', 'Triangle', 'Star', 'Heart', 'Diamond', 'Rectangle' ]
        },
    ])
    .then((answers) => {
        const shape = generateShape(answers);
        const svg = generateSVG(shape);
        fs.writeFile('logo.html', svg, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Prompt could not be rendered in the current environment');
        } else {
            console.log('Something else went wrong');
        }
    });



promptUser();

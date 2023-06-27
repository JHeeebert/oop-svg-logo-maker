const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js');
const generateShape = require('./lib/generateShape.js');

function init() {
    inquirer.prompt([
    {
        type: 'input',
        name: "logoName",
        message: "Enter a 1-3 Letter Logo Name: ",
        validate: nameInput => {
            if (nameInput.length > 3 || nameInput.length < 1) {
                console.log("Please enter a valid name.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: "logoColor",
        message: "Enter a color or a hex code for your logos background color:",
        validate: colorInput => {
            if (colorInput.length < 1) {
                console.log("Please enter a valid color.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: "logoTextColor",
        message: "Enter a color or a hex code for your logos text color:",
        validate: colorInput => {
            if (colorInput.length < 1) {
                console.log("Please enter a valid color.");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "logoShape",
        message: "Choose a shape for your logo:",
        choices: ["Circle", "Square", "Rectangle", "Diamond", "Triangle", "Star", "Heart",],
        validate: shapeInput => {
            if (shapeInput.length < 1) {
                console.log("Please enter a valid shape.");
                return false;
            } else {
                return true;
            }
        }
    },
])
    .then(answers => {
        const logo = generateShape(answers);
        const svg = generateSVG(logo);
        fs.writeFile('./dist/index.html', svg, err => {
            if (err) throw err;
            console.log("Your logo has been generated! Check out index.html in the dist folder to see it!");
        });
    })
    .catch(err => {
        console.log(err);
    }
    );
}

    prompt();



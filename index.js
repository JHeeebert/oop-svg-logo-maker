const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Rectangle, Diamond, Triangle, Star, Heart} = require('./lib/shapes.js');
const generateSVG = require('./lib/generateSVG.js');
const generateShape = require('./lib/generateShape.js');

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
    const {logoName, logoColor, logoTextColor, logoShape} = answers;
    const logo = new Svg(logoName, logoColor, logoTextColor, logoShape);
    const shape = generateShape(logo);
    const svg = generateSVG(shape);
    fs.writeFile('./dist/index.html', svg, err => {
        if (err) throw err;
        console.log('File created! Check out index.html in this directory to see it!');
    });
}
)
}

init();

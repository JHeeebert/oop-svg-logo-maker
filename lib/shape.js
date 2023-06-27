const isCss3Color = require('is-css-color');

class Shape {
    constructor({ logoName, logoColor, logoTextColor, logoShape }) {
        this.logoShape = logoShape;

        this.validateColor(logoColor);
        this.logoColor = logoColor;

        this.validateName(logoName);
        this.logoName = logoName;

        this.validateColor(logoTextColor);
        this.logoTextColor = logoTextColor;
    }

    ifResponseIsInvalid(input) {
        if (input.length < 1) {
            console.log("Please enter a valid input.");
            return false;
        } else {
            return true;
        }
    }
    validateShape(shape) {
        if (shape.length < 1) {
            console.log("Please enter a valid shape.");
            return false;
        } else {
            return true;
        }
    }
    validateName(name) {
        if (name.length > 3 || name.length < 1) {
            console.log("Please enter a valid name.");
            return false;
        } else {
            return true;
        }
    }
    validateColor(color) {
        if (color.length < 1) {
            console.log("Please enter a valid color.");
            return false;
        } else {
            return true;
        }
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 0 0 0 0; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}

module.exports = Shape;



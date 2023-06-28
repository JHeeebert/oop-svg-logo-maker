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

    ifResponseEmpty(input) {
        if (!input) throw new Error("Input CANNOT be empty.");
    }

    validateShapelogo(input) {
    this.ifResponseEmpty(input);
    if (input.length < 1) {
        throw new Error("Please enter a valid shape.");
    }
    }
    validateName(input) {
        this.ifResponseEmpty(input);
        if (input.length > 3 || input.length < 1) {
            console.log("Please enter a valid name.");
            return false;
        } else {
            return true;
        }
    }
        validateColor(input) {
        this.ifResponseEmpty(input);
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
const Shape = require('./shapes');

class Square extends Shape {
    constructor(logoColor, logoName, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "square"
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
class Triangle extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "Triangle";
        this.sides = 3;
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 0 0 0 0; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}

class Star extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "star"
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
class Rectangle extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "rectangle"
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 400px; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
class Heart extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "heart"
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
class Diamond extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "Diamond";
        this.sides = 4;
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
class Circle extends Shape {
    constructor(logoName, logoColor, logoTextColor) {
        super(logoName, logoColor, logoTextColor);
        this.shape = "Circle";
        this.sides = 0;
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}   

module.exports = Shape, Square, Triangle, Star, Rectangle, Heart, Diamond, Circle;


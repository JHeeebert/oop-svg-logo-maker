const Circle = require('./circle');
const Square = require('./square');
const Rectangle = require('./rectangle');
const Diamond = require('./diamond');
const Triangle = require('./triangle');
const Star = require('./star');
const Heart = require('./heart');

const generateShape = (logoName, logoColor, logoTextColor, logoShape) => {
    switch (logoShape) {
        case "Circle":
            return new Circle(logoName, logoColor, logoTextColor);
        case "Square":
            return new Square(logoName, logoColor, logoTextColor);
        case "Rectangle":
            return new Rectangle(logoName, logoColor, logoTextColor);
        case "Diamond":
            return new Diamond(logoName, logoColor, logoTextColor);
        case "Triangle":
            return new Triangle(logoName, logoColor, logoTextColor);
        case "Star":
            return new Star(logoName, logoColor, logoTextColor);
        case "Heart":
            return new Heart(logoName, logoColor, logoTextColor);
        default:
            return new Circle(logoName, logoColor, logoTextColor);
    }
}

module.exports = generateShape;
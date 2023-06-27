const { Circle, Square, Rectangle, Diamond, Triangle, Star, Heart } = require('./shapes');

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
// function to generate shape based on user input
const generateShape = (answers) => {
    const { logoShape, logoBackgroundColor } = answers;
    switch (logoShape) {
        case 'Square':
            return new Square(answers);
        case 'Circle':
            return new Circle(answers);
        case 'Triangle':
            return new Triangle(answers);
        case 'Star':
            return new Star(answers);
        case 'Heart':
            return new Heart(answers);
        case 'Diamond':
            return new Diamond(answers);
        case 'Rectangle':
            return new Rectangle(answers);
        default:
            return new Square(answers);
    }
};
module.exports = { generateShape, Shape };
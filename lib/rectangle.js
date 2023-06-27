const Shape = require('./shape');

class Rectangle extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);
        this.shape = "rectangle"
    }
    render() {
        return `
        <div style="background-color: ${this.color}; height: 200px; width: 400px; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.name}</h1>
        </div>
        `;
    }
}

module.exports = Rectangle;

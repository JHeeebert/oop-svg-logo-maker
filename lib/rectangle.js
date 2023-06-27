const Shape = require('./shape');

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

module.exports = Rectangle;

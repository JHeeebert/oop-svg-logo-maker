const Shape = require('./shape');

class Triangle extends shape {
    constructor(logoName, logoColor, textColor) {
        super(logoName, logoColor, textColor);
        this.shape = "Triangle";
        this.sides = 3;
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 0 0 0 0; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}
module.exports = Triangle;
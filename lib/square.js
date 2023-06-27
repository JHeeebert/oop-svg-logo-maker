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

module.exports = Square;
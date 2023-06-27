const Shape = require('./shape.js');

class Star extends Shape {
    constructor(logoName, logoColor, textColor) {
        super(logoName, logoColor, textColor);
        this.shape = "star"
    }
    render() {
        return `
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `;
    }
}

module.exports = Star;
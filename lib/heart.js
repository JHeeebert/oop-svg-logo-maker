const Shape = require('./shapes.js');

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

module.exports = Heart;

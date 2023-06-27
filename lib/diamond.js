const Shape = require('./shape');

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
module.exports = Diamond;
const Shape = require('./Shape');

class Diamond extends Shape {
    constructor(name, color, textColor) {
        super(name, color, textColor);
        this.shape = "Diamond";
        this.sides = 4;
    }
    render() {
        return `
        <div style="background-color: ${this.color}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.name}</h1>
        </div>
        `;
    }
}
module.exports = Diamond;
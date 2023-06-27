const Rectangle = require("../lib/rectangle");

describe('rectangle', () => {
    describe("Render Method", () => {
    it('should render a rectangle', () => {
        logoName = "FZZ",
        logoColor = "red",
        logoTextColor = "white"
        logoShape = "rectangle"
        const rectangle = new Rectangle(logoName, logoColor, logoTextColor);
        expect(rectangle.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});
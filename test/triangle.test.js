const Triangle = require("..lib/triangle");

describe('Triangle', () => {
    describe("Render Method", () => {
    it('should render a Triangle', () => {
        logoName = "FZZ",
        logoColor = "red",
        logoTextColor = "white"
        logoShape = "Triangle"
        const triangle = new Triangle(logoName, logoColor, logoTextColor);
        expect(triangle.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});
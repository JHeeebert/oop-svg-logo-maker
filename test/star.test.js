const Star = require("..lib/star");

describe('Star', () => {
    describe("Render Method", () => {
    it('should render a Star', () => {
        logoName = "FZZ",
        logoColor = "red",
        logoTextColor = "white"
        logoShape = "Star"
        const star = new Star(logoName, logoColor, logoTextColor);
        expect(star.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});
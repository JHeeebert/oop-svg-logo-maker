const Diamond = require("../lib/diamond");

describe('Diamond', () => {
    describe("Render Method", () => {
    it('should render a Diamond', () => {
        logoName = "FZZ",
        logoColor = "red",
        textColor = "white"
        logoShape = "diamond"
        const diamond = new Diamond(logoName, logoColor, textColor);
        expect(diamond.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});
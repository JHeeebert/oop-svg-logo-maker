const Heart = require("../lib/heart");

describe('Heart', () => {
    describe("Render Method", () => {
    it('should render a Heart', () => {
        logoName = "FZZ",
        logoColor = "red",
        textColor = "white"
        logoShape = "heart"
        const heart = new Heart(logoName, logoColor, textColor);
        expect(heart.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});
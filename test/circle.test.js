
describe('Circle', () => {
    describe("render Method", () => {
    it('should render a circle', () => {
        logoName = "FZZ",
        logoColor = "red",
        textColor = "white"
        logoShape = "circle"
        const circle = new Circle(logoName, logoColor, textColor);
        expect(circle.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.textColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
    });
});
});


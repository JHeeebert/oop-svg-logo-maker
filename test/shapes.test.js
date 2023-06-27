const Shape = require('../lib/shapes');

var testCases = [
    {
        desc: "Should throw error if user input is empty",
        input: {},
        expectedErr: new Error("You have not entered any information. Please try again.")
    },
    {
        desc: "Should throw error if logoName is more than 3 characters",
        input: { logoName: "FZZZ" },
        expectedErr: new Error("Please enter a valid name that is between 1-3 characters.")
    },
    {
        desc: "should thrw error if no valid CSS color is entered",
        input: { logoName: "FZZ", logoColor: "Cup", logoTextColor: "NotColor" },
        expectedErr: new Error("Please enter a valid color.")
    },
    {
        desc: "should throw error if no valid shape is entered",
        input: { logoName: "FZZ", logoColor: "red", logoTextColor: "white", logoShape: "NotAShape" },
        expectedErr: new Error("Please enter a valid shape.")
    },
    {
        desc: "should throw error if text color is not entered",
        input: { logoName: "FZZ", logoColor: "red", logoShape: "circle" },
        expectedErr: new Error("Please enter a valid color.")
    },
    {
        desc: "should throw error if background color is not entered",
        input: { logoName: "FZZ", logoTextColor: "white", logoShape: "circle" },
        expectedErr: new Error("Please enter a valid color.")
    },
    {
        desc: "should throw error if logo name is not entered",
        input: { logoColor: "red", logoTextColor: "white", logoShape: "circle" },
        expectedErr: new Error("Please enter a valid name that is between 1-3 characters.")
    },
];
describe("Shape", () => {
    describe("Constructor", () => {
        testCases.forEach(test => {
            it(test.desc, () => {
                expect(() => new Shape(test.input.logoName, test.input.logoColor, test.input.logoTextColor, test.input.logoShape)).toThrow(test.expectedErr);
            });
        });
    });
}
);
const Circle = require('../lib/circle');
describe('Circle', () => {
    describe("render Method", () => {
        it('should render a circle', () => {
            logoName = "FZZ",
                logoColor = "red",
                logoTextColor = "white"
            logoShape = "circle"
            const circle = new Circle(logoName, logoColor, logoTextColor);
            expect(circle.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
        });
    });
});

const Diamond = require("../lib/diamond");

describe('Diamond', () => {
    describe("Render Method", () => {
        it('should render a Diamond', () => {
            logoName = "FZZ",
                logoColor = "red",
                logoTextColor = "white"
            logoShape = "diamond"
            const diamond = new Diamond(logoName, logoColor, logoTextColor);
            expect(diamond.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
        });
    });
});
const Heart = require("../lib/heart");

describe('Heart', () => {
    describe("Render Method", () => {
        it('should render a Heart', () => {
            logoName = "FZZ",
                logoColor = "red",
                logoTextColor = "white"
            logoShape = "heart"
            const heart = new Heart(logoName, logoColor, logoTextColor);
            expect(heart.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
        });
    });
});
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
const Triangle = require("../lib/triangle");
describe('Square', () => {
    describe("Render Method", () => {
        it('should render a Square', () => {
            logoName = "FZZ",
                logoColor = "red",
                logoTextColor = "white"
            logoShape = "Square"
            const square = new Square(logoName, logoColor, logoTextColor);
            expect(square.render()).toBe(`
        <div style="background-color: ${this.logoColor}; height: 200px; width: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
            <h1 style="color: ${this.logoTextColor}; font-size: 100px;">${this.logoName}</h1>
        </div>
        `);
        });
    }); 
});
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
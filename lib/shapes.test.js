// Create tests for each shape in the shapes.js file.
// Each shape should have a test method.

const shapeTest = require('./shapes');

describe("Circle", () => {
    describe("Render Method", () => {
        it("should render a circle string", () => {
            const circle = new Circle({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "circle",
            });
            expect(circle.render()).toBe(
                `<circle cx="50" cy="50" r="50" fill="red" />`
            );
        });
    });
});

describe("Square", () => {
    describe("Render Method", () => {
        it("should render a square string", () => {
            const square = new Square({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "square",
            });
            expect(square.render()).toBe(
                `<rect x="50" y="50" width="50" height="50" fill="red" />`
            );
        });
    });
});

describe("Triangle", () => {
    describe("Render Method", () => {
        it("should render a triangle string", () => {
            const triangle = new Triangle({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "triangle",
            });
            expect(triangle.render()).toBe(
                `<polygon points="50,0 50,50 0,50" fill="red" />`
            );
        });
    });
});

describe("Rectangle", () => {
    describe("Render Method", () => {
        it("should render a rectangle string", () => {
            const rectangle = new Rectangle({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "rectangle",
            });
            expect(rectangle.render()).toBe(
                `<rect x="50" y="50" width="50" height="50" fill="red" />`
            );
        });
    });
});

describe("Star", () => {
    describe("Render Method", () => {
        it("should render a star string", () => {
            const star = new Star({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "star",
            });
            expect(star.render()).toBe(
                `<polygon points="50,0 50,50 0,50" fill="red" />`
            );
        } );
    });
});

describe("Heart", () => {
    describe("Render Method", () => {
        it("should render a heart string", () => {
            const heart = new Heart({
                logoName: "War",
                textColor: "red",
                bgColor: "brown",
                logoShape: "heart",
            });
            expect(heart.render()).toBe(
                `<polygon points="50,0 50,50 0,50" fill="red" />`
            );
            });
        });
    });
    
shapeTest();
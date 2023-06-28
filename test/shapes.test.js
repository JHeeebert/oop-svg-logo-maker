const { Circle, Square, Rectangle, Diamond, Triangle, Star, Heart } = require("../lib/shapes.js");

describe("Circle", () => {
    test("render", () => {
        const circle = new Circle("test", "red", "white");
        expect(circle.render()).toBe("test");
    });
}
);

describe("Square", () => {
    test("render", () => {
        const square = new Square("test", "red", "white");
        expect(square.render()).toBe("test");
    });
}
);

describe("Rectangle", () => {
    test("render", () => {
        const rectangle = new Rectangle("test", "red", "white");
        expect(rectangle.render()).toBe("test");
    });
}
);

describe("Diamond", () => {
    test("render", () => {
        const diamond = new Diamond("test", "red", "white");
        expect(diamond.render()).toBe("test");
    });
}
);

describe("Triangle", () => {
    test("render", () => {
        const triangle = new Triangle("test", "red", "white");
        expect(triangle.render()).toBe("test");
    });
}
);

describe("Star", () => {
    test("render", () => {
        const star = new Star("test", "red", "white");
        expect(star.render()).toBe("test");
    });
}

);

describe("Heart", () => {
    test("render", () => {
        const heart = new Heart("test", "red", "white");
        expect(heart.render()).toBe("test");
    });
}

);

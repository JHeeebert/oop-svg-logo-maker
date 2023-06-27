const Shape = require('../lib/shape');

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

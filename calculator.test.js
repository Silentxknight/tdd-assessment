const add = require("./calculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

test("handles new line as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
});

test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,3")).toBe(1003);
});
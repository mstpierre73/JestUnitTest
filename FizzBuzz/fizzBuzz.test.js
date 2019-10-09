// Doc created by Vincent Girard
const fizzBuzz = require("./fizzBuzz");

test("1 => 1", () => {
	expect(fizzBuzz.getValue(1)).toBe("1");
});

test("2 => 2", () => {
	expect(fizzBuzz.getValue(2)).toBe("2");
});

test("3 => fizz", () => {
	expect(fizzBuzz.getValue(3)).toBe("fizz");
});

test("5 => buzz", () => {
	expect(fizzBuzz.getValue(5)).toBe("buzz");
});

test("6 => fizz", () => {
	expect(fizzBuzz.getValue(6)).toBe("fizz");
});

test("10 => buzz", () => {
	expect(fizzBuzz.getValue(10)).toBe("buzz");
});

test("15 => fizzbuzz", () => {
	expect(fizzBuzz.getValue(15)).toBe("fizzbuzz");
});

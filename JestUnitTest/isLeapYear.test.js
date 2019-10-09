const isLeapYear = require("./isLeapYear");

test("year 1 isLeapYear", () => {
	expect(isLeapYear.getYear(1)).toBe(false);
});

test("year 2 isLeapYear", () => {
	expect(isLeapYear.getYear(2)).toBe(false);
});

test("year 4 isLeapYear", () => {
	expect(isLeapYear.getYear(4)).toBe(true);
});

test("year 8 isLeapYear", () => {
	expect(isLeapYear.getYear(8)).toBe(true);
});

test("year 100 isLeapYear", () => {
	expect(isLeapYear.getYear(100)).toBe(false);
});

test("year 200 isLeapYear", () => {
	expect(isLeapYear.getYear(200)).toBe(false);
});

test("year 400 isLeapYear", () => {
	expect(isLeapYear.getYear(400)).toBe(true);
});

test("year 800 isLeapYear", () => {
	expect(isLeapYear.getYear(800)).toBe(true);
});

test("year -1 isLeapYear", () => {
	expect(isLeapYear.getYear(-1)).toBe(false);
});

test("year -4 isLeapYear", () => {
	expect(isLeapYear.getYear(-4)).toBe(true);
});

test("year -40 isLeapYear", () => {
	expect(isLeapYear.getYear(-40)).toBe(true);
});

test("year -80 isLeapYear", () => {
	expect(isLeapYear.getYear(-80)).toBe(false);
});

test("year 0 isLeapYear", () => {
	expect(isLeapYear.getYear(0)).toBe(true);
});

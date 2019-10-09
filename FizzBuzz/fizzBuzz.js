// Doc created by Vincent Girard
const fizzBuzz = {
	getValue(input) {
		if (this.canBeDividedBy3(input) && this.canBeDividedBy5(input)) {
			return "fizzbuzz";
		}

		if (this.canBeDividedBy3(input)) {
			return "fizz";
		}

		if (this.canBeDividedBy5(input)) {
			return "buzz";
		}

		return `${input}`;
	},

	canBeDividedBy3(input) {
		return input % 3 === 0;
	},

	canBeDividedBy5(input) {
		return input % 5 === 0;
	}
};

module.exports = fizzBuzz;

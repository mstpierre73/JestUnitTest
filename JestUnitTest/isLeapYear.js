const isLeapYear = {
	getYear(year) {
		// Leap years were invented in -40 before JC
		if (year % 4 === 0 && !(year < -40)) {
			if (year % 100 === 0) {
				if (year % 400 === 0) {
					return true;
				}
				return false;
			}
			return true;
		} else {
			return false;
		}
	}
};

module.exports = isLeapYear;

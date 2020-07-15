const getAge = (): number => {
	const date = new Date();

	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDay();
	const age = year - 2003;

	if ((month === 4 && day >= 3) || month > 4) {
		return age;
	}

	return age - 1;
};

export default getAge;

const info = {
	name: 'Smart Pizza',
	description: 'Your go-to pizza place! We offer fresh and tasty food and cheap prices.',
	currency: 'PLN',
	callingCode: '+48',
	/*
		Restaurant opening & closing hours

		0 - sunday, 1 - monday and so on...

		The hour format should be HH:mm. If you want your restaurant to be completely closed on that specific day, put 0 instead of the hour.
	*/
	schedule: {
		0: {
			opens: '12:00',
			closes: '22:00'
		},
		1: {
			opens: '12:00',
			closes: '22:00'
		},
		2: {
			opens: '12:00',
			closes: '22:00'
		},
		3: {
			opens: '12:00',
			closes: '22:00'
		},
		4: {
			opens: '12:00',
			closes: '22:00'
		},
		5: {
			opens: '12:00',
			closes: '23:00'
		},
		6: {
			opens: '0',
			closes: '0'
		}
	},
	// When set to ex. 1 and the closing hour is 23:00, the system will prevent orders after 22:00.
	averageDelivery: 1,
	// Days, in which the system will not accept any orders. dd/MM format.
	holidays: [
		'28/09'
	]
};

export default info;

import {
	parse,
	isBefore,
	addDays,
	isWithinInterval,
	isToday,
	differenceInHours,
	lightFormat,
	addHours
} from 'date-fns';

import info from '../lib/info';

type Schedule = {
	[day: number]: {
		opens: string;
		closes: string;
	};
};

const {schedule, averageDelivery, holidays} = info;

export const getDeliveryHours = (date: Date): string[] | undefined => {
	const dayOfTheWeek = date.getDay();
	const times = (schedule as Schedule)[dayOfTheWeek];

	const opens = parse(times.opens, 'HH:mm', date);
	let closes = parse(times.closes, 'HH:mm', date);
	let isHoliday = false;

	// If the closing date is earlier, than the opening date - add 1 day to it.
	if (isBefore(closes, opens)) {
		closes = addDays(closes, 1);
	}

	// Check if the current date is one of holidays.
	for (const day of holidays) {
		if (isToday(parse(day, 'dd/MM', date))) {
			isHoliday = true;
		}
	}

	// Do not allow orders if the current date is not in the restaurant schedule.
	if (!isWithinInterval(date, {start: opens, end: closes}) || isHoliday || times.opens === '0') {
		return undefined;
	}

	const suggestions = [];

	// Display suggestions every hour.
	// TODO: make is every 30 minutes.
	for (let t = averageDelivery; t <= differenceInHours(closes, date); t++) {
		suggestions.push(lightFormat(addHours(date, t), 'HH:mm'));
	}

	return suggestions;
};

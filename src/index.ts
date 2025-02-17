import PaymentDescription from './PaymentDescription';
import {keyMap} from './Keys';

export default function spayd(paymentDescription: PaymentDescription): string {
	const header = 'SPD*1.0';
	const keys = [];

	for (const key in paymentDescription) {
		keys.push(new keyMap[key](paymentDescription[key]));
	}

	return `${header}*${keys.sort().join('*').toUpperCase()}`;
}

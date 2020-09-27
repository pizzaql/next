import {gql} from '@apollo/client';

const CREATE_ORDER = gql`
	mutation createOrder {
		insert_order(
			objects: [
				{
					cart: $cart,
					name: $name,
					email: $email,
					phone: $phone,
					company: $company,
					address: $address,
					postal: $postal,
					city: $city,
					floor: $floor,
					time: $time,
					notes: $notes,
					payment: $payment,
					tip: $string,
					status: "in progress"
				}
			]
		) {
			returning {
				id
			}
		}
	}
`;

export {
	CREATE_ORDER
};


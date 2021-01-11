import {
	makeSchema,
	nonNull,
	objectType,
	intArg
} from 'nexus';
import {nexusPrisma} from 'nexus-plugin-prisma';
import {dateTimePlugin} from '@jcm/nexus-plugin-datetime';

const Cart = objectType({
	name: 'Cart',
	definition(t) {
		t.id('id');
		t.string('name');
		t.string('type');
		t.float('price');
		t.int('quantity');
		t.int('orderId');
	}
});

const Order = objectType({
	name: 'Order',
	definition(t) {
		t.id('id');
		t.dateTime('createdAt');
		t.string('name');
		t.string('email');
		t.string('phone');
		t.nullable.string('company');
		t.string('address');
		t.string('postal');
		t.string('city');
		t.nullable.string('floor');
		t.string('time');
		t.nullable.string('notes');
		t.string('payment');
		t.nullable.string('tip');
		t.float('total');
	}
});

const Query = objectType({
	name: 'Query',
	definition(t) {
		t.crud.order();
		t.crud.orders();

		t.list.field('carts', {
			type: 'Cart',
			args: {
				orderId: nonNull(intArg())
			},
			resolve: (_, {orderId}, ctx) => {
				return ctx.prisma.cart.findMany({
					where: {
						orderId
					}
				});
			}
		});
	}
});

const Mutation = objectType({
	name: 'Mutation',
	definition(t) {
		t.crud.deleteOneOrder({alias: 'deleteOrder'});
		t.crud.createOneOrder({alias: 'createOrder'});
		t.crud.createOneCart({alias: 'createCart'});
		t.crud.deleteOneCart({alias: 'deleteCart'});
	}
});

export const schema = makeSchema({
	types: [Query, Mutation, Cart, Order],
	plugins: [
		nexusPrisma({experimentalCRUD: true}),
		dateTimePlugin()
	],
	outputs: {
		schema: __dirname + '/../schema.graphql',
		typegen: __dirname + '/generated/nexus.ts'
	},
	contextType: {
		module: require.resolve('./context'),
		export: 'Context'
	},
	sourceTypes: {
		modules: [
			{
				module: '@prisma/client',
				alias: 'prisma'
			}
		]
	}
});


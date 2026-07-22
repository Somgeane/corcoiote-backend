import { NotFoundError } from '../errors/index.ts';
import { customers } from '../mocks/customer.mock.ts';
import type { CreateCustumer, Customer, UpdateCustomer } from '../types.ts';

export function findAllCustomers(): Customer[] {
	return customers;
}

export function findCustomerById(id: number): Customer {
	const customer = customers.find((customer) => {
		return customer.id === id;
	});
	if (!customer) {
		throw new NotFoundError('Cliente não encontrado.');
	}
	return customer;
}

export function insertCustomer({ name, email }: CreateCustumer): Customer {
	const id = customers[customers.length - 1].id;

	const customer: Customer = {
		id: id + 1,
		name,
		email,
		status: true,
	};
	customers.push(customer);
	return customer;
}

export function modifyCustomer(
	id: number,
	{ name, email, status }: UpdateCustomer,
) {
	const customer = customers.find((customer) => {
		return customer.id === id;
	});

	if (!customer) {
		throw new NotFoundError('Cliente não encotrado.');
	}
	if (name) customer.name = name;
	if (email) customer.email = email;
	if (status !== undefined) customer.status = status;
	return customer;
}

export function removeCustomer(id: number): void {
	const index = customers.findIndex((customer) => {
		return customer.id === id;
	});
	if (index === -1) {
		throw new NotFoundError('Cliente não encotrado.');
	}
	customers.splice(index, 1);
}

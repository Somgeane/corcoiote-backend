import type { Request, Response } from 'express';
import { customers } from '../mocks/customer.mock.ts';
import type {
	CreateCustomer,
	UpdateCustomer,
} from '../schemas/customer.schema.ts';
import * as CustomerService from '../services/customer.service.ts';
import type { Customer } from '../types.ts';

export function getAllCustomers(request: Request, response: Response) {
	const customers = CustomerService.findAllCustomers();
	response.status(200).json(customers);
}

export function getCustomersById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const customer = CustomerService.findCustomerById(id);

	response.status(200).json(customer);
}

export function createCustomers(request: Request, response: Response) {
	const { name, email } = request.body as CreateCustomer;
	const customer = CustomerService.insertCustomer({ name, email });
	response.status(201).json(customer);
}

export function updateCustomers(request: Request, response: Response) {
	const id = Number(request.params.id);
	const { name, email, status } = request.body as UpdateCustomer;
	const customer = CustomerService.modifyCustomer(id, {
		name,
		email,
		status,
	});
	response.status(200).json(customer);
}

export function deleteCustomers(request: Request, response: Response) {
	const id = Number(request.params.id);
	CustomerService.removeCustomer(id);
	response.status(204).send();
}

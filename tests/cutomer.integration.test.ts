import { toStreamable } from 'node:stream/iter';
import request from 'supertest';
import app from '../src/app.ts';
import prisma from '../src/lib/prisma.ts';

beforeEach(async () => {
	await prisma.invoice.deleteMany();
	await prisma.customer.deleteMany();
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('GET/customer', () => {
	test('devolve 404 quando cliente não existe ', async () => {
		const response = await request(app).get('./customers/999').send({
			name: 'Timoteo Bessa',
			email: 'timoteo@email.com',
		});

		expect(response.status).toBe(404);
		expect(response.body.message).toBe('Cliente não encontrado.');
	});
});

describe('POST/customer', () => {
	test('cria um cliente e devolve 201 com o registro criado ', async () => {
		const response = await request(app).post('./customers').send({
			name: 'Timoteo Bessa',
			email: 'timoteo@email.com',
		});

		expect(response.status).toBe(201);
		expect(response.body).toMatchObject({
			name: 'Timoteo Bessa',
			email: 'timoteo@email.com',
		});
	});
});

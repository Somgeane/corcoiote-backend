import express from 'express';
import CustomersRouter from './routes/customers.routes.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomersRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!',
	});
});

app.listen(Number(process.env.PORT));

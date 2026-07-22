import express from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import requestLogger from './middlewares/requestLogger.ts';
import CustomersRouter from './routes/customers.routes.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/customers', CustomersRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!',
	});
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));

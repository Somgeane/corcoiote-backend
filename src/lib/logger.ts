import pino from 'pino';

const isdevelopment = process.env.NODE_ENV !== 'production';

const logger = pino({
	level: process.env.LOG_LEVEL ?? 'info',
	transport: isdevelopment ? { target: 'pino-pretty' } : undefined,
});

export default logger;

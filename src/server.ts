//import http from 'node:http';

// const users = [
// 	{
// 		name: 'Cristiano Ronaldo',
// 		status: true,
// 	},
// 	{
// 		name: ' Lionel Messi',
// 		status: true,
// 	},

// 	{
// 		name: 'Neymar Junior',
// 		status: false,
// 	},
// ];

// http
// 	.createServer((request, response) => {
// 		if (request.url === '/users' && request.method === 'GET') {
// 			response.writeHead(200, {
// 				'content-type': 'application/json',
// 			});

// 			response.end(JSON.stringify(users));
// 			return;
// 		} else {
// 			response.writeHead(404, {
// 				'content-type': 'text/plain',
// 			});
// 			response.end('not found!');
// 		}
// 	})
// 	.listen(Number(process.env.PORT));

import express from 'express';

const app = express();

app.use(express.json());
const users = [
	{
		name: 'Cristiano Ronaldo',
		status: true,
	},
	{
		name: ' Lionel Messi',
		status: true,
	},

	{
		name: 'Neymar Junior',
		status: false,
	},
];

app.get('/users', (request, response) => {
	response.json(users);
});

app.listen(Number(process.env.PORT));

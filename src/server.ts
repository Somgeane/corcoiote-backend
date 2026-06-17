import http from 'node:http';

http
	.createServer(() => {
		console.log('knock on the door!');
	})
	.listen(3000);

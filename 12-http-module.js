const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('welcome to our homepage');
	}
	if (req.url === '/about') {
		res.end('welcome to about page');
	}
	res.end(`
    <h1>Oops!</h1>
    <p>page not found</p>
    `);
});

server.listen(5000);

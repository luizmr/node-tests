const { readFile, writeFile } = require('fs');

// first arg = path
// second arg = optional => decoding
// third/second arg = allback function
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return null;
	}

	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return null;
		}

		const second = result;
		writeFile(
			'./content/result-async.txt',
			`result async
        : ${first} - ${second}`,
			{ flag: 'a' },
			(err, result) => {
				if (err) {
					console.log(err);
					return null;
				}

				console.log(result);
			},
		);
	});
});

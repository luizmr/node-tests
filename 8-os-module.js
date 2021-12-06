const os = require('os');

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds

const time = os.uptime();

console.log(time);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log(currentOS);

const end = require('./index');
const handleError = require('node-cli-handle-error');
const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');

(async () => {
	try {
		clearConsole();
		// es5 syntax
		await end({
			github: `https://github.com/msaaddev`,
			twitter: `http://twitter.com/msaaddev`,
			pkgJSON: pkgJSON
		});

		// es6 syntax
		await end({
			github: `https://github.com/msaaddev`,
			twitter: `http://twitter.com/msaaddev`,
			pkgJSON
		});
	} catch (err) {
		handleError(err);
	}
})();

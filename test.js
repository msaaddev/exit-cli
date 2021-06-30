const end = require('./index');
const handleError = require('node-cli-handle-error');
const pkgJSON = require('./package.json');

(async () => {
	try {
		// es5 syntax
		await end({
			gitHub: `https://github.com/msaaddev`,
			twitter: `http://twitter.com/msaaddev`,
			pkgJSON: pkgJSON
		});

		// es6 syntax
		await end({
			gitHub: `https://github.com/msaaddev`,
			twitter: `http://twitter.com/msaaddev`,
			pkgJSON
		});
	} catch (err) {
		handleError(err);
	}
})();

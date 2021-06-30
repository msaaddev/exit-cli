/**
 *
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

// importing packages
const cliTable = require('cli-table');
const colors = require('colors');
const chalk = require('chalk');
const checkForUpdate = require('update-check');

/**
 *
 * checks whether an update is available for the CLI
 */
const notifyUpdate = async pkgJSON => {
	let update = null;

	try {
		update = await checkForUpdate(pkgJSON);
	} catch (err) {}

	if (update) {
		console.log();
		console.log(
			chalk.yellow.bold(
				`A new version of \`${pkgJSON.name}\` is available!`
			)
		);
		console.log(
			'You can update by running: ' +
				chalk.cyan(`npm i -g ${pkgJSON.name}@latest`)
		);
		console.log();
	}
};

module.exports = async (opt = {}) => {
	const defaultOptions = {
		pkgJSON: ``,
		github: ``,
		twitter: ``
	};

	const options = { ...defaultOptions, ...opt };

	options.github === ``
		? (options.github = `Here goes your repository link`)
		: null;
	options.twitter === ``
		? (options.twitter = `Here goes your twitter account link`)
		: null;

	// create a table
	const table = new cliTable();

	table.push([
		`${chalk.bgYellow.hex(`#000000`).bold(` Star `)}`,
		`${options.github}`.grey
	]);
	table.push([
		`${chalk.bgCyan.hex(`#000000`).bold(` Follow `)}`,
		`${options.twitter}`.grey
	]);

	// display table
	console.log('');
	console.log(table.toString());

	options.pkgJSON !== `` ? await notifyUpdate(options.pkgJSON) : null;
};

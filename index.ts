'use strict';

// External Modules
import { r as RethinkDB } from 'rethinkdb-ts';
import { run } from '@ChrisTalman/incompatible-identical-types-dependency';

initialise();
async function initialise()
{
	const query = RethinkDB
		.table('Users')
		.insert({id: '123', username: 'Test'});
	await run(query);
};
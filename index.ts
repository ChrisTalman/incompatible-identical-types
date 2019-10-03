'use strict';

// External Modules
import { r as RethinkDB } from 'rethinkdb-ts';
import { run } from '@ChrisTalman/incompatible-identical-types-dependency';

// Types
interface User
{
	id: string;
	username: string;
};

initialise();
async function initialise()
{
	const query = RethinkDB
		.table<User>('Users')
		.insert({id: '123', username: 'Test'});
	const result = await run(query);
	console.log(result);
};
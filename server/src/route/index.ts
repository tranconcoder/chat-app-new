import authRoute from './authRoute';
import homeRoute from './homeRoute';

import type { Application } from 'express';

function handleRoute(app: Application) {
	app.use('/auth', authRoute);
	app.use('/', homeRoute);
}

export default handleRoute;

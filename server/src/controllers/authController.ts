import authConfig from '../config/authConfig';
import https from 'https';
import url from 'url';

import type { Request, Response, NextFunction } from 'express';

class AuthController {
	public login(req: Request, res: Response) {
		console.log(authConfig.authorizationUrl);

		res.writeHead(301, { Location: authConfig.authorizationUrl });
		res.end();
	}

	public logout(req: Request, res: Response) {
		// Build the string for the POST request
		const postData = 'token=' + req.query.accessToken || '';

		// Options for POST request to Google's OAuth 2.0 server to revoke a token
		const postOptions = {
			host: 'oauth2.googleapis.com',
			port: '443',
			path: '/revoke',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': Buffer.byteLength(postData),
			},
		};

		// Set up the request
		const postReq = https.request(postOptions, function (res) {
			res.setEncoding('utf8');
			res.on('data', (d) => {
				console.log('Response: ' + d);
			});
		});

		postReq.on('error', (error) => {
			console.log(error);
		});

		// Post the request with data
		postReq.write(postData);
		postReq.end();
	}

	public async loginSuccess(req: Request, res: Response) {
		const oauth2Client = authConfig.oauth2Client;

		const q: { code?: string } = url.parse(req.url, true).query;

		if (q.code) {
			const { tokens } = await oauth2Client.getToken(q.code);
			oauth2Client.setCredentials(tokens);

			console.log(tokens);
		}

		res.end();
	}
}

export default new AuthController();

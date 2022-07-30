import authConfig from '../config/authConfig';

import type { Request, Response } from 'express';

class Home {
	public async homePage(req: Request, res: Response) {
		res.json('home page');
	}

	public async getToken(req: Request, res: Response) {
		const oauth2Client = authConfig.oauth2Client;

		oauth2Client.refreshAccessToken();

		res.json(await oauth2Client.getAccessToken());
	}
}

export default new Home();

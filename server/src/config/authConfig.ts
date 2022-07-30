import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

class AuthConfig {
	public readonly oauth2Client = new google.auth.OAuth2(
		"187885016666-i1nbtp9pn6lgv152t430kt68hh0d7gd1.apps.googleusercontent.com",
		"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",
		'http://localhost:8080/auth/login-success'
	);

	public readonly scopes = [
		'https://www.googleapis.com/auth/drive.metadata.readonly',
	];

	public readonly authorizationUrl = this.oauth2Client.generateAuthUrl({
		access_type: 'offline',
		response_type: 'code',
		scope: this.scopes,
		include_granted_scopes: true,
	});
}

export default new AuthConfig();

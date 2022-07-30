import express from 'express';
import authController from '../controllers/authController';

const authRoute = express.Router();

authRoute.get('/login', authController.login);
authRoute.get('/logout', authController.logout);
authRoute.use('/login-success', authController.loginSuccess);

export default authRoute;

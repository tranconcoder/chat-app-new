import express from 'express';
import homeController from '../controllers/homeController';

const homeRoute = express.Router();

homeRoute.get('/token', homeController.getToken);
homeRoute.get('/', homeController.homePage);

export default homeRoute;

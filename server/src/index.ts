import dotenv from 'dotenv';
import express from 'express';
import handleRoute from './route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

handleRoute(app);

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`));

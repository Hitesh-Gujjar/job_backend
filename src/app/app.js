import express from 'express';
import apiRoutes from '../route/route.js';
import cors from 'cors';

 const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(apiRoutes);

export default app


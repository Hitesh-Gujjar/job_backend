import express from 'express';
import adminRout from './partial/admin.route.api.js'
import clientRoute from './partial/client.route.api.js'
import cors from 'cors';

 const app = express();

app.use(express.json());
app.use(cors({ origin: '*'}));
app.use(adminRout);
app.use(clientRoute);

export default app


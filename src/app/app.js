import express from 'express';
import apiRoutes from '../route/route.js';
import cors from 'cors';

 const app = express();
//  app.use('/job', (req, res) => {
//     return res.status(200).json({ "messa": "gdfdgasdfg" })
// })

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(apiRoutes);

export default app


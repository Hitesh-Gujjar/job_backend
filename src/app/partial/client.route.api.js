import express from 'express';
import clientroute from '../../route/ClientUI/getjoblist.js'

const router = express.Router();

router.use(
    '/client/ui',
    clientroute
);

export default router; 
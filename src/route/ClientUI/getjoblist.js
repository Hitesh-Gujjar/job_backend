import express from 'express';
import {getClientjobList} from '../../controller/client-controller/job-list-controller.js';
const router = express.Router();

router.get(
    '/job-list',
    getClientjobList
);

export default router; 
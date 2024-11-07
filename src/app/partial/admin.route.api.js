import express from 'express';
import { adminUsersRoutes } from '../../route/admin/admin-users.js'
import jobRoutes from '../../route/jobs-route/jobs.js'
const  router = express.Router();

router.use(
    '/admin/user/job',
    jobRoutes
);

router.use(
    '/admin/user',
    adminUsersRoutes
);

export default router; 
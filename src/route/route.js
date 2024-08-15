import express from 'express';
import  {adminUsersRoutes}  from './admin/admin-users.js'
import  jobRoutes from '../route/jobs-route/jobs.js'
const router = express.Router();

//admin routes;

router.use('/job-portal/admin/user/job', jobRoutes);
router.use('/job-portal/admin/user', adminUsersRoutes);

export default router; 
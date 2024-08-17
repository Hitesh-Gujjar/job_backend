import express from 'express';
import { createAdminUser, loginAdminUser } from '../../controller/admin-controller/admin-user-controller.js';
import { validator } from '../../middleware/validator.middleware.js';
import { adminValidation } from '../../Validations/admin-user.validation.js';

const router = express.Router();

router.post(
    '/create',
    validator(adminValidation.createAdminUser),
    createAdminUser
);

router.post(
    '/login',
    loginAdminUser
);

const adminUsersRoutes = router

// export default adminUsersRoutes
export { adminUsersRoutes };

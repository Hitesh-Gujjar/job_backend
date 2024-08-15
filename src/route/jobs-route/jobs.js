import express from 'express';
import { createJob, jobList } from "../../controller/jobs-controller/jobs.js";
import { authenticatedRequest } from "../../middleware/auth.admin.middleware.js";
import { validator } from "../../middleware/validator.middleware.js";
import { jobValidation } from "../../Validations/jobs.validation.js";

const router = express.Router();

router.post(
    "/create",
    authenticatedRequest,
    validator(jobValidation.createJob),
    createJob
);

router.get(
    "/list/:user_id",
    authenticatedRequest,
    jobList
);

router.get(
    "/list/:user_id",
    jobList
);

const jobRoutes = router;

// export default adminUsersRoutes
export default jobRoutes;

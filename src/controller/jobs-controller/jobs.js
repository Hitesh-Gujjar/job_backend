// const jobModel = require('../../modal/job-list/job-modal');

import { jobModal } from '../../modal/job-list/job-modal.js'


const createJob = async (req, res) => {
    const {
        userId,
        company_name,
        designation,
        job_title,
        email, contact_no,
        gender,
        isActive,
        industry_type,
        role,
        description_company,
        key_skill,
    } = req.body;

    const creat_jobs = {
        userId, company_name, designation, job_title, email, contact_no, gender, isActive, industry_type, role, description_company, key_skill
    };

    const create_jobs = await jobModal.create(creat_jobs);
    if (create_jobs) {
        return res.status(200).json({
            staus: true,
            message: 'Job create successfully',
            data: create_jobs,
        });
    } else {
        return res.status(200).json({
            staus: false,
            message: 'Something went wrong',
            data: create_jobs,
        });
    }


};

const jobList = async (req, res) => {
    const userId = req?.params?.user_id;

   
    
    const getAllJobs = await jobModal.find({userId});

    if (getAllJobs) {
        return res.status(200).json({
            staus: true,
            message: 'Job list retrive sucessfully',
            data: getAllJobs,
        });
    } else {
        return res.status(200).json({
            staus: true,
            message: 'Something went wrong',
            data: [],
        });
    }

};

const inActiveJob = (req, res) => {

};

const activeJob = (req, res) => {

};

export { createJob, jobList, inActiveJob, activeJob };
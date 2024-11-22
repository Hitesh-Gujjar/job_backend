import { jobModal } from "../../modal/job-list/job-modal.js";

const getClientjobList = async (req, res) => {
    const userId = req?.params?.user_id;

    const getAllJobs = await jobModal.find().sort({ createdAt: -1 });

    if (getAllJobs) {
        return res.status(200).json({
            status: true,
            message: 'Job list retrive sucessfully',
            data: getAllJobs,
        });
    } else {
        return res.status(200).json({
            status: true,
            message: 'Something went wrong',
            data: [],
        });
    }

};

export { getClientjobList };
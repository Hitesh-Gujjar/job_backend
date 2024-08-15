
import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin-user',
        required: true
    },
    name: {
        type: String,
        require: [true, "Kindly enter the name"]
    },
    company_name: {
        type: String,
        require: [true, "Kindly enter the name"]
    },
    designation: {
        type: String,

        require: [true]
    },
    job_title: {
        type: String,
        require: [true, "Kindly enter the name"]
    },
    email: {
        type: String,
        require: [true, "Kindly enter the email"]
    },
    contact_no: {
        type: Number,
        require: [true, "kindly enter the number"]
    },
    gender: {
        type: String,
        require: [true, "Kindly enter the gender"]
    },
    isActive: {
        type: Boolean,
        default: false
    },
    industry_type: {
        type: String,
    },
    role: {
        type: String
    },
    description_company: {
        type: String,
        require: [true, "Kindly enter the name"]
    },
    key_skill: {
        type: String
    },
},
    {
        timestamps: true,
    }
);

const jobModal = mongoose.model("job-list", jobsSchema);

export { jobModal };

import Joi from 'joi';


class jobValidation {
    static createJob = {
        body: Joi.object().keys({
            userId: Joi.string().required(),
            company_name: Joi.string().required(),
            designation: Joi.string().required(),
            experience:Joi.number(),
            job_title: Joi.string().required(),
            email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                'string.email': 'Invalid email format.',
                'string.empty': 'Email is required.',
            }),
            contact_no: Joi.string().required(),
            gender: Joi.string().required(),
            industry_type: Joi.string().required(),
            role: Joi.string().required(),
            description_company: Joi.string().required(),
            key_skill: Joi.string().required(),
            isActive: Joi.boolean().required()
        })
    }
}

export { jobValidation };
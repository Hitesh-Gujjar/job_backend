import Joi from 'joi';


class adminValidation {
    static createAdminUser = {
        body: Joi.object().keys({
            company_name: Joi.string().required(),
            company_uername: Joi.string().required(),
            company_contact: Joi.string().required(),
            company_email: Joi.string().required(),
            password: Joi.string().required(),
        })
    }
}

export {adminValidation}
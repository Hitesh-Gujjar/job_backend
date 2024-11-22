
import Joi from "joi";
// import { Request, Response, NextFunction } from "express";

/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {});
};


const validator = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ["params", "query", "body"]);

    const object = pick(req, Object.keys(validSchema));

    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: "key" }, abortEarly: false })
        .validate(object);

    if (error) {
        const errorMessage = error.details
            .map((details) => ({ label: details, message: details.message.replace(/"/g, "") }))
        return res.status(200).json({
            status: false,
            message: 'Validation error',
            error: errorMessage
        });
    }
    Object.assign(req, value);
    return next();
};

export { validator }

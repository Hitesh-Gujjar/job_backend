import adminUserModel from '../../modal/admin-modal/admin-user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { responseCall } from '../../helper/comman.js'
import { sendMail } from '../../mail/nodemailer.js';

const verifyToken = async (req, res) => {
    try {
        let token = req.headers.authorization
        const secret_key = process.env.SECRET_KEY_MY

        if (token) {
            token = token.split(" ")[1]
            let isValidToken = jwt.verify(token, secret_key)

            if (isValidToken) {
                res.status(200).json({ status: true, message: "Token is valid" })
            } else {
                res.status(200).json({ status: false, message: "session Expire" })
            }

        } else {
            res.status(200).json({ status: false, message: "session Expire" })
        }
    } catch {
        res.status(200).json({ status: false, message: "session Expire" })
    }


}

export default verifyToken;
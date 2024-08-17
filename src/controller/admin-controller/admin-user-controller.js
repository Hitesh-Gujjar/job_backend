import adminUserModel from '../../modal/admin-modal/admin-user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { responseCall } from '../../helper/comman.js'
import { sendMail } from '../../mail/nodemailer.js';

const createAdminUser = async (req, res) => {
    const { company_name, company_contact, company_email, company_uername, password } = req.body;

    let data = {}
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (company_name || company_contact || company_email || password) {
        data['company_name'] = company_name
        data['company_contact'] = company_contact
        data['company_email'] = company_email
        data['company_uername'] = company_uername
        data['password'] = hashedPassword
    } else {
        res.send('Need to field mendetory field')
    }

    const checkIsDuplicate = await adminUserModel.findOne({ company_email });

    if (!checkIsDuplicate?.id) {
        const createAdminUser = await adminUserModel.create(data)
        sendMail();
        if (createAdminUser) {
            res.status(200).json({
                status: true,
                message: "Sing-up successfully"
            })

        };
    } else {
        res.status(200).json({
            status: false,
            message: "Email is already exits"
        })

    }
};

const loginAdminUser = async (req, res) => {
    const { userId, password } = req.body
    const company_email = userId
    const checkIsUser = await adminUserModel.findOne({ company_email });
    const secret_key = process.env.SECRET_KEY_MY

    if (checkIsUser?.id) {
        const IsValidAuth = await bcrypt.compare(password, checkIsUser.password);
        const userData = {
            name: checkIsUser.company_name,
            email: checkIsUser.company_email,
            id: checkIsUser.id,
            userId: checkIsUser.company_uerId,
            contact: checkIsUser.company_contact
        }

        if (IsValidAuth) {
            const token = jwt.sign(userData, secret_key, { expiresIn: '1h' });
            return res.status(200).json({
                staus: true,
                message: 'Login successfully',
                data: checkIsUser,
                token: token
            });
        } else {
            return res.status(200).json({
                status: false,
                message: 'requested is unAuthorise',
                data: null
            });

        }
    } else {
        return res.status(200).json({
            status: false,
            message: 'requested is unAuthorise',
            data: null
        });

    }

}

export { createAdminUser, loginAdminUser };
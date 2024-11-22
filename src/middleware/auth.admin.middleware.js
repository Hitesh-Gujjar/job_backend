
import jwt from 'jsonwebtoken'

const authenticatedRequest = async (req, res, next) => {
    try {
        let token = req.headers.authorization
        const secret_key = process.env.SECRET_KEY_MY

        if (token) {
            token = token.split(" ")[1]
            let user = jwt.verify(token, secret_key)
            console.log("user", user)
        } else {
            res.status(401).json({status: false, message: "Unauthorized request" })
        }

        next();
    } catch {
        res.status(401).json({status: false, message: "Unauthorized request" })
    }

}

export { authenticatedRequest }



const responseCall = (
    res,
    res_code = 200,
    success = false,
    message = '',
    data = null,
    response_code,
) => {
    if (errors) {
        return res.status(res_code).json({
            success,
            message,
            data,
            response_code,
            errors,
        })
    }

    return res.status(res_code).json({
        success,
        message,
        data,
        response_code,
    })
}

export {responseCall};
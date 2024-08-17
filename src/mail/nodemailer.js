import nodeMailer from 'nodemailer'

const mail = nodeMailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: 'gujjarh85@gmail.com',
        pass: 'kuss vjjr cbkv efsr'
    }
});

const sendMail = async (mailDetails) => {
         mail.sendMail(mailDetails, () => {
            console.log("Hello Hitesh mail send succesfully")
        })

}

export { sendMail }
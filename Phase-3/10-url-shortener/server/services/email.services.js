import { Resend } from "resend"

const resend = new Resend(process.env.resend_api)

export async function sendEmail(userData) {
    const {data, error} = await resend.emails.send({
        from: "shortner@atifuddin.dev",
        to: userData.to,
        subject: userData.subject,
        html: userData.html,
        text: userData.text
    })
    if (error) {
        console.log({error})
        return false
    }
    console.log({data});
    return true
}

export const sendOtp = async(email,otp) =>{
    const html = `<p>OTP:${otp}<p>`
    const text = `OTP:${otp}`
    return await sendEmail({
        to:email,
        subject: 'OTP Verification || Url Shortener',
        html,
        text
    })
}
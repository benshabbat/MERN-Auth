import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient,sender } from "./mailtrap.config.js"


export const sendVerificationEmail  = async(email,verificationToken)=>{
    const recipient = [{email}]
    try{
        const res = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"email verification"
        })
        console.log("email sent successfully",res)
    }catch(error){
        throw new Error(`Error sending verification email:${error}`)
    }
}
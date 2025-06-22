const { Resend } = require('resend')
const dotenv = require("dotenv");
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY)

async function resendSendEmail( email, html, subject ) {
  const response = await resend.emails.send({
    from: process.env.EMAIL_SERVER,
    to: email,
    subject,
    html
  })
  if (response.error) {
    throw new Error(response.error.message)
  }
  return response.data
}

module.exports = {
  resendSendEmail
}
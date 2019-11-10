import sendgridTransport from 'nodemailer-sendgrid-transport'

// Use only one Sendgrid configuration
const sendgridAuth = process.env.SENDGRID_API_KEY
  ? { api_key: process.env.SENDGRID_API_KEY }
  : {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }

const sendgrid = sendgridTransport({
  auth: { ...sendgridAuth }
})

// Your private SMTP server/provider
const privateSmtp = {
  host: process.env.MAIL_PRIVATE_HOST,
  port: process.env.MAIL_PRIVATE_PORT || 587,
  secure: process.env.MAIL_PRIVATE_SECURE || false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_PRIVATE_USER,
    pass: process.env.MAIL_PRIVATE_PASSWORD
  }
}

// For this to work you need to enable Less secure app access
// in your Gmail account.
// More info: https://nodemailer.com/usage/using-gmail/
const gmail = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD
  }
}

export { sendgrid, privateSmtp, gmail }

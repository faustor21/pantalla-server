import nodemailer from 'nodemailer'
import * as Sqrl from 'squirrelly'
import path from 'path'
import jwt from 'jsonwebtoken'

import { gmail } from './transport'

const transporter = nodemailer.createTransport(gmail)

const templatesPath = path.join(__dirname, './templates')
const templates = {
  verification: 'verification.html',
  welcome: 'welcome.html',
  resetPassword: 'reset-password.html'
}

// Time for the verification token to expires in
const VERIFICATION_EXPIRES_IN = '7 days'
const PASSWORD_RESET_EXPIRES_IN = '5 minutes'

/**
 * Send a welcome email to the user upon account creation
 *
 * @param {string} userName - The newly created user's name
 * @param {string} email - The newly created user's email
 */
const welcome = async (userName, email) => {
  const data = {
    pageTitle: `Welcome ${userName} from ${process.env.COMPANY_NAME}`,
    welcomeTitle: 'We welcome you!',
    companyName: process.env.COMPANY_NAME,
    appName: process.env.APP_NAME,
    title: 'This is great!',
    userName, // User's name
    email
  }
  const html = Sqrl.renderFile(`${templatesPath}/${templates.welcome}`, data)
  const mail = {
    to: email,
    subject: `Welcome ${userName} by the ${process.env.APP_NAME} team`,
    text: `Thanks for signing up for ${process.env.APP_NAME}!`,
    html
  }

  const result = await sendMail(mail)

  return result
}

/**
 * Send a verification email to the recently created user
 * so the user can verify his/her account a make sure is not
 * a bot or something like it.
 *
 * @param {string} userName - The newly created user's name
 * @param {string} email - The newly created user's email
 */
const verifyAccount = async (userName, email) => {
  const data = {
    pageTitle: 'Verify Your Account',
    companyName: process.env.COMPANY_NAME,
    appName: process.env.APP_NAME,
    title: 'please verify your email address',
    userName, // User's name
    email
  }

  const token = jwt.sign({ email }, process.env.MAIL_JWT_SECRET, {
    expiresIn: VERIFICATION_EXPIRES_IN
  })
  data.actionUrl = `${process.env.APP_SERVER}/verify/${token}`

  const html = Sqrl.renderFile(
    `${templatesPath}/${templates.verification}`,
    data
  )
  const mail = {
    to: email,
    subject: `Verify your account  --- ${process.env.COMPANY_NAME}`,
    text: `Thanks for signing up for ${process.env.APP_NAME}! Please verify your email.`,
    html
  }

  const result = await sendMail(mail)

  return result
}

const resetPassword = async (userName, email) => {
  const data = {
    pageTitle: 'Reset Password',
    companyName: process.env.COMPANY_NAME,
    appName: process.env.APP_NAME,
    title: 'Please confirm your email address',
    userName, // User's name
    email
  }

  const token = jwt.sign({ email }, process.env.MAIL_JWT_SECRET, {
    expiresIn: PASSWORD_RESET_EXPIRES_IN
  })
  data.actionUrl = `${process.env.APP_SERVER}/reset/${email}/password/${token}`
  const html = Sqrl.renderFile(
    `${templatesPath}/${templates.resetPassword}`,
    data
  )
  const mail = {
    to: email,
    subject: `Reset Password for ${email}`,
    text: `We have received a Password Reset on your behalf! Please confirm your ${email}.`,
    html
  }

  const result = await sendMail(mail)

  return { result, token, expires: PASSWORD_RESET_EXPIRES_IN }
}

const sendMail = mail => {
  const from = mail.from ? mail.from : process.env.MAIL_FROM_DEFAULT
  return new Promise((resolve, reject) => {
    transporter.sendMail({ ...mail, from }, (err, info) => {
      if (err) return reject(new Error(err.message))
      resolve({ message: 'Email successfully sent', info })
    })
  })
}

export default { verifyAccount, welcome, resetPassword }

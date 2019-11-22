import path from "path"
import jwt from "jsonwebtoken"
import express from "express"

const htmlPagesPath = path.join(__dirname, "public")

// This is the place where to put "Restricted" HTML pages
// to be send upon request
const htmlPagesRestrictedPath = path.join(__dirname, "restricted")

export default (app, prisma) => {

  app.use(express.static(htmlPagesPath))

  app.get("/verify/:token", async (req, res) => {
    const { token } = req.params
    try {
      const { email } = await jwt.verify(token, process.env.MAIL_JWT_SECRET)
      const exists = await prisma.$exists.user({ email })
      if (!exists)
        return res.status(400).send({
          error: {
            message: "Account could not be verified, please contact support!"
          }
        })

      const accountVerified = await prisma.$exists.user({
        email,
        verified: true
      })
      if (accountVerified)
        res.status(400).send({
          error: {
            message:
              "This link has expired or the account has already been verified"
          }
        })

      await prisma.updateUser({ data: { verified: true }, where: { email } })
      res.redirect(`/verify/${email}/successful`)
    } catch (e) {
      res.status(400).send({ error: { ...e } })
    }
  })

  app.get("/verify/:email/successful", (req, res) => {
    res.sendFile(`${htmlPagesPath}/verification-successful.html`)
  })

  app.get("/reset/:email/password/:token", async (req, res, next) => {
    const { email, token } = req.params
    try {
      const decoded = await jwt.verify(token, process.env.MAIL_JWT_SECRET)
      const userExists = await prisma.$exists.user({ email })
      if (decoded.email !== email || !userExists)
        throw new Error(
          "Credentials do not match, the password cannot be reset."
        )

      const user = await prisma.user({ email })
      const [resetPasswordToken] = await prisma.resetPasswordTokens({
        where: {
          user: { id: user.id },
          AND: { token }
        }
      })

      console.log('resetPasswordToken', resetPasswordToken)
      if (resetPasswordToken)
        res.sendFile(`${htmlPagesRestrictedPath}/reset-password.html`)
      else {
        await prisma.updateResetPasswordToken({
          data: { revoke: true },
          where: { token }
        })
        res.redirect(`/invalid.html`)
      }
    } catch (err) {
      console.error("The error", err)
      await prisma.updateResetPasswordToken({
        data: {
          revoke: true
        },
        where: {
          token: token
        }
      })
      res.status(400).redirect(`/invalid.html`)
    }
  })
}

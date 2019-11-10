import path from 'path'
import jwt from 'jsonwebtoken'

const htmlPagesPath = path.join(__dirname, 'public')

export default (app, prisma) => {
  app.get('/verify/:token', async (req, res) => {
    const { token } = req.params
    try {
      const { email } = await jwt.verify(token, process.env.MAIL_JWT_SECRET)
      const exists = await prisma.$exists.user({ email })
      if (!exists)
        return res.status(400).send({
          error: {
            message: 'Account could not be verified, please contact support!'
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
              'This link has expired or the account has already been verified'
          }
        })

      await prisma.updateUser({ data: { verified: true }, where: { email } })
      res.redirect(`/verify/${email}/successful`)
    } catch (e) {
      res.status(400).send({ error: { ...e } })
    }
  })

  app.get('/verify/:email/successful', (req, res) => {
    res.sendFile(`${htmlPagesPath}/verification-successful.html`)
  })

  app.get('/reset/:email/password/:token', async (req, res) => {
    const { email, token } = req.params
    try {
      // const decoded = await jwt.verify(token, process.env.MAIL_JWT_SECRET)
      // if (decoded.email !== email) throw new Error('Password cannot be reset')
      const user = await prisma.user({ email })
      // console.log('user', user)
      const [ resetPasswordToken ] = await prisma.resetPasswordTokens({ where: {
        user: { id: user.id},
        AND: { token } 
      }})
      // const resetPasswordToken = await prisma.resetPasswordTokens( {
      //   token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhdXN0b3IyMUBnbWFpbC5jb20iLCJpYXQiOjE1NzI5ODg3NDcsImV4cCI6MTU3Mjk4OTA0N30.EzJ01G-zF1nh38cfxo3ybQcDJ6XFWA6H0_0fH9EMWJY"
      // })      
      console.log('resetPasswordToken', resetPasswordToken)      
      if (resetPasswordToken)
        res.sendFile(`${htmlPagesPath}/reset-password.html`)
      else  {
        await prisma.updateResetPasswordToken({ data: { revoke: true }, where: { token } })
        res.sendFile(`${htmlPagesPath}/novalid-error.html`)
      }
    } catch (e) {
      console.error(e)
      res.sendFile(`${htmlPagesPath}/novalid-error.html`)
    }
  })
}

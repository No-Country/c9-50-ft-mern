const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

transporter.verify().then(() => {
  console.log('ready for send emails')
}
)

const mailOptions = (option, userEmail, htmlTemplate) => {
  if (option === 'activation') {
    return {
      from: process.env.GMAIL_ACCOUNT,
      to: userEmail,
      subject: 'Confirmación de Cuenta',
      html: htmlTemplate
    }
  }
  if (option === 'renewPass') {
    return {
      from: process.env.GMAIL_ACCOUNT,
      to: userEmail,
      subject: 'Cambio de Contraseña',
      html: htmlTemplate
    }
  }
}

module.exports = { transporter, mailOptions }

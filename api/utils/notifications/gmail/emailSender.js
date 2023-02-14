const { createTransport } = require('nodemailer')

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD
  }
})

const mailOptions = (option, userEmail, htmlTemplate) => {
  if (option === 'activation') {
    return {
      from: process.env.GMAIL_ACCOUNT,
      to: userEmail,
      subject: 'Confirmación de Cuenta',
      html: htmlTemplate
    }
  } else if (option === 'renewPass') {
    return {
      from: process.env.GMAIL_ACCOUNT,
      to: userEmail,
      cc: process.env.GMAIL_ACCOUNT,
      subject: 'Cambio de Contraseña',
      html: htmlTemplate
    }
  }
}

module.exports = { transporter, mailOptions }

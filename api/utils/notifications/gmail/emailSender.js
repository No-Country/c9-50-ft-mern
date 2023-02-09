const { createTransport } = require('nodemailer')

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.GMAIL_ACCOUNT,
    pass: process.env.GMAIL_PASSWORD
  }
})

const gmailOptions = (emailSubject, htmlTemplate) => {
  return {
    from: process.env.GMAIL_ACCOUNT,
    to: ['someAccount@gmail.com'],
    subject: emailSubject,
    html: htmlTemplate
  }
}

const sendGmail = (subject, htmlTemplate) => {
  try {
    const mailOptions = gmailOptions(
      subject,
      htmlTemplate
    )
    const answer = transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendGmail

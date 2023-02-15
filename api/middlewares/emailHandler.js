const { transporter, mailOptions } = require('../utils/notifications/gmail/emailSender')
const { emailNewContact } = require('../static/emailNewContact')
const { emailRecoverPassword } = require('../static/emailRecoverPassword')

async function sendNewPass(email, newPassword) {
  try {
    const data = emailRecoverPassword(newPassword)
    await transporter.sendMail(mailOptions('renewPass', email, data))
  } catch (error) {
    console.log('Error al leer el archivo HTML:', error)
  }
}

async function sendNewUser(email, userName) {
  try {
    const data = emailNewContact(userName)
    await transporter.sendMail(mailOptions('activation', email, data))
  } catch (error) {
    console.log('Error al leer el archivo HTML:', error)
  }
}

module.exports = { sendNewPass, sendNewUser }

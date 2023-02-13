const fs = require('fs')
const { transporter, mailOptions } = require('../utils/notifications/gmail/emailSender')

function sendNewPass(email) {
  fs.readFile('../static/email.html', 'utf8', (error, data) => {
    if (error) {
      console.log('Error al leer el archivo HTML:', error)
    } else {
      transporter.sendMail(mailOptions('renewPass', email, data))
    }
  })
}

function sendNewUser(email) {
  fs.readFile('../static/emailNewContact.html', 'utf8', (error, data) => {
    if (error) {
      console.log('Error al leer el archivo HTML:', error)
    } else {
      transporter.sendMail(mailOptions('activation', email, data))
    }
  })
}

module.exports = { sendNewPass, sendNewUser }

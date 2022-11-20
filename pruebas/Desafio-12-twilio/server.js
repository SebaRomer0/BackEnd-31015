// wovbwbnywwhxeeci

const { createTransport } = require('nodemailer')

const mail = 'sebastian.homero123@gmail.com'

const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: mail,
        pass: 'wovbwbnywwhxeeci'
    },
    tls: {
        rejectUnauthorized: false
      }
});

const mailOptions = {
    from: 'Server Node JS',
    to: mail,
    subject: 'Mail de prueba desde Node',
    html: `
        <h1 style="color: blue;">Funciono la Vayna jajajajajaja. SR papa !! </h1>
    `
}

transporter.sendMail(mailOptions)
    .then(r => console.log(r))
    .catch(e => console.error(e))
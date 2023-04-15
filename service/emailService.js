const nodemailer = require('nodemailer');
const path = require('path');
const pug = require('pug');
const { convert } = require('html-to-text');

class EmailService {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.from = `Contact API noreply <${process.env.META_SEND_FROM}>`;
  }

  //   #initTransport - privat method
  _initTransport() {
    return nodemailer.createTransport({
      host: 'smtp.meta.ua',
      port: 465,
      secure: true,
      auth: {
        user: process.env.META_SEND_FROM,
        pass: process.env.META_PASSWORD,
      },
    });
  }

  async _send(template, subject) {
    const html = pug.renderFile(
      path.join(__dirname, '..', 'views', 'emails', `${template}.pug`),
      {
        to: this.to,
        url: this.url,
        subject,
      }
    );

    const emailConfig = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    await this._initTransport().sendMail(emailConfig);
  }

  async sendHello() {
    await this._send('hello', 'Welcome to our great service!!');
  }

  async sendVerification() {
    await this._send('verify', 'Verify your email..');
  }
}

module.exports = EmailService;

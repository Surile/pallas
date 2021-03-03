// 邮件发送
const nodemailer = require('nodemailer')

module.exports = function sendMail({ email, code }) {
  // 创建一个SMTP服务
  let transporter = nodemailer.createTransport({
    host: 'smtp.ym.163.com',
    port: 994,
    secure: true,
    secureConnection: true,
    auth: {
      user: 'notify@surile.cn',
      pass: '6M^66LJ38Ff^Rb',
    },
  })

  const title = '请输入验证码 ' + code + ' 完成绑定邮箱'

  const content =
    '<div style="font-size:18px;">尊敬的用户，您好！</div>' +
    '<div>您正在进行邮箱绑定，若不是您本人操作，请忽略此邮件。</div>' +
    '如下是您的注册验证码:<br />' +
    '<span style="background:#009688; padding:10px; border:1px solid #009688; color:#ffffff; font-size:30px; display:block; margin:10px 0 10px 0;">' +
    code +
    '</span>' +
    '<div>请注意: 为了保障您帐号的安全性，验证码5分钟后过期，请尽快验证!</div>'

  // 发送的内容设置
  let options = {
    from: '"梦幻" <notify@surile.cn>',
    to: email,
    subject: title,
    html: content,
  }

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log('fail: ' + err)
    } else {
      console.log('Message sent: %s', info.messageId)
    }
  })
}

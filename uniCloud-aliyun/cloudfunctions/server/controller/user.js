const { Controller } = require('uni-cloud-router')
const sendMail = require('../common/email')

module.exports = class UserController extends Controller {
  // 注册
  register() {
    return this.service.user.register(this.ctx.data)
  }
  // 登录
  login() {
    return this.service.user.login()
  }
  // 发送验证码
  sendCode() {
    const { username, type } = this.ctx.data

    const code = Math.random().toString().slice(-6)

    sendMail({ email: username, code })

    return this.service.user.sendEmailCode({ email: username, code, type })
  }
  // 绑定邮箱
  bindEmail() {
    return this.service.user.bindEmail()
  }
}

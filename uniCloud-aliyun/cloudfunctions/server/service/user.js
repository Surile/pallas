const Service = require('uni-cloud-router').Service
const uniID = require('uni-id')

const emailReg = /^\S+?@\S+?\.\S+?$/

module.exports = class UserService extends Service {
  // 注册逻辑
  async register(data) {
    const { username, password, confrimPassword } = data

    if (!username || !password || !confrimPassword) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    if (!emailReg.test(data.username)) {
      return {
        code: 70002,
        message: '邮箱不正确',
      }
    }
    if (data.password !== data.confrimPassword) {
      return {
        code: 70002,
        message: '密码不一致',
      }
    }
    const res = await uniID.register({
      username: data.username,
      password: data.password,
    })
    return res
  }
  // 登录逻辑
  async login(data) {
    const { username, password } = data

    if (!username || !password) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    if (!emailReg.test(username)) {
      return {
        code: 70002,
        message: '邮箱不正确',
      }
    }

    return await uniID.login(data)
  }
  // 发送验证码逻辑
  async sendEmailCode(data) {
    const { email, type, code } = data

    if (!email || !type || !code) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    if (!emailReg.test(email)) {
      return {
        code: 70002,
        message: '邮箱不正确',
      }
    }

    const res = await uniID.setVerifyCode({
      email,
      code,
      type,
      expiresIn: 300,
    })

    return res
  }
  // 绑定邮箱逻辑
  async bindEmail(code) {
    const auth = this.ctx.auth
    const res = await uniID.bindEmail({
      uid: auth.id,
      email: auth.email,
      code,
    })
    return res
  }
}

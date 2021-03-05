/*
 * @Author: 夜雨
 * @Date: 2021-03-04 18:36:09
 * @Description: 图片服务
 */
const { Controller } = require('uni-cloud-router')

module.exports = class ImageController extends Controller {
  getList() {
    return this.service.image.getList(this.ctx.data)
  }
  add() {
    return this.service.image.add(this.ctx.data)
  }
  remove() {
    const { id } = this.ctx.data
    return this.service.image.remove(id)
  }
  detail() {
    const { id } = this.ctx.data
    return this.service.image.detail(id)
  }
  scan() {
    return this.service.image.scan(this.ctx.data)
  }
}

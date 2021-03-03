/*
 * @Author: 夜雨
 * @Date: 2021-03-04 18:34:01
 * @Description: Do not edit
 */
const Service = require('uni-cloud-router').Service

module.exports = class HelloService extends Service {
  // 数据库
  _collection() {
    return this.db.collection('list')
  }
  // 获取图片列表
  async getList(data) {
    const { page, perPage } = data

    if (!page || !perPage) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    const res = await this._collection().count()

    const result = await this._collection()
      .limit(perPage)
      .skip(perPage * page)
      .get()
      
    return {
      data: result.data,
      total: res.total,
    }
  }
  // 添加图片
  add(data) {
    const { url } = data

    if (!url) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    return this._collection().add({ imgSrc: data.url })
  }
  // 删除图片
  remove(id) {
    if (!id) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    return this._collection().doc(id).remove()
  }
  // 获取图片详情
  detail(id) {
    if (!id) {
      return {
        code: 70001,
        message: '输入参数错误',
      }
    }

    return this._collection().doc(id).get()
  }
}

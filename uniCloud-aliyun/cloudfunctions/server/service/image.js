/*
 * @Author: 夜雨
 * @Date: 2021-03-04 18:34:01
 * @Description: Do not edit
 */
const Service = require('uni-cloud-router').Service
const ImageScan = require('../common/baiduAI')

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
  // 图片审核
  async scan(data) {
    const { url } = data
    if (!url) {
      return {
        code: 70001,
        message: '参数不能为空',
      }
    }
    const result = await ImageScan(url)
    console.log('await ImageScan(url)', result)

    if (result.conclusionType === 2) {
      uniCloud.deleteFile({
        fileList: [url],
      })
      return {
        code: 70003,
        message: '该图片已违规，已自动删除',
      }
    }

    return {
      code: 0,
    }
  }
}

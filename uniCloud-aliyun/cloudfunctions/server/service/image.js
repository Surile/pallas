const Service = require('uni-cloud-router').Service

module.exports = class HelloService extends Service {
  // 数据库
  _collection() {
    return this.db.collection('list')
  }
  // 获取图片列表
  async getList(data) {
    const { page, perPage } = data
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
    return this._collection().add({ imgSrc: data.url })
  }
  // 删除图片
  remove(id) {
    return this._collection().doc(id).remove()
  }
  // 获取图片详情
  detail(id) {
    return this._collection().doc(id).get()
  }
  // 上传图片
  async upload(data) {
    const res = await uniCloud.uploadFile({
      cloudPath: 'file.jpg',
      fileContent: data,
    })
    return res
  }
}

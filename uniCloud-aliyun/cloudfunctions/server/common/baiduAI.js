const AipContentCensorClient = require('baidu-aip-sdk').contentCensor

// 设置APPID/AK/SK
const APP_ID = '23744809'
const API_KEY = 'yRGAZUmx1qlZnnRxZtNraj1Q'
const SECRET_KEY = 'rKp9hfjlVOkbl6DXZYhZ3GSHIRNdrPxw'

const client = new AipContentCensorClient(APP_ID, API_KEY, SECRET_KEY)

module.exports = function ImageScan(url) {
  return new Promise((resolve, reject) => {
    client.imageCensorUserDefined(url, 'url').then(
      function (data) {
        console.log('<imageCensorUserDefined>: ' + data)
        resolve(data)
      },
      function (e) {
        reject(e)
      }
    )
  })
}

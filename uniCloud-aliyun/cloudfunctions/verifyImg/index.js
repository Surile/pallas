'use strict';
const AipContentCensorClient = require("baidu-aip-sdk").contentCensor;

// 设置APPID/AK/SK
const APP_ID = "你的 App ID";
const API_KEY = "你的 Api Key";
const SECRET_KEY = "你的 Secret Key";

const client = new AipContentCensorClient(APP_ID, API_KEY, SECRET_KEY);


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const base64Img = new Buffer(bitmap).toString('base64');
	
	// 图片base64编码调用接口
	client.imageCensorUserDefined(base64Img, 'base64').then(function(data) {
	    console.log('<imageCensorUserDefined>: ' + JSON.stringify(data));
	}, function(e) {
	    console.log(e)
	});
	
	//返回数据给客户端
	return event
};

'use strict';
const uid = require("uid")

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	if(!event){
		return
	}
	
	// uniCloud.uploadFile({
	// 	cloudPath:`${uid}`,
	// 	fileContent:"",
	// 	onUploadProgress:(callback) => {
	// 		console.log(("callback",callback))
	// 	}
	// })
	
	//返回数据给客户端
	return event
};

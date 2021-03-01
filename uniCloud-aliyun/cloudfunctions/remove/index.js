'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event.id)
	
	const db = uniCloud.database()
	
	const collection = db.collection("list")

	const res = collection.doc(event.id).remove()
	
	//返回数据给客户端
	return res
};

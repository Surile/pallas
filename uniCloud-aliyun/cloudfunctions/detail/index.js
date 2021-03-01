'use strict';

// 查看详情
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const db = uniCloud.database()
	
	const dbCmd = db.command

	const res = await db.collection('list').where({
		_id: dbCmd.eq(event.id),
	}).get()
	
	//返回数据给客户端
	return res
};

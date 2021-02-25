<template>
	<BaseLayout>	
		<view class="container">
			<Card>
				<template v-slot:upload>
					<view class="content">
						<view v-if="percent > 0" class="progressBar">
							 <progress :percent="percent" show-info stroke-width="30" activeColor="#009688"/>
						</view>
						<view class="tips-text">选择一个文件上传</view>
						<button v-on:click="onChooseImage" class="upload-btn">立即上传</button>
					</view>
				</template>
				<template v-slot:tips>
					<view class="tips-item">**您的IP是183.193.18.85，请不要上传违规文件！</view>
					<view class="tips-item">**上传无格式限制，当前服务器单个文件上传最大支持<strong>100M</strong>!</view>
					<view class="tips-item">**当前网站已开启视频文件审核，如果上传的是视频文件，需要等待审核通过后才能下载和播放。</view>
				</template>
			</Card>
		</view>
	</BaseLayout>
</template>

<script lang="ts">
import { BaseLayout,Card } from '@/components/index'
	
export default {
	components:{
		BaseLayout,
		Card
	},
	data() {
		return {
			title: 'Hello',
			imgs:[],
			percent:0
		}
	},
	onLoad() {

	},
	methods: {
		onChooseImage(){
			const that = this
			uni.chooseImage({
				sizeType:["original"],
				success: (res) => {
					if(!res.tempFilePaths.length){
						return
					}
					
					res.tempFiles.map(async (item) => {
						that.imgs = await that.onUploadFile(item)
					})
				}
			})
		},
		async onUploadFile(file){
			let result = []
			const _self = this
			const res = await uniCloud.uploadFile({
				filePath:file.path,
				cloudPath:file.name,
				onUploadProgress:(res) => {
					const progress = Math.round((res.loaded * 100) / res.total);
					_self.percent = progress;
					if(progress === 100){
						alert("上传成功")
						uni.navigateTo({
							url:"/pages/detail/index?id=1&name=uniapp"
						})
					}		
				}
			})
			result.push({ url:res.fileID })
			return result
		},
	}
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.container{
	flex: 1;
	.content{
		padding: 100px 30px;
	}
	.upload-container{
		flex: 3 0 0;
		padding: 100px 20px;
		margin-right: 20px;
		border-radius: 2px;
		background-color: #FFFFFF;
		.progressBar{
			width: 100%;
		}
		.tips-text{
			color: #404040;
			font-size: 36px;
			margin-top: 20px;
			margin-bottom: 10px;
			text-align: center;
		}
		.upload-btn{
			color: rgba(255,255,255,.84);
			font-size: 20px;
			text-align: center;
			padding: 0 20px;
			margin-top: 20px;
			background-color: $color-brand;
		}
	}
	.tips-item{
		position: relative;
		display: block;
		padding: 10px 15px;
		margin-bottom: -1px;
		background-color: #fff;
		border: 1px solid #ddd;
		font-size: 14px;
	}
}
</style>

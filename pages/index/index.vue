<template>
	<BaseLayout>	
		<view class="container">
			<view class="ty-row ty-row__align--start">
				<view class="upload-container ty-row ty-row__direction--column ty-row__align--center">
					<view v-if="percent" class="progressBar">
						 <progress :percent="percent" show-info stroke-width="30" activeColor="#009688"/>
					</view>
					<view class="tips-text">选择一个文件上传</view>
					<button v-on:click="onChooseImage" class="upload-btn">立即上传</button>
				</view>
				<view class="tips-container">
					<view class="tips-header">上传提示</view>
					<view class="tips-content">
						<view class="tips-item">**您的IP是183.193.18.85，请不要上传违规文件！</view>
						<view class="tips-item">**上传无格式限制，当前服务器单个文件上传最大支持<strong>100M</strong>!</view>
						<view class="tips-item">**当前网站已开启视频文件审核，如果上传的是视频文件，需要等待审核通过后才能下载和播放。</view>
					</view>
				</view>
			</view>
		</view>
	</BaseLayout>
</template>

<script lang="ts">
import { BaseLayout } from '@/components/index'
	
export default {
	components:{
		BaseLayout
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
	.tips-container{
		flex: 1;
		background-color: #FFFFFF;
		.tips-header{
			color: rgba(255,255,255,.84);
			padding: 10px 15px;
			border-top-left-radius:3px;
			border-top-right-radius:3px;
			background-color: $color-brand;
		}
		.tips-content{
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
	}
}
</style>

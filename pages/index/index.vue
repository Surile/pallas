<template>
	<BaseLayout>	
		<view class="container">
			<button v-on:click="onChooseImage">点击</button>
			<!-- image -->
			<image mode="scaleToFill" v-for="(item,index) in imgs" :key="index" :src="item.url"></image>
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
			imgs:[]
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
			const res = await uniCloud.uploadFile({
				filePath:file.path,
				cloudPath:file.name
			})
			result.push({ url:res.fileID })
			return result
		}
	}
}
</script>

<style lang="scss">
	
</style>

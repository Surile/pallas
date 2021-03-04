<template>
	<BaseLayout>
		<view class="container">
			<view class="ty-row">
				<view class="upload-container"></view>
				<view class="tips-container"></view>
			</view>
		</view>
	</BaseLayout>
</template>

<script lang="ts">
import { BaseLayout } from '@/components'
	
export default {
	components:{
		BaseLayout
	},
	data(){
		return {
			list:[],
			page:1,
			perPage:10
		}
	},
	mounted() {
		this.onFetchList()
	},
	methods:{
		onFetchList(){
			uniCloud.callFunction({
				name:"server",
				data:{
					action:"image/getList",
					data:{
						page:this.page,
						perPage:this.perPage
					}
				}
			}).then(data => {
				console.log("list",data)
			})
		}
	},
}
</script>

<style lang="scss">
.container{
	background-color: #FFFFFF;
	.upload-container{
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 2px;
	}
}
</style>

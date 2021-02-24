<template>
	<view class="navbar-container ty-row ty-row__direction--row ty-row__align--center">
		<view class="navbar-header">
			彩虹云图床
		</view>
		<view class="navbar-collapse collapse navbar-responsive-collapse ty-row ty-row__align--center ty-row__justify--between">
			<view class="navbar-items ty-row ty-row__align--center">
				<view v-for="(item,index) in menu" :key="index" v-on:click="item.onClick" class="navbar-item">{{ item.name }}</view>
			</view>
			<view>我的文件</view>
		</view>
	</view>
</template>

<script lang="ts">
export default {
	name:"Header",
	data() {
		return {
			menu:[
				{
					id:1,
					name:"上传文件",
					onClick:() => {
						uni.navigateTo({
							url:"/pages/index/index"
						})
					}
				},
				{
					id:2,
					name:"文件列表",
					onClick:() => {
						uni.navigateTo({
							url:"/pages/list/index"
						})
					}
				},
			]
		};
	}
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.navbar-container{
	color: rgba(255,255,255,.84);
	background:$color-brand;
	padding: 0 135px;
	font-weight: 300;
	margin-bottom: 20px;
	.navbar-header{
		padding: 15px;
		font-size: 22px;
		cursor: pointer;
	}
	.navbar-collapse{
		flex: 1;
		.navbar-items{
			.navbar-item{
				cursor: pointer;
				color: inherit;
				padding:0 20px;
				&::after{
					background-color: rgba(255,255,255,.1);
				}
			}
		}
	}
}
</style>

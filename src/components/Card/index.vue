<template>
	<view class="ty-row ty-row__align--start">
		<view class="upload-container ty-row ty-row__direction--column">
			<slot name="name"></slot>
			<view class="upload-content ty-row ty-row__direction--column ty-row__align--center">
				<slot name="upload"></slot>
			</view>
			<slot name="code"></slot>
		</view>
		<view class="tips-container">
			<view class="tips-header">上传提示</view>
			<view class="tips-content">
				<slot name="tips"></slot>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {}
</script>

<style lang="scss">
@import "@/styles/index.scss";
.upload-container{
	flex: 3 0 0;
	margin-right: 20px;
	border-radius: 2px;
	.upload-content{
		// padding: 100px 20px;
		background-color: #FFFFFF;
	}
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
}
</style>
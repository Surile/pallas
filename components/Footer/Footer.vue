<template>
	<view class="footer-container">
		<text class="copyright">Copyright © 2020 梦幻图床</text>
		<text class="theme-source" @click="openURL" >源代码</text>
	</view>
</template>

<script lang="ts">
export default {
	name:"Footer",
	methods:{
		openURL(){
			window.open("https://github.com/Surile/pallas")
		}
	}
}
</script>

<style lang="scss">
.footer-container{
	// padding: 0 135px;
	margin-bottom: 10px;
	text {
		color: #777;
	}
	.copyright{
		&::after{
			content: "|";
			padding-left: 10px;
		}
	}
	.theme-source{
		padding-left: 10px;
		color: blue;
	}
}
</style>

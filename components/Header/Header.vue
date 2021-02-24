<template>
	<view class="navbar-header">
		<view class="header-title">
			<text>图床</text>
		</view>
	</view>
</template>

<script lang="ts">
export default {
	name:"Header",
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.navbar-header{
	@include display-flex;
	flex:1;
	background:$color-brand;
	.header-title{
		text{
			color: #FFFFFF;
		}
	}
}
</style>

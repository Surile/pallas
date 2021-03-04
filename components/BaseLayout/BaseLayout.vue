<template>
	<view class="container ty-row__direction--column ty-row__justify--between">
		<view class="content">
			<slot></slot>
		</view>
		<!-- <Footer></Footer> -->
	</view>
</template>

<script>
import { Header,Footer } from '@/components'

export default {
	name:"BaseLayout",
	components:{
		Header,
		Footer
	},
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.container{
	// margin: 0px auto;
	margin-top: 20px;
}
.content{
	// padding: 0px 135px;
	margin-bottom: 20px;
}
</style>

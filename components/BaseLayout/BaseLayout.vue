<template>
	<view class="container">
		<Header></Header>
		<slot></slot>
		<Footer></Footer>
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
	@include display-flex;
	@include justify-content()
	margin: 0px auto;
}
</style>

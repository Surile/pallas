<template>
	<view class="container ty-row__direction--column ty-row__justify--between">
		<Header></Header>
		<view class="content">
			<slot></slot>
		</view>
		<Footer></Footer>
	</view>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

@Component({
	components: {
		Header,
		Footer
	}
})
export default class BaseLayout extends Vue {}
</script>

<style lang="scss">
.container{
	margin: 0px auto;
}
.content{
	padding: 0px 135px;
	margin-bottom: 20px;
}
</style>
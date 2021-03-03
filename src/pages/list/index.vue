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
import { Component,Vue } from 'vue-property-decorator'
import { BaseLayout } from '@/components'

@Component({
  components:{
    BaseLayout
  }
})
export default class List extends Vue {
  public list:Array<Object> = []
  public page:Number = 1
  public perPage:Number = 10

  mounted(){
    this.onFetchList()
  }

  onFetchList(){
			// uniCloud.callFunction({
			// 	name:"server",
			// 	data:{
			// 		action:"image/getList",
			// 		data:{
			// 			page:this.page,
			// 			perPage:this.perPage
			// 		}
			// 	}
			// }).then(data => {
			// 	console.log("list",data)
			// })
    console.log("res")
	}

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
<template>
	<view class="container ty-row ty-row__align--center">
		<label>{{ name }}</label>
		<view class="input-group tr-row tr-row__direction--row ty-row__align--center">
			<input id="input" disabled :value="value"/>
			<view class="btn-container">
				<view class="input-group-btn" :data-clipboard-text="value" @click="onCopyLink">复制</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
import { Component,Prop,Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue{
  @Prop(String) readonly name: string | undefined
  @Prop(String) readonly vaule: string | undefined

  public copyBtn:any = null

  mounted(){
    this.copyBtn = new Vue.prototype.clipboard('.input-group-btn');
  }

  onCopyLink(){
      let _this = this;
      
      let clipboard = _this.copyBtn;				
      
      clipboard.on('success', function() {
        uni.showToast({
          title:"复制成功！",
          icon:"none"
        })
      });
      
      clipboard.on('error', function() {
        uni.showToast({
          title:"复制失败，请手动选择复制！！",
          icon:"none"
        })			
      });
		}
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
.container{
	flex:1;
	margin-bottom: 15px;
	label {
		width:120px;
		color: #333;
		font-size: 16px;
		font-weight: 400;
	}
	.input-group{
		display: flex;
		flex: 1;
		input {
			flex: 3;
			padding: 7px 0;
			font-size: 16px;
			background-color: rgba(0,0,0,0);
			background-image: linear-gradient(#009688,#009688),linear-gradient(#D2D2D2,#D2D2D2);
			background-size:0 2px,100% 1px;
			background-repeat:no-repeat;
			background-position:center bottom,center calc(100% - 1px);
		}
		.input-group-btn{
			flex: 1;
			margin-left: 15px;
			padding: 8px 30px;
			color: #FFFFFF;
			background-color: $color-brand;
			border-radius: 4px;
			cursor: pointer;
			&:hover{
				background-color: $color-brand-light;
			}
		}
	}
}
</style>
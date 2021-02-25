<template>
	<BaseLayout>
		<view class="container">
			<Card>
					<template v-slot:name>
						<view class="upload-title">图片查看器</view>
					</template>
					<template v-slot:upload>
						<view @click="onPreviewImage" data-url="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" class="image_view ty-row ty-row__direction--column ty-row__align--center tr-row__justify--center">
							<image class="image" mode="aspectFit" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png"></image>
						</view>
					</template>
					<template v-slot:code>
						<view class="code-container">
							<view class="nav-container ty-row">
								<view v-for="(item,index) in menu" :class="index === activeIndex ? 'nav-item active' : 'nav-item' " :key="index" @click="onTab(index)">{{ item.name }}</view>
							</view>
							<view v-if="activeIndex === 0" class="code-content">
								<Input name="图片链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />								
								<Input name="下载链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />							
							</view>
							<view v-if="activeIndex === 1" class="code-content">
								<Input name="HTML代码：" value='<img src="http://wl52.hmzhuji.tk/view.php/3cf79d46fcc6ba11f462cfd8c13b872f.jpg"/>' />								
								<Input name="Markdown：" value="![1607062562208-2258fc9d-63ea-49b1-a2e2-2671ff67d94f-0.jpg](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-711098d2-ab98-4280-a2a7-3ddbaf01a2e6/0d08b313-4883-40d0-bcda-6eb5cf6621cd.jpg)" />							
							</view>
							<view v-if="activeIndex === 2" class="code-content">
								
							</view>
							<view v-if="activeIndex === 3" class="code-content">
								<Input name="图片链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />								
								<Input name="下载链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />							
							</view>
						</view>
					</template>
					<template v-slot:tips>
						<view class="tips-text">
							网站所有文件内容均由用户自行上传分享，本站严格遵守国家相关法律法规，尊重著作权、版权等第三方权利，如果当前文件侵犯了您的相关权利，请邮件反馈至@qq.com，我们将及时处理。
						</view>
					</template>
			</Card>
		</view>
	</BaseLayout>
</template>

<script>
import { BaseLayout,Card,Input } from '@/components'	

export default {
	components:{
		BaseLayout,
		Card
	},
	data(){
		return {
			activeIndex:0,
			menu:[
				{
					name:"文件外链"
				},
				{
					name:"代码调用"
				},
				{
					name:"文件详情"
				},
				{
					name:"管理"
				}
			]
		}
	},
	methods:{
		onPreviewImage(e){
			const url = e.currentTarget.dataset.url
			uni.previewImage({
				urls:[url],
			})
		},
		onTab(index){
			console.log(index)
			this.activeIndex = index
		}
	}
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

.container{
	.upload-title{
		padding: 10px 15px;
		color: rgba(255,255,255,.84);
		border-top-left-radius:3px;
		border-top-right-radius:3px;
		background-color: $color-brand;
	}
	.image_view{
		padding: 15px;
		.image {
			height: 450px;
		}
	}
	.tips-text{
		padding: 15px;
	}
	.code-container{
		margin-top: 20px;
		background-color: #FFFFFF;
		.nav-container{
			border-bottom: 1px solid #ddd;
			.nav-item{
				color: #222;
				cursor: pointer;
				padding: 10px 15px;
				display: block;
				font-weight: 500;
				background-color: transparent;
				// &:hover{
				// 	color: #555;
				// 	cursor: default;
				// 	background-color: #fff;
				// 	border: 1px solid #ddd;
				// 	border-bottom-color: transparent;
				// }
				&:active{
					background-color: #ddd;
					border-bottom-color: #000;
				}
			}
		}
		.code-content{
			padding: 20px;
		}
	}
}
</style>

<template>
  <BaseLayout>
    <view class="container">
      <Card>
        <template v-slot:name>
          <view class="upload-title">图片查看器</view>
        </template>
        <template v-slot:upload>
          <view
            @click="onPreviewImage"
            :data-url="data?.imgSrc"
            class="image_view ty-row ty-row__direction--column ty-row__align--center tr-row__justify--center"
          >
            <image class="image" mode="aspectFit" :src="data?.imgSrc"></image>
          </view>
        </template>
        <template v-slot:code>
          <view class="code-container">
            <view class="nav-container ty-row">
              <view
                v-for="(item, index) in menuList"
                :class="index === activeIndex ? 'nav-item active' : 'nav-item'"
                :key="index"
                @click="onTab(index)"
                >{{ item.name }}</view
              >
            </view>
            <view v-if="activeIndex === 0" class="code-content">
              <Input name="图片链接：" :value="data?.imgSrc" />
              <Input name="下载链接：" :value="data?.imgSrc" />
            </view>
            <view v-if="activeIndex === 1" class="code-content">
              <Input
                name="HTML代码："
                :value="'<img src=' + data?.imgSrc + ' />'"
              />
              <Input
                name="Markdown："
                :value="'![' + data?._id + '](' + data?.imgSrc + ')'"
              />
            </view>
            <view
              v-if="activeIndex === 2"
              class="code-content ty-row ty-row__justify--center"
            >
              <view class="remove-btn" @click="onRemoveImage">删除文件</view>
            </view>
            <!-- 							<view v-if="activeIndex === 3" class="code-content">
								<Input name="图片链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />								
								<Input name="下载链接：" value="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f50391d2-9b7a-49f5-8bbb-7f2c6d5f7b8d/08f834a5-bd70-4e74-a5ee-d07c83e32abc.png" />							
							</view> -->
          </view>
        </template>
        <template v-slot:tips>
          <view class="tips-text">
            网站所有文件内容均由用户自行上传分享，本站严格遵守国家相关法律法规，尊重著作权、版权等第三方权利，如果当前文件侵犯了您的相关权利，请邮件反馈至mhecy98@gmail.com，我们将及时处理。
          </view>
        </template>
      </Card>
    </view>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BaseLayout, Card, Input } from '@/components'
import { DetailData } from '@/type'

@Component({
  components: {
    BaseLayout,
    Card,
    Input,
  },
})
export default class Detail extends Vue {
  public activeIndex: Number = 10
  public menuList: Array<{ name: string }> = [
    {
      name: '文件外链',
    },
    {
      name: '代码调用',
    },
    // {
    // 	name:"文件详情"
    // },
    {
      name: '管理',
    },
  ]
  public data: DetailData | null = null

  onLoad(options: { id: number }) {
    uniCloud
      .callFunction({
        name: 'server',
        data: {
          action: 'image/detail',
          data: {
            id: options.id,
          },
        },
      })
      .then((data: any) => {
        this.data = data.result.data[0]
      })
  }

  onPreviewImage(e: any) {
    const url = e.currentTarget.dataset.url
    uni.previewImage({
      urls: [url],
    })
  }

  onTab(index: number) {
    this.activeIndex = index
  }

  onRemoveImage() {
    uniCloud
      .callFunction({
        name: 'server',
        data: {
          action: 'image/remove',
          data: {
            id: `${this.data?._id}`,
          },
        },
      })
      .then((data: any) => {
        if (data.result.deleted === 1) {
          uni.navigateBack({})
        }
      })
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.container {
  .upload-title {
    padding: 10px 15px;
    color: rgba(255, 255, 255, 0.84);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: $color-brand;
  }
  .image_view {
    padding: 15px;
    .image {
      height: 450px;
    }
  }
  .tips-text {
    padding: 15px;
  }
  .code-container {
    margin-top: 20px;
    background-color: #ffffff;
    .nav-container {
      border-bottom: 1px solid #ddd;
      .nav-item {
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
        &:active {
          background-color: #ddd;
          border-bottom-color: #000;
        }
      }
    }
    .code-content {
      padding: 20px;
    }
  }
  .remove-btn {
    width: 110px;
    padding: 10px 0;
    color: rgba(255, 255, 255, 0.84);
    background-color: #f44336;
    text-align: center;
    border-radius: 4px;
  }
}
</style>

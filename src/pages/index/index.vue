<template>
  <BaseLayout>
    <view class="container">
      <Card>
        <template v-slot:upload>
          <view class="content">
            <view class="tips-text">选择一个文件上传</view>
            <button class="upload-btn" @:click="onChooseImage">立即上传</button>
          </view>
        </template>
        <template v-slot:tips>
          <!-- <view class="tips-item">**您的IP是183.193.18.85，请不要上传违规文件！</view> -->
          <view class="tips-item"
            >**上传无格式限制，当前服务器单个文件上传最大支持<strong>100M</strong>!</view
          >
          <!-- <view class="tips-item">**当前网站已开启视频文件审核，如果上传的是视频文件，需要等待审核通过后才能下载和播放。</view> -->
        </template>
      </Card>
    </view>
  </BaseLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BaseLayout, Card } from '@/components'

@Component({
  components: {
    BaseLayout,
    Card,
  },
})
export default class Index extends Vue {
  onChooseImage() {
    const that = this

    uni.chooseImage({
      sizeType: ['original'],
      success: (res: any) => {
        if (!res.tempFilePaths.length) {
          return
        }

        res.tempFiles.map(async (item: any) => {
          await that.onUploadFile(item)
        })
      },
    })
  }
  async onUploadFile(file: any) {
    uni.showLoading({
      mask: true,
    })

    const res = await uniCloud.uploadFile({
      filePath: file.path,
      cloudPath: file.name,
    })

    uniCloud
      .callFunction({
        name: 'server',
        data: {
          action: 'image/add',
          data: {
            url: res.fileID,
          },
        },
      })
      .then((data: any) => {
        uni.hideLoading()
        uni.navigateTo({
          url: `../detail/index?id=${data.result.id}`,
        })
      })
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
.container {
  flex: 1;
  .content {
    width: 100%;
    padding: 100px 30px;
  }
  .upload-container {
    flex: 3 0 0;
    padding: 100px 20px;
    margin-right: 20px;
    border-radius: 2px;
    background-color: #ffffff;
    .progressBar {
      width: 100%;
    }
    .tips-text {
      color: #404040;
      font-size: 36px;
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: center;
    }
    .upload-btn {
      width: 140px;
      color: rgba(255, 255, 255, 0.84);
      font-size: 20px;
      text-align: center;
      padding: 0 20px;
      margin-top: 20px;
      background-color: $color-brand;
    }
  }
  .tips-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
    font-size: 14px;
  }
}
</style>

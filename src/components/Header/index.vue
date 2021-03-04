<template>
  <view
    class="navbar-container ty-row ty-row__direction--row ty-row__align--center"
  >
    <view @click="onHome" class="navbar-header"> 梦幻图床 </view>
    <view
      class="navbar-collapse collapse navbar-responsive-collapse ty-row ty-row__align--center ty-row__justify--between"
    >
      <view class="navbar-items ty-row ty-row__align--center">
        <view
          v-for="(item, index) in menu"
          :key="index"
          v-on:click="item.onClick"
          class="navbar-item"
          >{{ item.name }}</view
        >
      </view>
      <view @click="onViewMe">我的文件</view>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

type MenuItem = {
  id: number
  name: string
  onClick: () => void
}

@Component({})
export default class Header extends Vue {
  public menu: Array<MenuItem> = [
    {
      id: 1,
      name: '上传文件',
      onClick: () => {
        uni.navigateTo({
          url: '/pages/index/index',
        })
      },
    },
    {
      id: 2,
      name: '文件列表',
      onClick: () => {
        uni.showToast({
          title: '正在开发...',
          duration: 2000,
        })
      },
    },
  ]

  onViewMe() {
    uni.showToast({
      title: '正在开发...',
      duration: 2000,
    })
  }

  onHome() {
    uni.navigateTo({
      url: '/pages/index/index',
    })
  }
}
</script>
<style lang="scss">
@import '@/styles/index.scss';
.navbar-container {
  color: rgba(255, 255, 255, 0.84);
  background: $color-brand;
  padding: 0 135px;
  font-weight: 300;
  margin-bottom: 20px;
  .navbar-header {
    padding: 15px;
    font-size: 22px;
    cursor: pointer;
  }
  .navbar-collapse {
    flex: 1;
    .navbar-items {
      .navbar-item {
        cursor: pointer;
        color: inherit;
        padding: 0 20px;
        &::after {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
}
</style>

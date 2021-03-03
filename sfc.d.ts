import Vue from "vue";

declare module "uview-ui";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// 全局变量设置

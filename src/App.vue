<template>
  <el-config-provider size="small" :locale="zhCn">
    <!-- 导航栏 -->
    <nav-bar
      v-if="route.meta.isShowComNav"
      :key="refreshUuid"
      bg-color="#fff"
      font-color="green"
      position="sticky"
      icon-color="green"
    ></nav-bar>
    <router-view v-show="!isLoading" v-slot="{}" :key="refreshUuid"></router-view>
    <loading-com-vue v-show="isLoading"></loading-com-vue>
  </el-config-provider>
</template>
<script lang="ts" setup>
  import LoadingComVue from '@/components/Loading/LoadingCom.vue'; // 全局等待层
  import appStore from './store';
  import { storeToRefs } from 'pinia';
  // import { openAndCloseLoadingByTime } from './utils/common';
  import zhCn from 'element-plus/lib/locale/lang/zh-cn';
  const { isLoading } = storeToRefs(appStore.useLoadingStore);
  // openAndCloseLoadingByTime(1500); // 等待动画层
  const { refreshUuid } = appStore.useRefreshStore;
  const route = useRoute();

  // 查询和更新用户信息
  const { getAndUpdateUserInfo } = appStore.useUserInfoStore;
  const { token } = appStore.useTokenStore;
  if (token) {
    getAndUpdateUserInfo();
  }
</script>
<style>
  #app {
    /* min-width: 1500px; */
  }
</style>

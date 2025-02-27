import { createApp } from 'vue';
import App from './App.vue';
// import store from './store';
import router from './router';
import '@/style/normalize.css';
import component from '@/utils/registerCom';
import 'element-plus/es/components/message-box/style/index';
// 注册所有图标
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import elementIcons from '@/components/SvgIcon/svgicon';
// 颜色选择控件
import ColorPicker from 'colorpicker-v3'; // 注册组件
import 'colorpicker-v3/style.css'; // 引入样式文件
// 图标
import '@/assets/iconfont/iconfont.js';
// 字体文件
import '@/assets/font/font.css';
import '@/views/LegoDesigner/assets/font/legoFont.css';

// 滚动条
import CScrollbar from 'c-scrollbar';

// element-plus部分组件样式
import 'element-plus/theme-chalk/src/message.scss';

// 注册store
import { createPinia } from 'pinia';
import { registerStore } from '@/store';

import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';

import 'default-passive-events';

import VueDOMPurifyHTML from 'vue-dompurify-html';

import UndrawUi from './components/packages/index';

import { userAgent } from '@/utils/userAgent';

import '@/style/article/github-markdown-light.css'; // 文章样式

import contextmenu from 'v-contextmenu';
import 'v-contextmenu/dist/themes/default.css';

import configDirectives from '@/directives/config';

// SEO
import { createHead } from '@vueuse/head';

userAgent();

// 创建vue实例
const app = createApp(App);
// app.use(store);
app.use(createPinia());
// 注册pinia状态管理库
registerStore();

app.use(router);
app.use(component);
app.use(elementIcons);
app.use(VueDOMPurifyHTML, {
  default: {
    ADD_TAGS: ['iframe']
  }
});
app.use(ColorPicker);
app.use(CScrollbar);

app.use(configDirectives); // 全局指令注册

app.use(VueViewer, {
  defaultOptions: {
    // 自定义默认配置
  }
});
app.use(contextmenu);
app.component('SvgIcon', SvgIcon);
app.use(UndrawUi);
const head = createHead();
app.use(head);
// 挂载实例
app.mount('#app');

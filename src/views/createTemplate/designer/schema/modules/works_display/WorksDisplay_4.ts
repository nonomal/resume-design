import customCss from '../../customCss';

export default {
  id: 'WorksDisplay_4', // 组件唯一性id
  componentName: 'WorksDisplay_4', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '作品展示', // 组件中文名称
  description: '作品展示模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'WorksDisplay_4.png'
  }, // 组件快照
  keywords: '作品展示', // 组件关键词，用于搜索
  category: 'works_display', // 组件分类
  props: {
    title: {
      chName: '作品展示',
      show: true,
      iconfont: 'icon-zhuanyezhishijineng',
      config: true // 是否支持配置
    }
  }, // 组件属性
  css: {
    position: 'relative',
    themeColor: '#079cfa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: {
      top: 0,
      right: 30,
      bottom: 45,
      left: 25
    }
  }, // 组件样式
  customCss: customCss['WorksDisplay_4'],
  dataSource: {}, // 组件单独数据
  customProps: {
    ModuleTitleCpt: 'ModuleTitle_1'
  } // 自定义属性字段
};

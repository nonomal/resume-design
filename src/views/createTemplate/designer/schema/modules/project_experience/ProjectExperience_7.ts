import customCss from '../../customCss';

export default {
  id: 'ProjectExperience_7', // 组件唯一性id
  componentName: 'ProjectExperience_7', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '项目经验', // 组件中文名称
  description: '项目经验模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'ProjectExperience_7.png'
  }, // 组件快照
  keywords: '项目经验', // 组件关键词，用于搜索
  category: 'project_experience', // 组件分类
  props: {
    contentTtile: {
      chName: '内容标题',
      show: false,
      iconfont: '',
      config: false // 是否支持配置
    }
  }, // 组件属性
  css: {
    position: 'relative',
    themeColor: '#254665',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: {
      top: 20,
      right: 30,
      bottom: 20,
      left: 30
    }
  }, // 组件样式
  customCss: customCss['ProjectExperience_7'],
  dataSource: {}, // 组件单独数据
  customProps: {
    ModuleTitleCpt: 'ModuleTitle_8'
  } // 自定义属性字段
};

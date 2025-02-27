import customCss from '../../customCss';

export default {
  id: 'SkillSpecialties_8', // 组件唯一性id
  componentName: 'SkillSpecialties_8', // 组件名
  commentType: '', // 组件类型
  icon: '', // 组件icon
  title: '技能特长', // 组件中文名称
  description: '技能特长模块', // 组件描述信息
  screenShot: {
    width: '100%',
    url: '',
    name: 'SkillSpecialties_8.png'
  }, // 组件快照
  keywords: '简历标题', // 组件关键词，用于搜索
  category: 'skill_specialties', // 组件分类
  props: {
    title: {
      chName: '技能特长',
      show: true,
      iconfont: 'icon-zhuanyezhishijineng',
      config: true // 是否支持配置
    },
    skillName: {
      chName: '技能名称',
      show: false,
      iconfont: '',
      config: false
    },
    proficiency: {
      chName: '熟练度',
      show: false,
      iconfont: '',
      config: false
    }
  }, // 组件属性
  css: {
    themeColor: '#254665',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: {
      top: 13,
      right: 40,
      bottom: 20,
      left: 40
    }
  }, // 组件样式
  customCss: customCss['SkillSpecialties_8'],
  dataSource: {}, // 组件单独数据
  customProps: {
    ModuleTitleCpt: 'ModuleTitle_9'
  } // 自定义属性字段
};

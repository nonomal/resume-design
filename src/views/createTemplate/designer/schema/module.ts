import { IModulesList } from '../../types/IHJNewSchema';
import commonCss from './commonCss';
import commonDataSource from './commonDataSource';
import commonProps from './commonProps';
import customCss from './customCss';

const modulesList: IModulesList = {
  resume_title: {
    id: 'resumeTitle', // 模块id
    moduleChName: '简历标题', // 模块中文名
    category: 'resumeTitle', // 模块分了
    icon: 'icon-title', // 模块图标
    props: commonProps['resumeTitle'], // 公共的props
    dataSource: commonDataSource['resumeTitle'], // 该分类下公用数据源
    css: commonCss['resumeTitle'], // 公共css属性
    list: [
      {
        id: 'ResumeTitle_1', // 组件唯一性id
        componentName: 'ResumeTitle_1', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '简历标题_1', // 组件中文名称
        description: '简历标题模块', // 组件描述信息
        screenShot: {
          width: '100%',
          url: '',
          name: 'ResumeTitle_1.png'
        }, // 组件快照
        keywords: '简历标题', // 组件关键词，用于搜索
        category: 'resume_title', // 组件分类
        props: {}, // 组件属性
        css: {
          height: 32,
          background: '#000',
          color: '#fff',
          margin: {
            bottom: 10,
            left: 0,
            right: 0,
            top: 10
          }
        }, // 组件样式
        customCss: customCss['ResumeTitle_1'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'ResumeTitle_2', // 组件唯一性id
        componentName: 'ResumeTitle_2', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '简历标题_2', // 组件中文名称
        description: '简历标题模块', // 组件描述信息
        screenShot: {
          width: '',
          url: '',
          name: 'ResumeTitle_2.png'
        }, // 组件快照
        keywords: '简历标题', // 组件关键词，用于搜索
        category: 'resume_title', // 组件分类
        props: {}, // 组件属性
        css: {
          height: 32,
          background: '#000',
          color: '#fff',
          margin: {
            bottom: 10,
            left: 0,
            right: 0,
            top: 10
          },
          padding: {
            bottom: 0,
            left: 0,
            right: 90,
            top: 0
          },
          justifyContent: 'flex-end'
        }, // 组件样式
        customCss: customCss['ResumeTitle_2'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      }
    ]
  },
  base_info: {
    id: 'baseInfo', // 模块id
    moduleChName: '基本资料', // 模块中文名
    category: 'baseInfo', // 模块分了
    icon: 'icon-jichuxinxi', // 模块图标
    props: commonProps['baseInfo'], // 公共的props
    dataSource: commonDataSource['baseInfo'], // 该分类下公用数据源
    css: commonCss['baseInfo'],
    list: [
      {
        id: 'BaseInfo_1', // 组件唯一性id
        componentName: 'BaseInfo_1', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基本信息_1', // 组件中文名称
        description: '基本信息模块', // 组件描述信息
        screenShot: {
          width: '',
          url: '',
          name: 'BaseInfo_1.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {}, // 组件属性
        css: {
          alignItems: 'flex-end',
          padding: {
            top: 0,
            right: 5,
            bottom: 15,
            left: 40
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_1'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'BaseInfo_2', // 组件唯一性id
        componentName: 'BaseInfo_2', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基本信息_2', // 组件中文名称
        description: '基本信息模块', // 组件描述信息
        screenShot: {
          width: '100%',
          url: '',
          name: 'BaseInfo_2.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {}, // 组件属性
        css: {
          backgroundPath: 'baseInfo_2.png', // 背景图片地址
          alignItems: 'flex-start',
          height: 250,
          padding: {
            top: 40,
            right: 45,
            bottom: 0,
            left: 45
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_2'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'BaseInfo_3', // 组件唯一性id
        componentName: 'BaseInfo_3', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基础信息', // 组件中文名称
        description: '基础信息模块', // 组件描述信息
        screenShot: {
          width: '100%',
          url: '',
          name: 'BaseInfo_3.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {
          degree: {
            chName: '学历',
            show: false
          }
        }, // 组件属性
        css: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: 250,
          padding: {
            top: 10,
            right: 25,
            bottom: 0,
            left: 25
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_3'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'BaseInfo_4', // 组件唯一性id
        componentName: 'BaseInfo_4', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基本信息_2', // 组件中文名称
        description: '基本信息模块', // 组件描述信息
        screenShot: {
          width: '100%',
          url: '',
          name: 'BaseInfo_4.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {}, // 组件属性
        css: {
          alignItems: 'center',
          height: 200,
          padding: {
            top: 10,
            right: 30,
            bottom: 0,
            left: 30
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_4'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'BaseInfo_5', // 组件唯一性id
        componentName: 'BaseInfo_5', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基本信息_5', // 组件中文名称
        description: '基本信息模块', // 组件描述信息
        screenShot: {
          width: '100%',
          url: '',
          name: 'BaseInfo_5.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {}, // 组件属性
        css: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 265,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: {
            top: 0,
            right: 0,
            bottom: 2,
            left: 0
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_5'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      },
      {
        id: 'BaseInfo_6', // 组件唯一性id
        componentName: 'BaseInfo_6', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '基本信息_1', // 组件中文名称
        description: '基本信息模块', // 组件描述信息
        screenShot: {
          width: '',
          url: '',
          name: 'BaseInfo_6.png'
        }, // 组件快照
        keywords: '基础信息', // 组件关键词，用于搜索
        category: 'base_info', // 组件分类
        props: {}, // 组件属性
        css: {
          height: 235,
          alignItems: 'flex-end',
          backgroundPath: 'baseInfo_6.png',
          padding: {
            top: 0,
            right: 5,
            bottom: 15,
            left: 40
          }
        }, // 组件样式
        customCss: customCss['BaseInfo_6'],
        dataSource: {}, // 组件单独数据
        customProps: {} // 自定义属性字段
      }
    ]
  }
};

export default modulesList;

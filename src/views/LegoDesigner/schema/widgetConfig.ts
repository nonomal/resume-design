import { IWidgetTab } from '../types';

export const WIDGET_CONFIG_LIST: Array<IWidgetTab> = [
  {
    title: '头像',
    category: 'avatar',
    dataSource: {
      avatarSrc: '' // 默认头像地址
    }, // 该分类下公用数据源
    list: [
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-1', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '正方形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-1.png',
          width: '70px',
          height: '90px',
          borderRadius: '10px'
        }, // 组件快照
        keywords: '头像', // 组件关键词，用于搜索
        category: 'avatar-1', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 120,
          height: 150,
          rotate: 0, // 旋转角度
          backgroundColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-2', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '圆形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-2.png',
          width: '90px',
          height: '90px',
          borderRadius: '50%'
        }, // 组件快照
        keywords: '头像', // 组件关键词，用于搜索
        category: 'avatar-2', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 120,
          height: 120,
          rotate: 0, // 旋转角度
          backgroundColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-3', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '六边形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-3.png',
          width: '90px',
          height: '90px',
          borderRadius: '10px'
        }, // 组件快照
        keywords: '圆头像', // 组件关键词，用于搜索
        category: 'avatar-3', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 120,
          height: 130,
          rotate: 0, // 旋转角度
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-4', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '内置矩形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-4.png',
          width: '75px',
          height: '75px',
          borderRadius: '10px'
        }, // 组件快照
        keywords: '头像', // 组件关键词，用于搜索
        category: 'avatar-4', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 130,
          height: 130,
          rotate: 0, // 旋转角度
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-5', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '正五边形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-5.png',
          width: '90px',
          height: '90px',
          borderRadius: '10px'
        }, // 组件快照
        keywords: '头像', // 组件关键词，用于搜索
        category: 'avatar-5', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 120,
          height: 116,
          rotate: 0, // 旋转角度
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-avatar-6', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '正七边形头像', // 组件描述信息
        screenShot: {
          src: 'avatar-6.png',
          width: '90px',
          height: '90px',
          borderRadius: '10px'
        }, // 组件快照
        keywords: '头像', // 组件关键词，用于搜索
        category: 'avatar-6', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 120,
          height: 120,
          rotate: 0, // 旋转角度
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 3,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      }
    ]
  },
  {
    title: '文本',
    category: 'text',
    dataSource: {
      text: '91化简' // 文本内容
    }, // 该分类下公用数据源
    list: [
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-1', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '正方形头像', // 组件描述信息
        screenShot: {
          src: 'text-1.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-1', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          fontColor: '#333333',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-2', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-1', // 组件描述信息
        screenShot: {
          src: 'text-2.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-2', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-3', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-2', // 组件描述信息
        screenShot: {
          src: 'text-3.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-3', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-4', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-3', // 组件描述信息
        screenShot: {
          src: 'text-4.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-4', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-5', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-4', // 组件描述信息
        screenShot: {
          src: 'text-5.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-5', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-6', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-5', // 组件描述信息
        screenShot: {
          src: 'text-6.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-6', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-7', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-6', // 组件描述信息
        screenShot: {
          src: 'text-7.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-7', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-8', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-7', // 组件描述信息
        screenShot: {
          src: 'text-8.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-8', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-9', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-8', // 组件描述信息
        screenShot: {
          src: 'text-9.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-9', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-text-10', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '渐变文本-9', // 组件描述信息
        screenShot: {
          src: 'text-10.png',
          width: '116px',
          height: '37px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '文本-10', // 组件关键词，用于搜索
        category: 'text', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 60,
          height: 20,
          rotate: 0, // 旋转角度
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: '方正黑体简体',
          fontWeight: 500,
          textAlign: 'justify',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 10,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      }
    ]
  },
  {
    title: '形状',
    category: 'shape',
    dataSource: {},
    list: [
      {
        id: '', // 组件唯一性id
        componentName: 'hj-square', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '正方形', // 组件描述信息
        screenShot: {
          src: 'square.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '正方形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 1,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rectangle', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '长方形', // 组件描述信息
        screenShot: {
          src: 'rectangle.png',
          width: '100px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '长方形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 50,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderRadius: 1,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-circle', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '长方形', // 组件描述信息
        screenShot: {
          src: 'circle.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '圆形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-oval', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '椭圆形', // 组件描述信息
        screenShot: {
          src: 'oval.png',
          width: '100px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '椭圆形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 50,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderColor: '#eee',
          borderStyle: 'solid'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-triangle', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '三角形', // 组件描述信息
        screenShot: {
          src: 'triangle.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '三角形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-trapezoid', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '梯形', // 组件描述信息
        screenShot: {
          src: 'trapezoid.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '梯形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-parallelogram', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '平行四边形', // 组件描述信息
        screenShot: {
          src: 'parallelogram.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '平行四边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rhombus', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '菱形', // 组件描述信息
        screenShot: {
          src: 'rhombus.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '菱形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-pentagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '五边形', // 组件描述信息
        screenShot: {
          src: 'pentagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '五边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-hexagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '六边形', // 组件描述信息
        screenShot: {
          src: 'hexagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '六边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-heptagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '七边形', // 组件描述信息
        screenShot: {
          src: 'heptagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '七边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-octagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '八边形', // 组件描述信息
        screenShot: {
          src: 'octagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '八边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-nonagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '九边形', // 组件描述信息
        screenShot: {
          src: 'nonagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '九边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-decagon', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '十边形', // 组件描述信息
        screenShot: {
          src: 'decagon.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '十边形', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-bevel', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '斜角', // 组件描述信息
        screenShot: {
          src: 'bevel.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '斜角', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rabbet', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '槽口', // 组件描述信息
        screenShot: {
          src: 'rabbet.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '槽口', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-leftArrow', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '左箭头', // 组件描述信息
        screenShot: {
          src: 'leftArrow.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '左箭头', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rightArrow', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '右箭头', // 组件描述信息
        screenShot: {
          src: 'rightArrow.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '右箭头', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-leftPoint', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '左点', // 组件描述信息
        screenShot: {
          src: 'leftPoint.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '左点', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rightPoint', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '右点', // 组件描述信息
        screenShot: {
          src: 'rightPoint.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '右点', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-leftChevron', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '左雪佛龙', // 组件描述信息
        screenShot: {
          src: 'leftChevron.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '左雪佛龙', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rightChevron', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '右雪佛龙', // 组件描述信息
        screenShot: {
          src: 'rightChevron.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '右雪佛龙', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-star', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '五角星', // 组件描述信息
        screenShot: {
          src: 'star.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '五角星', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-cross', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '十字架', // 组件描述信息
        screenShot: {
          src: 'cross.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '十字架', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-message', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '消息框', // 组件描述信息
        screenShot: {
          src: 'message.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '消息框', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-close', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '关闭', // 组件描述信息
        screenShot: {
          src: 'close.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '关闭', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      },
      {
        id: '', // 组件唯一性id
        componentName: 'hj-frame', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '容器', // 组件描述信息
        screenShot: {
          src: 'frame.png',
          width: '50px',
          height: '50px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '容器', // 组件关键词，用于搜索
        category: 'shape', // 组件分类
        props: {}, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 100,
          height: 100,
          rotate: 0, // 旋转角度
          backgroundColor: '#74a274',
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      }
    ]
  },
  {
    title: '评分',
    category: 'rate',
    dataSource: {
      rateValue: 0 // 评级
    },
    list: [
      {
        id: '', // 组件唯一性id
        componentName: 'hj-rate-1', // 组件名
        commentType: '', // 组件类型
        icon: '', // 组件icon
        title: '', // 组件中文名称
        description: '容器', // 组件描述信息
        screenShot: {
          src: 'hj-rate-1.png',
          width: '120px',
          height: '35px',
          borderRadius: '4px'
        }, // 组件快照
        keywords: '容器', // 组件关键词，用于搜索
        category: 'rate', // 组件分类
        props: {
          voidColor: '#C6D1DE' // 未选中图标的颜色
          // showText: false, // 是否显示辅助文字
          // textColor: '#1F2D3D', // 辅助文字颜色
          // texts: ['了解', '一般', '熟悉', '掌握', '精通'] // 文字提示数组
        }, // 组件属性
        css: {
          left: 0,
          top: 0,
          zIndex: 1,
          width: 150,
          height: 26,
          rateSize: 24,
          rotate: 0, // 旋转角度
          backgroundColor: '#fff',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderWidth: 0,
          borderColor: '#eee'
        }, // 组件样式
        dataSource: {} // 组件单独数据
      }
    ]
  },
  {
    title: '图标',
    category: 'icon',
    dataSource: {},
    list: []
  },
  {
    title: '列表',
    category: 'li',
    dataSource: {},
    list: []
  }
];

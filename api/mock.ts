import type { API } from './api'
import type { HomeConfig, News } from './model'

export class mockAPI implements API {
  async getHomeConfig(lang: string) {
    await this.delay()
    if (import.meta.server) return homeConfigMockData
    const data = localStorage.getItem('home_config_' + lang)
    if (data) {
      return JSON.parse(data)
    }
    return homeConfigMockData
  }
  async setHomeConfig(lang: string, config: HomeConfig) {
    await this.delay()
    localStorage.setItem('home_config_' + lang, JSON.stringify(config))
  }
  async getCommunityDynamic(): Promise<News[]> {
    return newsMockData
  }
  async getOpenSource() {
    await this.delay()
    return {
      commits: 112349,
      dev: 2067,
      issues: 11706,
      pull_request: 25557,
      repo: 9133,
      team: 61,
      user: 160456
    }
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

const homeConfigMockData = {
  seo: {
    title: 'deepin  - 基于Linux的开源国产操作系统',
    lang: 'zh',
    description:
      '作为国内知名开源操作系统团队，deepin以提供安全可靠、美观易用的国产操作系统与开源解决方案为目标，满足全球用户不同的应用场景，给用户提供一种更好的选择。',
    keywords: [
      'deepin',
      'Linux',
      '电脑系统',
      '操作系统',
      '国产操作系统',
      '电脑操作系统',
      '国产系统',
      'Linux发行版',
      '开源软件',
      '开源社区',
      '开源中国',
    ],
  },
  carousel: {
    interval: 3000,
    cards: [
      {
        title: 'deepin v23',
        content: '深度科技发布deepin v23，全新设计，全新体验。',
        image:
          'https://www.deepin.org/wp-content/uploads/2024/08/23-旧.jpg',
        image_link: 'https://www.deepin.org/zh/download',
        interval: 3000,
        online_time: '2024-12-04T02:35:03.000Z',
        downline_time: '2024-12-05T16:00:00.000Z"',
        links: [
          {
            title: '详细了解与下载',
            url: 'https://www.deepin.org/zh/download'
          },
        ]
      },
      {
        title: '',
        content: '',
        image:
          'https://www.deepin.org/wp-content/uploads/2024/08/202404090626283228_Banner-1920×780-社区-首页轮播图.jpg',
        image_link: 'https://www.deepin.org/zh/deepin-campus-alliance/',
        interval: 5000,
        online_time: '2024-12-04T02:35:03.000Z',
        downline_time: '2024-12-05T16:00:00.000Z',
        links: []
      },
      {
        title: '',
        content: '',
        image:
          'https://storage.deepin.org/thread/202411211056478081_%E5%80%A1%E8%AE%AE%E4%B9%A61920x780.jpg',
        image_link: 'https://www.deepin.org/zh/open-source-community-partnership-initiative/',
        interval: 3000,
        online_time: '2024-12-04T02:35:03.000Z',
        downline_time: '2024-12-05T16:00:00.000Z',
        links: []
      }
    ]
  },
  reason: {
    title: '选择deepin的理由',
    cards: [
      {
        title: '开箱即用',
        content:
          '安装简单，无需对系统进行额外配置和软件安装，即可满足日常办公的需要。'
      },
      {
        title: '尊重隐私',
        content:
          '用户隐私是我们一直所关注的事情，我们尊重您的个人数据和隐私安全。您拥有deepin的所有控制权，可以用它做任何您想做的事情。'
      },
      {
        title: '社区强大',
        content:
          '我们和用户有着紧密的联系，您可以通过微信、论坛、GitHub、Telegram、Twitter 向我们反馈问题。'
      },
      {
        title: '生态完善',
        content:
          '我们不仅自研一系列基础办公软件，而且兼容大部分安卓和Windows软件，有40000+款软件供您选择。'
      },
      {
        title: '代码开源',
        content:
          "我们遵循开源软件许可证协议发布源代码，相关项目和源代码均可在 <a href='https://github.com/linuxdeepin' target='_blank' class='underline'>GitHub</a> 上进行查看。",
        repos: [

          {
            title: 'action-conventionalcommits-checker',
            link: ''
          },
          {
            title: 'action-cppcheck',
            link: ''
          },
          {
            title: 'action-doxygencheck',
            link: ''
          },
          {
            title: 'action-organization-manager',
            link: ''
          },
          {
            title: 'action-sync',
            link: ''
          },
          {
            title: 'action-teams-manager',
            link: ''
          },
          {
            title: 'bbs-mobile-web',
            link: ''
          },
          {
            title: 'blur-effect',
            link: ''
          },
          {
            title: 'cla',
            link: ''
          },
          {
            title: 'contributor-assistant-github-action',
            link: ''
          },
          {
            title: 'dareader',
            link: ''
          },
          {
            title: 'dcc-insider-plugin',
            link: ''
          },
          {
            title: 'dci-icon-theme',
            link: ''
          },
          {
            title: 'dde',
            link: ''
          },
          {
            title: 'dde-account-faces',
            link: ''
          },
          {
            title: 'dde-api',
            link: ''
          },
          {
            title: 'dde-api-proxy',
            link: ''
          },
          {
            title: 'dde-app-services',
            link: ''
          },
          {
            title: 'dde-appearance',
            link: ''
          },
          {
            title: 'dde-application-manager',
            link: ''
          },
          {
            title: 'dde-application-wizard',
            link: ''
          },
          {
            title: 'dde-calendar',
            link: ''
          },
          {
            title: 'dde-clipboard',
            link: ''
          },
          {
            title: 'dde-control-center',
            link: ''
          },
          {
            title: 'dde-cooperation',
            link: ''
          },
          {
            title: 'dde-daemon',
            link: ''
          },
          {
            title: 'dde-device-formatter',
            link: ''
          },
          {
            title: 'dde-desktop',
            link: ''
          },
          {
            title: 'dde-desktop-icons',
            link: ''
          },
          {
            title: 'dde-desktop-schemas',
            link: ''
          },
          {
            title: 'dde-desktop-tools',
            link: ''
          },
          {
            title: 'dde-dock',
            link: ''
          },
          {
            title: 'dde-dock-plugins',
            link: ''
          },
          {
            title: 'dde-dock-settings',
            link: ''
          },
          {
            title: 'dde-dock-translations',
            link: ''
          },
          {
            title: 'dde-file-manager',
            link: ''
          },
          {
            title: 'dde-file-manager-plugins',
            link: ''

          }
        ],
      }],
  },
  feature: {
    title: '特色功能实用更高效',
    content:
      'deepin根据用户使用习惯自研开发40余款应用，为用户提供了更高效、便捷的办公能力！',
    cards: [
      {
        title: '自由定义办公方式',
        content:
          '独一无二的桌面环境，多样化的办公方式，deepin为您带去新颖独特的使用感受，满足您个性化的使用需求！',
        image: 'https://www.deepin.org/index/assets/imgs/自定义办公.png',
        cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p1.jpg',
        url: 'https://www.bilibili.com/video/BV1Sz4y1m7Ks'
      },
      {
        title: '全局搜索',
        content:
          '遗忘在角落的照片、视频、文件，贴心功能想您所想，搜您所需，一键直达。',
        image: 'https://www.deepin.org/index/assets/imgs/全局搜索.png',
        cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p2.jpg',
        url: 'https://www.bilibili.com/video/BV1Tf4y177NX'
      },
      {
        title: '截图录屏',
        content:
          '有价值的图文资料，急待分享的趣味画面，截图录屏助您无任何负担的随时捕捉。',
        image: 'https://www.deepin.org/index/assets/imgs/截图录屏.png',
        cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p3.jpg',
        url: 'https://www.bilibili.com/video/BV1pi4y1A7AQ'
      },
      {
        title: 'OCR',
        content:
          '想要复制图片上的中英文？一键精准识别，一秒高效提取，提升效率竟然如此简单。',
        image: 'https://www.deepin.org/index/assets/imgs/ocr.png',
        cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p4.jpg',
        url: 'https://www.bilibili.com/video/BV1Rh411i79d'
      }
    ]
  },
  apps: {
    title: '生产力让生活更美好',
    content: 'deepin应用商店囊括近40000款应用，满足您的生活和工作所有需求。',
    cards: [
      {
        list: [
          {
            title: 'QQ',
            image: 'https://www.deepin.org/index/assets/icons/office/qq.png'
          },
          {
            title: '微信',
            image: 'https://www.deepin.org/index/assets/icons/office/wx.png'
          },
          {
            title: '钉钉',
            image: 'https://www.deepin.org/index/assets/icons/office/dd.png'
          },
          {
            title: '企业微信',
            image: 'https://www.deepin.org/index/assets/icons/office/qw.png'
          },
          {
            title: 'WPS',
            image: 'https://www.deepin.org/index/assets/icons/office/wps.png'
          },
          {
            title: '腾讯会议',
            image: 'https://www.deepin.org/index/assets/icons/office/hy.png'
          }
        ],
        title: '日常办公',
        content:
          '快速解决办公问题，有效提升工作效率，让进步发生在生活中的每时每刻。'
      },
      {
        list: [
          {
            title: '腾讯视频',
            image: 'https://www.deepin.org/index/assets/icons/video/tx.png'
          },
          {
            title: '爱奇艺',
            image: 'https://www.deepin.org/index/assets/icons/video/qiy.png'
          },
          {
            title: 'QQ音乐',
            image: 'https://www.deepin.org/index/assets/icons/video/qq.png'
          },
          {
            title: '网易云音乐',
            image: 'https://www.deepin.org/index/assets/icons/video/wyy.png'
          },
          {
            title: '抖音',
            image: 'https://www.deepin.org/index/assets/icons/video/dy.png'
          },
          {
            title: 'Steam',
            image: 'https://www.deepin.org/index/assets/icons/video/steam.png'
          }
        ],
        title: '影音娱乐',
        content:
          '在有限的生命中，更多的时候都是平凡无奇，音乐、影视赋予我们无限的可能和想象，让平淡无奇的生活多了些闪光。'
      },
      {
        list: [
          {
            title: 'GIMP',
            image: 'https://www.deepin.org/index/assets/icons/design/gimp.png'
          },
          {
            title: 'Pixso',
            image: 'https://www.deepin.org/index/assets/icons/design/pixso.png'
          },
          {
            title: 'Krita',
            image: 'https://www.deepin.org/index/assets/icons/design/krita.png'
          },
          {
            title: 'OpenShot',
            image:
              'https://www.deepin.org/index/assets/icons/design/openshot.png'
          },
          {
            title: 'Blender',
            image:
              'https://www.deepin.org/index/assets/icons/design/blender.png'
          },
          {
            title: '美图秀秀',
            image: 'https://www.deepin.org/index/assets/icons/design/meitu.png'
          }
        ],
        title: '设计与制造',
        content:
          '从0到1，从草图到最终呈现出您想表达的完美构想，让不可能成为可能，是你们让的世界变得更加美好。'
      },
      {
        list: [
          {
            title: 'Visual Studio Code',
            image:
              'https://www.deepin.org/index/assets/icons/development/vscode.png'
          },
          {
            title: 'IntelliJ IDEA Ultimate',
            image:
              'https://www.deepin.org/index/assets/icons/development/intelliJ.png'
          },
          {
            title: 'Postman',
            image:
              'https://www.deepin.org/index/assets/icons/development/postman.png'
          },
          {
            title: 'Android Studio',
            image:
              'https://www.deepin.org/index/assets/icons/development/android.png'
          },
          {
            title: 'DTK IDE',
            image:
              'https://www.deepin.org/index/assets/icons/development/dtk.png'
          },
          {
            title: 'QtCreator',
            image:
              'https://www.deepin.org/index/assets/icons/development/qtcreator.png'
          }
        ],
        title: '软件开发',
        content:
          '软件开发是本世纪以来推进人类进步的核心力量，也是Linux长久发展的源动力，更多的开发者用户是我们构建完美发行版的最大动力。'
      }
    ]
  },
  footer: {
    navs: [
      {
        title: "关于deepin",
        links: [
          {
            text: "关于我们",
            url: "https://www.deepin.org/zh/aboutus/"
          },
          {
            text: "联系我们",
            url: "https://www.deepin.org/zh/contactus/"
          },
          {
            text: "条款协议",
            url: "https://www.deepin.org/zh/agreement"
          },
          {
            text: "国际排名",
            url: "https://distrowatch.com/table.php?distribution=deepin"
          }
        ]
      },
      {
        title: "海外社区",
        links: [
          {
            text: "西班牙语",
            url: "https://deepinenespañol.org/"
          },
          {
            text: "斯洛伐克",
            url: "https://deepin.sk/"
          },
          {
            text: "土耳其",
            url: "https://deepintr.js.org/"
          },
          {
            text: "巴西",
            url: "https://deepinbrasil.github.io/"
          },
          {
            text: "俄罗斯",
            url: "https://mydeepin.ru/"
          },
          {
            text: "厄瓜多尔",
            url: "https://deepin.lat/"
          },
          {
            text: "法语",
            url: "https://deepinfrance.com/"
          },
          {
            text: "玻利维亚",
            url: "https://deepinbolivia.com/"
          },
          {
            text: "沙特阿拉伯",
            url: "https://deepin.mydeom.com/"
          }
        ]
      },
      {
        title: "友情链接",
        links: [
          {
            text: "Ventoy",
            url: "https://www.ventoy.net"
          },
          {
            text: "uTools",
            url: "https://www.u.tools"
          },
          {
            text: "OSCHINA",
            url: "https://www.oschina.net"
          },
          {
            text: "CodeGeeX",
            url: "https://codegeex.cn/"
          }
        ]
      }
    ],
    qr: {
      title: "加入我们",
      imgs: [
        {
          text: "关注社区微信公众号",
          url: "",
          img: "https://bbs.deepin.org/assets/contact/wx.png"
        },
        {
          text: "论坛微信小程序",
          url: "",
          img: "https://www.deepin.org/wp-content/uploads/2023/11/deepin小程序码.png"
        },
        {
          text: "deepin小助手",
          url: "",
          img: "https://www.deepin.org/wp-content/uploads/2024/08/xiaozhushou.png"
        }
      ]
    }
  }
}

const newsMockData: News[] = [
  {
    "id": 35696,
    "date": "2024-12-06T10:31:02",
    "date_gmt": "2024-12-06T02:31:02",
    "guid": {
      "rendered": "https:\/\/www.deepin.org\/?p=35696"
    },
    "modified": "2024-12-06T10:34:07",
    "modified_gmt": "2024-12-06T02:34:07",
    "status": "publish",
    "type": "post",
    "link": "https:\/\/www.deepin.org\/zh\/dduc-2024-cooperative-recruitment\/",
    "title": {
      "rendered": "DDUC 2024\uff1a\u5408\u4f5c\u793e\u533a\/\u5a92\u4f53\u3001\u6d3b\u52a8\u5fd7\u613f\u8005\u62db\u52df\u4e2d\uff0c\u8bda\u9080\u53c2\u4e0e\uff01"
    },
    "content": {
      "rendered": "<p><img loading=\"lazy\" class=\"alignnone size-full wp-image-35697\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383.jpg\" alt=\"\" width=\"900\" height=\"383\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383.jpg 900w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-300x128.jpg 300w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-150x64.jpg 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-768x327.jpg 768w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-24x10.jpg 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-36x15.jpg 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/900x383-48x20.jpg 48w\" sizes=\"(max-width: 900px) 100vw, 900px\" \/><\/p>\n<p>\u6211\u4eec\u8363\u5e78\u5730\u5ba3\u5e03\uff0c<strong>\u7b2c\u5341\u56db\u5c4a\u6df1\u5ea6\u5f00\u53d1\u8005\u4e0e\u7528\u6237\u5927\u4f1a<\/strong>\uff08DDUC 2024\uff09\u5c06\u4e8e2024\u5e7412\u670821\u65e5\u5728\u6e56\u5317\u5927\u5b66\uff08\u6b66\u660c\u4e3b\u6821\u533a\uff09\u9686\u91cd\u53ec\u5f00\u3002\u4f5c\u4e3a deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u7684\u5e74\u5ea6\u76db\u4e8b\uff0cDDUC\u65e8\u5728\u6c47\u805a\u5f00\u6e90\u9886\u57df\u7684\u4e13\u5bb6\u5b66\u8005\u3001\u6280\u672f\u7cbe\u82f1\u4ee5\u53ca\u5e7f\u5927 deepin \u7528\u6237\uff0c\u4fc3\u8fdb\u4ea4\u6d41\u4e0e\u5206\u4eab\u3002<\/p>\n<p><strong>\u672c\u5c4a\u5927\u4f1a\u7684\u4e3b\u9898\u662f\uff1a\u300cDeep in deepin\u300d<\/strong>\uff0c\u5c06\u91cd\u70b9\u5206\u4eab\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u7684\u6700\u65b0\u6280\u672f\u6210\u679c\uff0c\u611f\u8c22 deepin \u7528\u6237\u7684\u5353\u8d8a\u6210\u5c31\uff0c\u5e76\u63a2\u8ba8\u5f00\u6e90\u6280\u672f\u7684\u672a\u6765\u53d1\u5c55\u8d8b\u52bf\u3002\u6211\u4eec\u575a\u4fe1\uff0c\u901a\u8fc7\u6df1\u5165\u7684\u4ea4\u6d41\u4e0e\u5408\u4f5c\uff0c\u5fc5\u5c06\u8fdb\u4e00\u6b65\u63a8\u52a8\u5f00\u6e90\u793e\u533a\u7684\u7e41\u8363\u4e0e\u53d1\u5c55\u3002<\/p>\n<p>\u65e5\u524d\uff0cDDUC\u00a02024\u00a0\u7684\u524d\u671f\u7b79\u5907\u5de5\u4f5c\u5df2\u5b8c\u6210\uff0cdeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u4f5c\u4e3a\u4e00\u4e2a\u975e\u8425\u5229\u7ec4\u7ec7\uff0c\u4e3a\u4e86\u8ba9\u672c\u6b21\u4f1a\u8bae\u529e\u5f97\u66f4\u52a0\u6210\u529f\uff0c<strong>\u6211\u4eec\u8bda\u631a\u9080\u8bf7\u4f01\u4e1a\u3001\u793e\u533a\u548c\u4e2a\u4eba\u53c2\u4e0e\u8d5e\u52a9\uff0c\u5171\u540c\u652f\u6301\u5927\u4f1a\u7684\u4e3e\u529e\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u793c\u54c1\u3001\u4f1a\u52a1\u652f\u6301\u7b49\u591a\u79cd\u65b9\u5f0f\u4e3a\u5927\u4f1a\u8d21\u732e\u529b\u91cf\u3002<\/strong>\u6211\u4eec\u70ed\u5ff1\u6b22\u8fce\u5bf9\u8d5e\u52a9\u611f\u5174\u8da3\u7684\u5f00\u6e90\u754c\u670b\u53cb\u4eec\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb<strong>\uff08\u5fae\u4fe1\u53f7\uff1aAri-30Nn\uff09<\/strong>\uff0c\u83b7\u53d6\u8be6\u7ec6\u7684\u8d5e\u52a9\u65b9\u6848\uff0c\u5e76\u8fdb\u4e00\u6b65\u6c9f\u901a\u5408\u4f5c\u7ec6\u8282\u3002\u8ba9\u6211\u4eec\u643a\u624b\u5408\u4f5c\uff0c\u4e92\u52a9\u4e92\u5229\uff0c\u5171\u540c\u63a8\u52a8\u5f00\u6e90\u4e8b\u4e1a\u7684\u53d1\u5c55\uff0c\u5b9e\u73b0\u5171\u8d62\u7684\u76ee\u6807\u3002<\/p>\n<p>\u5982\u540c\u5f80\u5e74\uff0c\u6211\u4eec\u671f\u671b DDUC \u80fd\u591f\u6210\u4e3a\u8fde\u63a5\u66f4\u591a\u793e\u533a\u4f19\u4f34\u7684\u6865\u6881\u3002<strong>\u4eca\u5e74\uff0c\u6211\u4eec\u7279\u522b\u8bda\u631a\u5730\u5411\u6240\u6709\u6d3b\u8dc3\u7684\u5f00\u6e90\u6280\u672f\u793e\u533a\u4f19\u4f34\u53d1\u51fa\u9080\u8bf7\uff0c\u5e0c\u671b\u4f60\u4eec\u80fd\u6210\u4e3a\u6211\u4eec\u672c\u6b21\u6d3b\u52a8\u7684\u793e\u533a\u5408\u4f5c\u4f19\u4f34\u3002<\/strong><\/p>\n<p>&nbsp;<\/p>\n<section>\n<section>\n<h1 style=\"text-align: center;\"><strong>\u5f00\u6e90\u793e\u533a\/\u5a92\u4f53\u5ba3\u4f20\u5408\u4f5c\u62db\u52df<\/strong><\/h1>\n<\/section>\n<\/section>\n<h2><strong>\u5408\u4f5c\u793e\u533a\/\u5a92\u4f53\u6743\u76ca<\/strong><\/h2>\n<ol>\n<li>\u7f51\u7ad9\u5c55\u793a\uff1a\u60a8\u7684\u793e\u533a LOGO \u5c06\u5728 DDUC \u6d3b\u52a8\u7f51\u7ad9\u4e0a\u663e\u8457\u5c55\u793a\uff0c\u5e76\u9644\u5e26\u793e\u533a\u8df3\u8f6c\u94fe\u63a5\uff1b<\/li>\n<li>\u7ebf\u4e0b\u66dd\u5149\uff1a\u5728 DDUC \u7ebf\u4e0b\u6d3b\u52a8\u7684\u5ba3\u4f20\u5c55\u677f\u4e0a\uff0c\u60a8\u7684\u793e\u533a LOGO \u5c06\u83b7\u5f97\u5c55\u793a\u673a\u4f1a\uff0c\u589e\u52a0\u73b0\u573a\u53ef\u89c1\u5ea6\uff1b<\/li>\n<li>\u5a92\u4f53\u5ba3\u4f20\uff1aDDUC \u6d3b\u52a8\u73b0\u573a\u4ee5\u53ca deepin \u7684\u5a92\u4f53\u548c\u89c6\u9891\u6e20\u9053\u5c06\u5bf9\u60a8\u7684\u793e\u533a\u8fdb\u884c\u5ba3\u4f20\uff0c\u5305\u62ec\u5728DDUC\u795d\u798f\u89c6\u9891\u4e2d\u5c55\u793a\u793e\u533a\u6807\u8bc6\uff1b<\/li>\n<li>\u4e13\u5c5e\u9080\u8bf7\u51fd\uff1a\u63d0\u4f9b\u793e\u533a\u4e13\u5c5e\u9080\u8bf7\u51fd\uff0c\u53ef\u7528\u4e8e\u793e\u533a\u7684\u5ba3\u4f20\u6d3b\u52a8\uff0c\u589e\u5f3a\u793e\u533a\u5f62\u8c61\uff1b<\/li>\n<li>\u5468\u8fb9\u793c\u5305\uff1adeepin \u793e\u533a\u4e3a\u5408\u4f5c\u793e\u533a\/\u5a92\u4f53\u7cbe\u5fc3\u51c6\u5907\u4e86\u5468\u8fb9\u5927\u793c\u5305\u4e00\u4efd\u3002\u60a8\u53ef\u4ee5\u5728\u7ebf\u4e0b\u6d3b\u52a8\u4e2d\u4f18\u5148\u9886\u53d6\uff0c\u82e5\u65e0\u6cd5\u53c2\u4e0e\u7ebf\u4e0b\u5927\u4f1a\uff0c\u8bf7\u8054\u7cfb deepin \u793e\u533a\u9886\u53d6\u3002<\/li>\n<\/ol>\n<h2><strong>\u5408\u4f5c\u793e\u533a\/\u5a92\u4f53\u4e49\u52a1<\/strong><\/h2>\n<p>\u5408\u4f5c\u4f19\u4f34\u9700\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\uff08\u81f3\u5c11\u9009\u62e9\u4e24\u9879\uff09\u53c2\u4e0e DDUC \u6d3b\u52a8\u7684\u5ba3\u4f20\u5de5\u4f5c\uff1a<\/p>\n<ol>\n<li>\u793e\u4ea4\u5a92\u4f53\u63a8\u5e7f\uff1a\u5728\u793e\u533a\u7684\u5fae\u4fe1\u516c\u4f17\u53f7\u81f3\u5c11\u8f6c\u53d11-2\u7bc7 DDUC \u76f8\u5173\u6587\u7ae0\uff1b<\/li>\n<li>\u793e\u7fa4\u4e92\u52a8\uff1a\u5728\u793e\u533a\u81ea\u6709\u7684\u793e\u7fa4\u548c\u670b\u53cb\u5708\u91cc\u8f6c\u53d1 DDUC \u7684\u76f8\u5173\u5ba3\u4f20\u6587\u7ae0\u3001\u6d77\u62a5\u548c\u76f4\u64ad\u95f4\u94fe\u63a5\uff1b<\/li>\n<li>\u793e\u533a\u8054\u5408\u76f4\u64ad\uff1a\u901a\u8fc7\u89c6\u9891\u53f7\u3001\u6296\u97f3\u3001\u54d4\u54e9\u54d4\u54e9\u7b49\u6e20\u9053\u8f6c\u64ad DDUC \u6d3b\u52a8\uff1b<\/li>\n<li>\u795d\u798f\u89c6\u9891\u5236\u4f5c\uff1a\u793e\u533a\u63d0\u4f9b\u53c2\u4e0e DDUC \u6d3b\u52a8\u7684\u795d\u798f\u89c6\u9891\uff0cdeepin \u5c06\u534f\u52a9\u5728\u5a92\u4f53\u6e20\u9053\u66dd\u5149\u4f20\u64ad\uff1b<\/li>\n<li>\u591a\u6e20\u9053\u5ba3\u4f20\uff1a\u5229\u7528\u793e\u533a\u5176\u4ed6\u81ea\u6709\u5a92\u4f53\u6e20\u9053\u8fdb\u884c\u5ba3\u4f20\u3002<\/li>\n<\/ol>\n<h2><strong>\u62a5\u540d\u9700\u63d0\u4ea4\u7684\u6750\u6599<\/strong><\/h2>\n<ol>\n<li>\u793e\u533a LOGO \u53ca\u94fe\u63a5\uff1b<\/li>\n<li>\u793e\u533a\u7b80\u5355\u6587\u5b57\u4ecb\u7ecd\uff08200\u5b57\u4e0a\u4e0b\uff09\u3002<\/li>\n<\/ol>\n<h2><strong>\u62a5\u540d\u65f6\u95f4<\/strong><\/h2>\n<ol>\n<li>\u5f00\u59cb\u65f6\u95f4\uff1a\u5373\u65e5\u8d77\uff1b<\/li>\n<li>\u622a\u6b62\u65f6\u95f4\uff1a2024\u5e7412\u670815\u65e5\uff08\u5468\u65e5\uff09\u3002<\/li>\n<\/ol>\n<h2><strong>\u62a5\u540d\u65b9\u5f0f<\/strong><\/h2>\n<p><a href=\"https:\/\/uniontech.wjx.cn\/vm\/e0lsjQB.aspx#\">https:\/\/uniontech.wjx.cn\/vm\/e0lsjQB.aspx#<\/a><\/p>\n<p><img loading=\"lazy\" class=\"size-full wp-image-35698 aligncenter\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df.jpg\" alt=\"\" width=\"150\" height=\"150\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df.jpg 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df-100x100.jpg 100w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df-24x24.jpg 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df-36x36.jpg 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5ba3\u4f20\u5408\u4f5c\u62db\u52df-48x48.jpg 48w\" sizes=\"(max-width: 150px) 100vw, 150px\" \/><\/p>\n<p>&nbsp;<\/p>\n<section>\n<h1 style=\"text-align: center;\"><strong>\u5fd7\u613f\u8005\u62db\u52df<\/strong><\/h1>\n<\/section>\n<section>\u6211\u4eec\u8bda\u631a\u9080\u8bf7\u5f00\u6e90\u793e\u533a\u7684\u670b\u53cb\u4eec\u548c\u9ad8\u6821\u540c\u5b66\u4eec\u52a0\u5165\u7b2c\u5341\u56db\u5c4adeepin\u5f00\u53d1\u8005\u4e0e\u7528\u6237\u5927\u4f1a\uff08DDUC\uff09\u5fd7\u613f\u8005\u56e2\u961f\u3002\u8fd9\u662f\u4e00\u4e2a\u4e0e\u56fd\u5185\u77e5\u540d\u5f00\u6e90\u793e\u533a\u3001\u4f01\u4e1a\u548c\u4e1a\u754c\u5927\u5496\u4ea4\u6d41\u63a2\u8ba8\u3001\u7ed3\u4ea4\u670b\u53cb\u3001\u5206\u4eab\u5feb\u4e50\u7684\u597d\u673a\u4f1a\u3002<\/p>\n<h2><strong>\u5fd7\u613f\u8005\u5de5\u4f5c\u65f6\u95f4\u4e0e\u5730\u70b9<\/strong><\/h2>\n<ol>\n<li>\u65f6\u95f4\uff1a2024\u5e7412\u670821\u65e5\uff08\u5468\u516d\uff09\uff1b<\/li>\n<li>\u5730\u70b9\uff1a\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u00b7\u6e56\u5317\u5927\u5b66\uff08\u6b66\u660c\u4e3b\u6821\u533a\uff09\u3002<\/li>\n<\/ol>\n<\/section>\n<h2><strong>\u5fd7\u613f\u8005\u53c2\u4e0e\u65b9\u5f0f<\/strong><\/h2>\n<p>\u7ebf\u4e0a\u5fd7\u613f\u8005<\/p>\n<ol>\n<li>\u5927\u4f1a\u5ba3\u4f20\u534f\u52a9\uff1a\u89c6\u9891\u526a\u8f91\u3001\u6f14\u8bb2\u6750\u6599\u6574\u7406\u7b49\uff1b<\/li>\n<li>\u793e\u533a\u5408\u4f5c\u5fd7\u613f\u8005\uff1a\u8d1f\u8d23\u5927\u4f1a\u5bf9\u5916\u5408\u4f5c\u4e8b\u52a1\u7684\u8ddf\u8e2a\u548c\u63a8\u8fdb\u3002<\/li>\n<\/ol>\n<p>\u7ebf\u4e0b\u5fd7\u613f\u8005<\/p>\n<ol>\n<li>\u5927\u4f1a\u5ba3\u4f20\u534f\u52a9\uff1a\u89c6\u9891\u526a\u8f91\u3001\u6f14\u8bb2\u6750\u6599\u6574\u7406\u7b49\uff1b<\/li>\n<li>\u793e\u533a\u5408\u4f5c\u5fd7\u613f\u8005\uff1a\u8d1f\u8d23\u5927\u4f1a\u5bf9\u5916\u5408\u4f5c\u4e8b\u52a1\u7684\u8ddf\u8e2a\u548c\u63a8\u8fdb\uff1b<\/li>\n<li>\u6d3b\u52a8\u524d\u4f1a\u573a\u51c6\u5907\uff1a\u5305\u62ec\u573a\u5730\u5e03\u7f6e\u7b49\uff0812\u670820\u65e5\uff09\uff1b<\/li>\n<li>\u6d3b\u52a8\u5f53\u5929\u51c6\u5907\uff1a\u8d1f\u8d23\u7b7e\u5230\u3001\u5609\u5bbe\u63a5\u5f85\u3001\u5f15\u5bfc\u53ca\u79e9\u5e8f\u7ef4\u62a4\u7b49\uff0812\u670821\u65e5\uff09\u3002<\/li>\n<\/ol>\n<h2><strong>\u62db\u52df\u65f6\u95f4<\/strong><\/h2>\n<ol>\n<li>\u5f00\u59cb\u65f6\u95f4\uff1a\u5373\u65e5\u8d77<\/li>\n<li>\u622a\u6b62\u65f6\u95f4\uff1a2024\u5e7412\u670815\u65e5\uff08\u5468\u65e5\uff09<\/li>\n<\/ol>\n<section>\n<section>\n<section>\n<section>\n<h2><strong>\u5fd7\u613f\u8005\u798f\u5229<\/strong><\/h2>\n<ol>\n<li>\u5927\u4f1a\u5fd7\u613f\u8005\u8bc1\u4e66\uff1a\u60a8\u5c06\u83b7\u5f97\u4e13\u5c5e\u7684\u5927\u4f1a\u5fd7\u613f\u8005\u8bc1\u4e66\uff1b<\/li>\n<li>\u793e\u533a\u9650\u5b9a\u7eaa\u5ff5\u886b\uff1a\u7279\u522b\u7eaa\u5ff5\u886b1\u4ef6\uff1b<\/li>\n<li>\u4e8c\u5341\u5468\u5e74\u7279\u8272\u5468\u8fb9\uff1a\u5e86\u795d deepin \u793e\u533a\u6210\u7acb\u4e8c\u5341\u5468\u5e74\uff0c\u60a8\u5c06\u83b7\u5f97\u72ec\u7279\u7684\u7eaa\u5ff5\u5468\u8fb9\uff1b<\/li>\n<li>\u00a0\u5927\u5496\u6c9f\u901a\u4ea4\u6d41\u673a\u4f1a\uff1a\u4e0e\u4e1a\u754c\u5927\u725b\u8bb2\u5e08\u9762\u5bf9\u9762\u4ea4\u6d41\uff0c\u83b7\u5f97\u5b9d\u8d35\u7684\u5b66\u4e60\u548c\u6210\u957f\u673a\u4f1a\uff1b<\/li>\n<li>\u7ed3\u8bc6\u65b0\u670b\u53cb\uff1a\u5728 DDUC \u7ed3\u8bc6\u5fd7\u540c\u9053\u5408\u7684\u65b0\u670b\u53cb\uff0c\u5171\u540c\u611f\u53d7\u5f00\u6e90\u793e\u533a\u7684\u70ed\u60c5\u548c\u6d3b\u529b\uff1b<\/li>\n<li>\u5de5\u4f5c\u9910\u53ca\u665a\u5bb4\uff1a\u4eab\u53d7 DDUC \u5f53\u5929\u7684\u5de5\u4f5c\u5348\u9910\u548c\u665a\u5bb4\uff0c\u4e0e\u6240\u6709\u53c2\u4e0e\u8005\u5171\u5ea6\u7f8e\u597d\u65f6\u5149\u3002<\/li>\n<\/ol>\n<p>\u6ce8\uff1a\u4ee5\u4e0a\u798f\u5229\u4ec5\u5bf9\u5728\u6d3b\u52a8\u671f\u95f4\u5b8c\u6210\u4efb\u52a1\u3001\u505a\u51fa\u8d21\u732e\u7684\u5fd7\u613f\u8005\u53d1\u653e\u3002<\/p>\n<\/section>\n<\/section>\n<\/section>\n<\/section>\n<h2><strong>\u62a5\u540d\u65b9\u5f0f<\/strong><\/h2>\n<p><a href=\"https:\/\/uniontech.wjx.cn\/vm\/PWckIkT.aspx#\">https:\/\/uniontech.wjx.cn\/vm\/PWckIkT.aspx#<\/a><\/p>\n<p><img loading=\"lazy\" class=\"alignnone size-full wp-image-35699 aligncenter\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df.jpg\" alt=\"\" width=\"150\" height=\"150\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df.jpg 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df-100x100.jpg 100w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df-24x24.jpg 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df-36x36.jpg 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u5fd7\u613f\u8005\u62db\u52df-48x48.jpg 48w\" sizes=\"(max-width: 150px) 100vw, 150px\" \/><\/p>\n<p>\u611f\u8c22\u6bcf\u4e00\u4f4d\u652f\u6301 DDUC 2024 \u7684\u670b\u53cb\uff0c\u6211\u4eec\u671f\u5f85\u5728\u5927\u4f1a\u4e0a\u89c1\u5230\u6bcf\u4e00\u4f4d\u70ed\u7231\u5f00\u6e90\u7684\u4f60\uff01<\/p>\n<p>&nbsp;<\/p>\n<h1><strong>\u76f8\u5173\u9605\u8bfb\uff1a<\/strong><\/h1>\n<p>\uff081\uff09<a href=\"https:\/\/distrowatch.com\/table.php?distribution=deepin\">\u652f\u6301 deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/a><\/p>\n<p>\uff082\uff09<a href=\"https:\/\/www.deepin.org\/zh\/dduc\/\">\u5f80\u671f\u6df1\u5ea6\u5f00\u53d1\u8005\u4e0e\u7528\u6237\u5927\u4f1a\uff08DDUC\uff09<\/a><\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<article id=\"post-35681\" class=\"post-35681 post type-post status-publish format-standard hentry category-deepin-community-reports category-community-news\">\n<div class=\"entry-content\">\n<p style=\"text-align: right;\">\u5185\u5bb9\u6765\u6e90\uff1adeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/p>\n<p style=\"text-align: right;\">\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904<\/p>\n<\/div>\n<\/article>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>\u6211\u4eec\u8363\u5e78\u5730\u5ba3\u5e03\uff0c\u7b2c\u5341\u56db\u5c4a\u6df1\u5ea6\u5f00\u53d1\u8005\u4e0e\u7528\u6237\u5927\u4f1a\uff08DDUC 2024\uff09\u5c06\u4e8e2024\u5e7412\u670821\u65e5\u5728\u6e56\u5317\u5927\u5b66\uff08\u6b66\u660c\u4e3b\u6821\u533a\uff09\u9686\u91cd\u53ec\u5f00\u3002\u4f5c\u4e3a deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u7684\u5e74\u5ea6\u76db\u4e8b\uff0cDDUC\u65e8\u5728\u6c47\u805a\u5f00\u6e90\u9886\u57df\u7684\u4e13\u5bb6\u5b66\u8005\u3001\u6280\u672f\u7cbe\u82f1\u4ee5\u53ca\u5e7f\u5927 deepin \u7528\u6237\uff0c\u4fc3\u8fdb\u4ea4\u6d41\u4e0e\u5206\u4eab\u3002 \u672c\u5c4a\u5927\u4f1a\u7684\u4e3b\u9898\u662f\uff1a\u300cDeep in deepin\u300d\uff0c\u5c06\u91cd\u70b9\u5206\u4eab\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u7684\u6700\u65b0\u6280\u672f\u6210\u679c\uff0c\u611f\u8c22 deepin \u7528\u6237\u7684\u5353\u8d8a\u6210\u5c31\uff0c\u5e76\u63a2\u8ba8\u5f00\u6e90\u6280\u672f ...<a href=https:\/\/www.deepin.org\/zh\/dduc-2024-cooperative-recruitment\/>\u9605\u8bfb\u66f4\u591a<\/a><\/p>\n",
      "protected": false
    },
  },
  {
    "id": 35681,
    "date": "2024-12-04T16:55:29",
    "date_gmt": "2024-12-04T08:55:29",
    "guid": {
      "rendered": "https:\/\/www.deepin.org\/?p=35681"
    },
    "modified": "2024-12-04T17:22:39",
    "modified_gmt": "2024-12-04T09:22:39",
    "status": "publish",
    "type": "post",
    "link": "https:\/\/www.deepin.org\/zh\/deepin-community-monthly-report-2024-11\/",
    "title": {
      "rendered": "deepin \u793e\u533a\u6708\u62a5\u4e282024\u5e7411\u6708\uff0c\u5fae\u4fe1Linux4.0\u4e0a\u7ebf\u3001deepin IDE&#038;UOS AI\u5347\u7ea7"
    },
    "content": {
      "rendered": "<p><img loading=\"lazy\" class=\"alignnone size-full wp-image-34711\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh.jpeg\" alt=\"\" width=\"900\" height=\"383\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh.jpeg 900w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-300x128.jpeg 300w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-150x64.jpeg 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-768x327.jpeg 768w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-24x10.jpeg 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-36x15.jpeg 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/09\/2024-08-zh-48x20.jpeg 48w\" sizes=\"(max-width: 900px) 100vw, 900px\" \/><\/p>\n<h1 style=\"text-align: center;\"><strong>deepin \u793e\u533a 11 \u6708\u6570\u636e\u603b\u89c8<\/strong><\/h1>\n<p><img class=\"aligncenter\" src=\"https:\/\/wdcdn.qpic.cn\/MTY4ODg1NTMyNTQ4MzIwNA_756361_GikXaXhGo3sxsAU3_1733126895?w=1920&amp;h=1080&amp;type=image\/png\" alt=\"\" \/><\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u4e00-\u793e\u533a\u4ea7\u54c1\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u4ea7\u54c1<\/strong><\/h1>\n<p id=\"--deepin-IDE\u91cd\u78c5\u5347\u7ea7-\u65b0\u589e\u667a\u80fd\u7ec8\u7aef\u7b49\u65b0\u529f\u80fd\"><strong>1\u3001deepin IDE\u91cd\u78c5\u5347\u7ea7\uff0c\u65b0\u589e\u667a\u80fd\u7ec8\u7aef\u7b49\u65b0\u529f\u80fd<\/strong><\/p>\n<p>2024\u5e7411\u6708\uff0cdeepin IDE\u8fce\u6765\u91cd\u78c5\u5347\u7ea7\uff0c\u6b64\u6b21\u66f4\u65b0\u4e2ddeepin-IDE\u5bf9\u4ee5\u4e0b\u529f\u80fd\u70b9\u8fdb\u884c\u4e86\u91cd\u70b9\u4f18\u5316\u53ca\u66f4\u65b0\uff1a<\/p>\n<p>\u2460 \u5185\u8054\u804a\u5929\u529f\u80fd\uff0c\u9009\u4e2d\u51fd\u6570\u5c31\u53ef\u4ee5\u5bf9\u8fd9\u6bb5\u51fd\u6570\u8fdb\u884c\u63d0\u95ee\uff0c\u53ef\u652f\u6301\u667a\u80fd\u7f16\u8f91\u548c\u5feb\u95ee\u5feb\u7b54\u4e24\u79cd\u529f\u80fd\u3002<\/p>\n<p>\u2461 Codebase\u529f\u80fd\uff0c\u5373\u4fbf\u4e0d\u719f\u6089\u7684\u4ee3\u7801\u5de5\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u5feb\u901f\u7684\u4e86\u89e3\u5de5\u7a0b\u7684\u529f\u80fd\uff0c\u751a\u81f3\u53ef\u7528\u4e8e\u5feb\u901f\u5b9a\u4f4d\u5de5\u7a0b\u4e2d\u67d0\u529f\u80fd\u6240\u5728\u7684\u4f4d\u7f6e\u3002<\/p>\n<p>\u2462 \u7ec8\u7aef\u667a\u80fd\u95ee\u7b54\u529f\u80fd\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u8fdb\u884c\u667a\u80fd\u95ee\u7b54\uff0c\u4f8b\u5982\u5929\u6c14\u67e5\u8be2\u7b49\u3002<\/p>\n<ul>\n<li><a href=\"https:\/\/mp.weixin.qq.com\/s\/8_o3mPF5db4R6fyyRVeM2Q\" target=\"_blank\" rel=\"noopener\">deepin-IDE \u54ea\u91cc\u5f31\u5566\uff1f\u8fd9\u53ef\u592a\u68d2\u4e86\uff01<\/a><\/li>\n<\/ul>\n<p>&nbsp;<\/p>\n<p id=\"--deepin-23-\u4ea7\u54c1\u66f4\u65b0\u4e0e\u7528\u6237\u53cd\u9988\"><strong>2\u3001deepin 23 \u4ea7\u54c1\u66f4\u65b0\u4e0e\u7528\u6237\u53cd\u9988<\/strong><\/p>\n<p id=\"deepin23\u66f4\u65b0-\">deepin 23 \u66f4\u65b0\uff1a2024\u5e7411\u6708\uff0cdeepin23\u5185\u6d4b\u66f4\u65b03\u6b21\uff0c\u65b0\u589e\u529f\u80fd20\u4e2a\uff0c\u95ee\u9898\u4fee\u590d29\u4e2a\u3002<\/p>\n<p id=\"--\u6df1\u5ea6\u4e4b\u5bb6-\">\u6df1\u5ea6\u4e4b\u5bb6\uff1a2024\u5e7411\u6708\uff0c\u6df1\u5ea6\u4e4b\u5bb6\u5171\u6536\u5230\u7528\u6237bug\u53ca\u9700\u6c42\u53cd\u9988186\u6761\uff1a\u5f53\u4e2dbug\u53cd\u9988169\u4e2a\uff0c\u9700\u6c42\u53cd\u998867\u4e2a\uff0c\u5df2\u4fee\u590d3\u4e2a\uff0c\u786e\u8ba4\u7cfb\u7edfbug27\u4e2a\uff1b\u5df2\u4fee\u590d\u7684bug\u5305\u62ec\u7528\u6237\u53cd\u9988\u7684\u3010\u73b2\u73d1\u66f4\u65b0\u540ell-cli migrate\u547d\u4ee4\u62a5\u9519\u3011\u3001\u3010\u5e94\u7528\u5546\u5e97\u5b89\u88c5\u575a\u679c\u4e91\u6709\u4e24\u4e2a\u56fe\u6807\u3011\u3001\u7b49\u95ee\u9898\u3002<\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u4e8c-\u793e\u533a\u6d77\u5916\u5f71\u54cd\u529b\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u6d77\u5916\u5f71\u54cd\u529b<\/strong><\/h1>\n<p id=\"--deepin-\u7b2c9\u4e2a\u6d77\u5916\u5206\u652f\u793e\u533a-\u6c99\u7279\u963f\u62c9\u4f2f\u7ad9-\u6b63\u5f0f\u6210\u7acb-\"><strong>1\u3001deepin \u7b2c9\u4e2a\u6d77\u5916\u5206\u652f\u793e\u533a\uff1a\u6c99\u7279\u963f\u62c9\u4f2f\u7ad9\uff0c\u6b63\u5f0f\u6210\u7acb\uff01<\/strong><\/p>\n<p>\u968f\u7740 deepin \u793e\u533a\u56fd\u9645\u5316\u6b65\u4f10\u7684\u7a33\u5065\u524d\u884c\uff0cdeepin \u7684\u7b2c9\u4e2a\u6d77\u5916\u5206\u652f\u793e\u533a\u2014\u2014\u6c99\u7279\u963f\u62c9\u4f2f\u7ad9\uff0c\u73b0\u5df2\u6b63\u5f0f\u6210\u7acb\uff01\u8fd9\u4e5f\u6807\u5fd7\u7740 deepin \u793e\u533a\u5728\u963f\u62c9\u4f2f\u534a\u5c9b\u7684\u5f71\u54cd\u529b\u5f97\u5230\u4e86\u8fdb\u4e00\u6b65\u63d0\u5347\uff0c\u4e5f\u4e3a deepin \u7684\u5168\u7403\u5316\u5f81\u7a0b\u94fa\u8bbe\u4e86\u66f4\u52a0\u575a\u5b9e\u7684\u57fa\u7840\u3002<\/p>\n<p>&nbsp;<\/p>\n<p id=\"--deepin\u5384\u74dc\u591a\u5c14\u7ad9\u5b8c\u6210deepin-Insight-Magazine\u7b2c\u4e00\u7248\u6587\u6848\u548c\u7ffb\u8bd1\"><strong>2\u3001deepin\u5384\u74dc\u591a\u5c14\u7ad9\u5b8c\u6210deepin Insight Magazine\u7b2c\u4e00\u7248\u6587\u6848\u548c\u7ffb\u8bd1<\/strong><\/p>\n<p>2024\u5e7411\u6708\uff0cdeepin\u5384\u74dc\u591a\u5c14\u5206\u652f\u7ad9\u70b9\u5df2\u5b8c\u6210\u300adeepin Insight Magazine\u300b\u7b2c\u4e00\u7248\u7684\u6587\u6848\u548c\u7ffb\u8bd1\u5de5\u4f5c\uff0c\u8fd9\u662fdeepin\u793e\u533a\u56fd\u9645\u5316\u8fdb\u7a0b\u4e2d\u7684\u53c8\u4e00\u91cd\u8981\u91cc\u7a0b\u7891\u3002<\/p>\n<p>\u300adeepin Insight Magazine\u300b\u65e8\u5728\u4e3a\u5168\u7403\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u6df1\u5165\u4e86\u89e3deepin\u64cd\u4f5c\u7cfb\u7edf\u548c\u793e\u533a\u52a8\u6001\u7684\u5e73\u53f0\u3002\u8be5\u6742\u5fd7\u4e0d\u4ec5\u6db5\u76d6\u4e86deepin\u7684\u6700\u65b0\u6280\u672f\u8fdb\u5c55\uff0c\u8fd8\u5305\u542b\u4e86\u4e30\u5bcc\u7684\u7528\u6237\u4f53\u9a8c\u6545\u4e8b\u548c\u5f00\u6e90\u6587\u5316\u5185\u5bb9\u3002<\/p>\n<p>\u6b64\u6b21\uff0c\u5384\u74dc\u591a\u5c14\u5206\u652f\u7ad9\u70b9\u7684\u56e2\u961f\u6210\u5458\u4eec\u5c55\u73b0\u4e86\u5353\u8d8a\u7684\u4e13\u4e1a\u80fd\u529b\u548c\u5bf9deepin\u793e\u533a\u7684\u6df1\u539a\u70ed\u60c5\u3002\u4ed6\u4eec\u7684\u52aa\u529b\u4e0d\u4ec5\u4f7f\u5f97\u300adeepin Insight Magazine\u300b\u5f97\u4ee5\u4ee5\u5f53\u5730\u8bed\u8a00\u5448\u73b0\uff0c\u66f4\u52a0\u5f3a\u4e86deepin\u5728\u5384\u74dc\u591a\u5c14\u4e43\u81f3\u6574\u4e2a\u5357\u7f8e\u6d32\u7684\u5f71\u54cd\u529b\u3002<\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u4e09-\u793e\u533aSIG-11\u6708\u8fdb\u5c55\" style=\"text-align: center;\"><strong>deepin \u793e\u533a SIG 11\u6708\u8fdb\u5c55<\/strong><\/h1>\n<h2 id=\"\u73b0\u6709\u5c0f\u7ec4\u52a8\u6001-\"><strong>\u73b0\u6709\u5c0f\u7ec4\u52a8\u6001\uff1a<\/strong><\/h2>\n<p><strong>1. deepin-ports SIG:<\/strong><\/p>\n<ul>\n<li>golang\u66f4\u65b01.22.6\uff0c\u786e\u4fdd\u90e8\u5206\u67b6\u6784\u7684golang\u652f\u6301<\/li>\n<li>RISC-V \u5206\u652f\u66f4\u65b0\u4e86\u8f83\u65b0\u7684 chromium<\/li>\n<li>RISC-V \u5206\u652f\u6253\u5305\u4e86\u6570\u4e2a\u4e0d\u540c\u7248\u672c\u7684 electron<\/li>\n<li>box64 \u63a8\u8fdb deepin \u4e3b\u7ebf\u5e76\u5728 arm64 \u548c riscv64 \u5e73\u53f0\u4e0a\u8fdb\u884c\u4e86\u9a8c\u8bc1<\/li>\n<\/ul>\n<p><strong>2. deepin LoongArch SIG:<\/strong><\/p>\n<ul>\n<li>\u5347\u7ea7 glibc\uff0cgcc-12\uff0cbinutils<\/li>\n<li>\u5185\u6838\u7740\u624b\u5347\u7ea76.12\uff0c\u65b0\u589e\u9f99\u82af3c6000\u7684\u652f\u6301<\/li>\n<\/ul>\n<p><strong>3.DDE SIG:<\/strong><\/p>\n<ul>\n<li>\u5bf9\u526a\u5207\u677f\u3001\u5378\u8f7d\u670d\u52a1\u3001\u6258\u76d8\u52a0\u8f7d\u5668\u7b49\u7ec4\u4ef6\u5b8c\u6210\u4e86 Qt 6.8 \u9002\u914d\u652f\u6301<\/li>\n<li>\u4efb\u52a1\u680f\u7b49\u591a\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684 Treeland \u9002\u914d<\/li>\n<li>QML \u7248\u63a7\u5236\u4e2d\u5fc3\u7684\u8d26\u6237\u3001\u7f51\u7edc\u3001\u4e2a\u6027\u5316\u3001\u952e\u76d8\u7b49\u6a21\u5757\u6301\u7eed\u5f00\u53d1\u521d\u6b65\u5b8c\u6210\uff0c\u5176\u5b83\u6a21\u5757\u4ecd\u5728\u7ee7\u7eed\u4f18\u5316\u4e2d<\/li>\n<li>\u5bf9\u526a\u5207\u677f\u3001DDE \u4f1a\u8bdd\u7ec4\u4ef6\u3001DDE Polkit \u7ec4\u4ef6\u4ee5\u53ca\u5468\u8fb9\u670d\u52a1\u5b8c\u6210\u4e86 Qt 6.8 \u9002\u914d\u652f\u6301<\/li>\n<li>QML \u7248\u63a7\u5236\u4e2d\u5fc3\u7684\u66f4\u65b0\u3001\u663e\u793a\u3001\u901a\u77e5\u7b49\u6a21\u5757\u5f00\u53d1\u4e2d\uff0c\u4e2a\u6027\u5316\u6a21\u5757\u9002\u914d Treeland \u4e2d<\/li>\n<li>\u4fee\u590d\u82e5\u5e72\u73b0\u5b58\u95ee\u9898\uff0c\u5305\u62ec\u901a\u77e5\u7684\u6301\u7eed\u8c03\u6574\u3001\u4efb\u52a1\u680f\u56fe\u6807\u8bc6\u522b\u95ee\u9898\u7684\u9057\u7559\u8fb9\u754c\u60c5\u51b5\u5904\u7406\u7b49<\/li>\n<\/ul>\n<p><strong>4. dde-port SIG:<\/strong><\/p>\n<ul>\n<li>Arch Linux \u4ed3\u5e93 DDE \u5168\u9762\u652f\u6301 Qt 6.8\uff0c\u5e76\u5207\u6362\u5230\u4f7f\u7528 dde-shell \u7ec4\u4ef6<\/li>\n<\/ul>\n<p><strong>5.deepin-kernel SIG:<\/strong><\/p>\n<p>\uff081\uff09\u5185\u6838\u7248\u672c\u5347\u7ea7\uff1a<\/p>\n<ul>\n<li>\u57fa\u7840\u5185\u6838\u7248\u672c\u5347\u7ea7\u81f3 6.6.60\uff0c6.6 \u5206\u652f\u5185\u6838\u66f4\u65b0\u81f3 6.6.62\u3002<\/li>\n<\/ul>\n<p>\uff082\uff09\u786c\u4ef6\u517c\u5bb9\u6027\u4fee\u590d\uff1a<\/p>\n<ul>\n<li style=\"list-style-type: none;\">\n<ul>\n<li>\u4fee\u590d Xiaomi Book Pro 14 2022 \u5185\u7f6e\u9ea6\u514b\u98ce\u5931\u6548\u95ee\u9898\u3002<\/li>\n<li>\u4fee\u590d ASUS ZenBook S 2024 OLED \u89e6\u6478\u677f\u65e0\u6cd5\u4f7f\u7528\u7684\u95ee\u9898\u3002<\/li>\n<li>\u4fee\u590d Lenovo ThinkBook 14+ 2024\/2024 AI \u5143\u542f\u7248\u538b\u611f\u89e6\u6478\u677f\u65e0\u6cd5\u4f7f\u7528\u95ee\u9898\uff0c\u4ee5\u53ca\u5408\u76d6\u53ca\u6309 Fn-F5 \u7ec4\u5408\u952e\u65f6\u53ef\u80fd\u610f\u5916\u65ad\u7535\u7684\u95ee\u9898\u3002<\/li>\n<\/ul>\n<\/li>\n<\/ul>\n<p>\uff083\uff09\u9a71\u52a8\u66f4\u65b0\uff1a<\/p>\n<ul>\n<li>\u56de\u5408\u4e0a\u6e38 intel QAT \u9a71\u52a8\u3002<\/li>\n<li>\u56de\u5408\u4e0a\u6e38 intel IAA \u538b\u7f29\u52a0\u901f\u5668\u9a71\u52a8\u3002<\/li>\n<li>\u4fee\u590d intel \u4e0b\u4e00\u4ee3 Xeon Granite Rapids\uff08GNR\uff09\u7684 PMU \u540d\u79f0\u4e0e\u7b2c\u56db\u4ee3\u548c\u7b2c\u4e94\u4ee3Xeon\uff08SPR\u548c EMR\uff09\u76f8\u540c\u7684\u95ee\u9898\u3002<\/li>\n<\/ul>\n<p>\uff084\uff09\u6027\u80fd\u4f18\u5316\uff1a<\/p>\n<ul>\n<li>\u4f18\u5316\u745e\u6631\u7f51\u5361\u7f51\u7edc\u6027\u80fd\u3002<\/li>\n<li>6.12 \u5185\u6838\u5b8c\u6210\u521d\u6b65\u9002\u914d\uff0c\u9010\u6b65\u5b8c\u5584\u5bf9 Ryzen AI \u53ca Lunar Lake \u79fb\u52a8\u8bbe\u5907\u7684\u652f\u6301\u3002<\/li>\n<\/ul>\n<p>\uff085\uff09\u7cfb\u7edf\u95ee\u9898\u4fee\u590d\uff1a<\/p>\n<ul>\n<li>\u4fee\u590d x86 \u67b6\u6784\u5e94\u7528\u4ee3\u7406\u8bbe\u7f6e\u53ef\u80fd\u4e0d\u751f\u6548\u7684\u95ee\u9898\u3002<\/li>\n<li>\u66f4\u65b0\u56fa\u4ef6\u5305\uff0c\u65b0\u589e\u6216\u6539\u5584\u5bf9\u5927\u91cf\u65b0\u5e73\u53f0\u663e\u5361\u3001\u58f0\u5361\u53ca\u7f51\u5361\u7684\u652f\u6301\u3002<\/li>\n<li>\u4fee\u590d exFAT \u6587\u4ef6\u7cfb\u7edf\u5728\u901a\u8fc7\u7f13\u51b2\u533a\u5199\u5165\u5927\u6587\u4ef6\u65f6\u7684\u9519\u8bef\u5904\u7406\u95ee\u9898\u3002<\/li>\n<\/ul>\n<p>\uff086\uff09\u65e5\u5fd7\u4e0e\u7a33\u5b9a\u6027\u6539\u8fdb\uff1a<\/p>\n<ul>\n<li>\u65b0\u589e\u56fa\u4ef6\u52a0\u8f7d\u5931\u8d25\u65f6\u7684\u65e5\u5fd7\u6253\u5370\u3002<\/li>\n<li>\u65b0\u589e rtw89 \u5185\u6838\u6a21\u5757\u52a0\u8f7d\u65f6\u9a71\u52a8\u7248\u672c\u663e\u793a\u652f\u6301\u3002<\/li>\n<li>\u4fee\u590d\u90e8\u5206\u84dd\u7259\u8bbe\u5907\u5728\u7761\u7720\u5524\u9192\u540e\u7684\u7a33\u5b9a\u6027\u95ee\u9898\u3002<\/li>\n<\/ul>\n<p>\uff087\uff09\u67b6\u6784\u7279\u5b9a\u4f18\u5316\uff1a<\/p>\n<ul>\n<li>\u4e3a\u9f99\u67b6\u6784\u5185\u6838\u5173\u95ed ZERO_CALL_USED_REG \u529f\u80fd\u4ee5\u63d0\u9ad8\u6027\u80fd\uff0c\u5b9e\u6d4b\u53d1\u73b0\u5728\u9f99\u67b6\u6784\u4e0a\u4f1a\u5bfc\u81f4\u7ea6 5% \u7684\u6027\u80fd\u52a3\u5316\u3002<\/li>\n<\/ul>\n<p>&nbsp;<\/p>\n<h1 id=\"\u56db-\u793e\u533a\u751f\u6001\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u751f\u6001<\/strong><\/h1>\n<p id=\"deepin\u643a\u624b\u53d1\u8d77-\u5f00\u6e90\u751f\u6001\u53d1\u5c55\u5408\u4f5c\u5021\u8bae-\"><strong>1\u3001deepin \u643a\u624b\u53d1\u8d77\u300a\u5f00\u6e90\u751f\u6001\u53d1\u5c55\u5408\u4f5c\u5021\u8bae\u300b<\/strong><\/p>\n<p>\u5728\u4fe1\u606f\u6280\u672f\u53d1\u5c55\u7684\u6d6a\u6f6e\u4e2d\uff0c\u5f00\u6e90\u5df2\u6210\u4e3a\u5168\u7403\u521b\u65b0\u7684\u5f3a\u52b2\u5f15\u64ce\uff0c\u6df1\u523b\u5f71\u54cd\u7740\u5404\u884c\u5404\u4e1a\u7684\u53d1\u5c55\u3002\u4eca\u5929\uff0c\u6211\u4eec\u7ad9\u5728\u65b0\u7684\u5386\u53f2\u8d77\u70b9\u4e0a\uff0c\u80a9\u8d1f\u7740\u63a8\u52a8\u5f00\u6e90\u751f\u6001\u53d1\u5c55\u7684\u91cd\u4efb\u3002\u5728\u6b64\uff0c\u6df1\u5ea6\uff08deepin\uff09\u3001\u5f00\u6e90\u6b27\u62c9\uff08openEuler\uff09\u3001\u9f99\u8725\uff08OpenAnolis\uff09\u3001\u9e25\u6816\uff08OpenCloudOS\uff09\u3001\u5f00\u653e\u9e92\u9e9f\uff08openKylin\uff09\u4e94\u5927\u64cd\u4f5c\u7cfb\u7edf\u5f00\u6e90\u793e\u533a\u643a\u624b\u5e76\u8fdb\uff0c\u5171\u540c\u53d1\u8d77\u5f00\u6e90\u751f\u6001\u53d1\u5c55\u5408\u4f5c\u5021\u8bae\uff0c\u65e8\u5728\u4e66\u5199\u5f00\u6e90\u751f\u6001\u7e41\u8363\u7684\u65b0\u7bc7\u7ae0\u3002<\/p>\n<p><a href=\"https:\/\/mp.weixin.qq.com\/s\/mmXIokz-PIWTHHHbq8sBQQ\" target=\"_blank\" rel=\"noopener\">deepin\u643a\u624b\u53d1\u8d77\u300a\u5f00\u6e90\u751f\u6001\u53d1\u5c55\u5408\u4f5c\u5021\u8bae\u300b<\/a><\/p>\n<p>&nbsp;<\/p>\n<p id=\"\u5e94\u7528\u5546\u5e9711\u6708\u5e94\u7528\u52a8\u6001-UOS-AI\u91cd\u78c5\u5347\u7ea7\"><strong>2\u3001\u5e94\u7528\u5546\u5e9711\u6708\u5e94\u7528\u52a8\u6001\uff1aUOS AI\u91cd\u78c5\u5347\u7ea7<\/strong><\/p>\n<p>\u572811\u6708\u4efd\uff0c\u5e94\u7528\u5546\u5e97\u5b8c\u6210\u4e86\u8fd1700\u6b21\u7684\u5e94\u7528\u5ba1\u6838\u6d4b\u8bd5\uff0c\u4e0a\u67b6\u4e86530\u6b3e\u5e94\u7528\uff0c\u5176\u4e2d\u5305\u62ec417\u6b3e\u5168\u65b0\u5e94\u7528\uff08\u542b\u73b2\u73d1\u548cdeb\uff09\u548c113\u6b3e\u5e94\u7528\u66f4\u65b0\u5347\u7ea7\u3002\u622a\u6b62\u52302024\u5e7411\u6708\u5e95\uff0c\u5e94\u7528\u5546\u5e97\u5df2\u7ecf\u6210\u529f\u4e0a\u67b6\u8d852400\u6b3e\u73b2\u73d1\u5e94\u7528\u3002<\/p>\n<p>\u201cUOS AI\u201d\u5f15\u5165\u4e86\u4e00\u7cfb\u5217\u667a\u80fd\u4f53\uff0c\u7248\u672c\u66f4\u65b0\u81f32.0.0\u53ef\u4f53\u9a8c\u3002\u201cQQ\u201d\u201c\u9489\u9489\u201d\u201c360\u5b89\u5168\u6d4f\u89c8\u5668\u201d\u201c\u6709\u9053\u4e91\u7b14\u8bb0\u201d\u7b49\u5747\u8fdb\u884c\u5c0f\u7248\u672c\u8fed\u4ee3\uff0c\u4ee5\u8fdb\u4e00\u6b65\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002<\/p>\n<p>&nbsp;<\/p>\n<p id=\"\u5168\u65b0\u5fae\u4fe1Linux-4-0\u516c\u6d4b\u7248\u91cd\u78c5\u4e0a\u7ebf\"><strong>3\u3001\u5168\u65b0\u5fae\u4fe1Linux 4.0\u516c\u6d4b\u7248\u91cd\u78c5\u4e0a\u7ebf<\/strong><\/p>\n<p>2024\u5e7411\u6708\uff0c\u5fae\u4fe1Linux4.0\u516c\u6d4b\u7248\u6b63\u5f0f\u4e0a\u7ebf\u3002\u672c\u6b21\u5fae\u4fe1Linux 4.0\u516c\u6d4b\u7248\u5168\u9762\u91cd\u6784\uff0c\u4e0d\u4ec5\u5728\u67b6\u6784\u4e0a\u5b9e\u73b0\u4e86\u7a81\u7834\uff0c\u66f4\u5728\u529f\u80fd\u4e0a\u5b8c\u6210\u5bf9Windows\u4e0eMac\u7248\u672c\u7684\u5168\u9762\u5bf9\u9f50\u3002\u8fd9\u610f\u5473\u7740\uff0c\u65e0\u8bba\u7528\u6237\u4f7f\u7528\u54ea\u4e2a\u5e73\u53f0\uff0c\u90fd\u80fd\u83b7\u5f97\u4e30\u5bcc\u4e14\u4e00\u81f4\u7684\u5e94\u7528\u4f53\u9a8c\u3002<\/p>\n<p><a href=\"https:\/\/mp.weixin.qq.com\/s\/NXUFU8h_5q27orvdDUmeew\" target=\"_blank\" rel=\"noopener\">\u88ab\u95ee\u7206N\u904d\u7684\u5fae\u4fe1 deepin 4.0\u516c\u6d4b\u7248\uff0c\u4ed6\u6765\u4e86\uff01<\/a><\/p>\n<p>&nbsp;<\/p>\n<p id=\"11\u6708\u5f00\u6e90\u5e94\u7528\u9002\u914d\u8d21\u732e\"><strong>4\u300111\u6708\u5f00\u6e90\u5e94\u7528\u9002\u914d\u8d21\u732e<\/strong><\/p>\n<p>\u8f6f\u4ef6\u9002\u914d\u8d21\u732e\uff08deb\uff09\uff0c\u6765\u81ea\u751f\u6001\u5171\u5efa\u5c0f\u7ec4\u7684contributors\uff1a<\/p>\n<p>\u9002\u914d\u8d21\u732e\u6392\u540d\u9760\u524d\u7684\u7528\u6237\u4e3a\uff1a\u514b\u4eae\uff0815\u4e2a\uff09\u3001red13\uff087\u4e2a\uff09\u3001\u9a6c\u5c0f\u677e\uff084\u4e2a\uff09\u3001\u732a\u5927\u80a0\uff083\u4e2a\uff09\uff1b<\/p>\n<p>\u540c\u65f6\u4e5f\u611f\u8c22\u795e\u672bshenmo\u3001\u7f50\u5b50\uff08-.-\uff09\u3001\u7075\u9b42\u51b2\u51fb\u3001MeGusta\u3001\u98db\u3001\u628a\u4e00\u5207\u64cd\u4f5c\u53d8\u6210GUI\u3001\u5317\u51a5\u591c\u672a\u592e\u3001Zeta.\u3001kero990\u3001\u594b\u6597ing\u3001ieusr\u7b49\u7528\u6237\u4e3a\u5f00\u6e90\u8f6f\u4ef6\u9002\u914d\u7684\u4ed8\u51fa\uff1b<\/p>\n<p><strong>\u73b2\u73d1\u5e94\u7528\u9002\u914d\u8d21\u732e\uff1a<\/strong><\/p>\n<ul>\n<li>^<span class=\"hljs-number\">9<\/span>\u661f\u5b88\u8fb0^ \uff08\u65b0\u589e<span class=\"hljs-number\">6<\/span>\u6b3e\u73b2\u73d1\u5e94\u7528\uff09<\/li>\n<li>mozixun\uff08\u65b0\u589e<span class=\"hljs-number\">3<\/span>\u6b3e\u73b2\u73d1\u5e94\u7528\uff09<\/li>\n<li>\u9a6c\u5c0f\u677e\uff08\u65b0\u589e<span class=\"hljs-number\">3<\/span>\u6b3e\u73b2\u73d1\u5e94\u7528\uff09<\/li>\n<\/ul>\n<p>&nbsp;<\/p>\n<p id=\"deepin\u793e\u533a\u4e0e\u6b64\u82af\u79d1\u6280\u5b8c\u6210\u4ea7\u54c1\u517c\u5bb9\u6027\u8ba4\u8bc1\"><strong>5\u3001<a href=\"https:\/\/www.deepin.org\/zh\/deepin-cxtech\/\">deepin\u793e\u533a\u4e0e\u6b64\u82af\u79d1\u6280\u5b8c\u6210\u4ea7\u54c1\u517c\u5bb9\u6027\u8ba4\u8bc1<\/a><\/strong><\/p>\n<p>2024\u5e7412\u6708\uff0c deepin 23 \u6b63\u5f0f\u7248\u64cd\u4f5c\u7cfb\u7edf\u4e0e\u6b64\u82af\u79d1\u6280\u9996\u6b3e\u82af\u7247\u6b64\u82afP1 \u5b8c\u6210\u517c\u5bb9\u6027\u6d4b\u8bd5\u8ba4\u8bc1\u3002\u6d4b\u8bd5\u7ed3\u679c\u8868\u660e\uff0c\u53cc\u65b9\u4ea7\u54c1\u5728\u517c\u5bb9\u6027\u3001\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\u7b49\u65b9\u9762\u5747\u8fbe\u5230\u9884\u671f\u6807\u51c6\uff0c\u6574\u4f53\u8fd0\u884c\u6d41\u7545\uff0c\u5145\u5206\u6ee1\u8db3\u7528\u6237\u7684\u591a\u6837\u5316\u5e94\u7528\u9700\u6c42\u3002<\/p>\n<p><img class=\"aligncenter\" src=\"https:\/\/wdcdn.qpic.cn\/MTY4ODg1NTMyNTQ4MzIwNA_37949_X8qVGgUeEjAcBdiU_1732689211?w=992&amp;h=698&amp;type=image\/png\" alt=\"\" \/><\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u4e94-\u793e\u533a\u6d3b\u52a8\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u6d3b\u52a8<\/strong><\/h1>\n<p id=\"\u4e16\u754c\u4e92\u8054\u7f51\u5927\u4f1adeepin-\u6df1\u5ea6-\u793e\u533a\u4e3b\u5e2d\u5f20\u78ca\u53d7\u592e\u89c6-\u7126\u70b9\u8bbf\u8c08-\u91c7\u8bbf\"><strong>1\u3001\u4e16\u754c\u4e92\u8054\u7f51\u5927\u4f1adeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u4e3b\u5e2d\u5f20\u78ca\u53d7\u592e\u89c6\u300a\u7126\u70b9\u8bbf\u8c08\u300b\u91c7\u8bbf<\/strong><\/p>\n<p>2024\u5e74\u4e16\u754c\u4e92\u8054\u7f51\u5927\u4f1a\u4e4c\u9547\u5cf0\u4f1a\u5728\u6d59\u6c5f\u4e4c\u9547\u4e3e\u529e\uff0c\u672c\u5c4a\u5927\u4f1a\u4ee5\u201c\u62e5\u62b1\u4ee5\u4eba\u4e3a\u672c\u3001\u667a\u80fd\u5411\u5584\u7684\u6570\u5b57\u672a\u6765\u2014\u2014\u643a\u624b\u6784\u5efa\u7f51\u7edc\u7a7a\u95f4\u547d\u8fd0\u5171\u540c\u4f53\u201d\u4e3a\u4e3b\u9898\uff0c\u4e60\u8fd1\u5e73\u4e3b\u5e2d\u5728\u5411\u5cf0\u4f1a\u5f00\u5e55\u89c6\u9891\u81f4\u8d3a\u4e2d\u6307\u51fa\uff1a\u201c\u4e2d\u56fd\u613f\u540c\u4e16\u754c\u5404\u56fd\u4e00\u9053\uff0c\u628a\u63e1\u4fe1\u606f\u9769\u547d\u53d1\u5c55\u7684\u5386\u53f2\u4e3b\u52a8\uff0c\u643a\u624b\u6784\u5efa\u7f51\u7edc\u7a7a\u95f4\u547d\u8fd0\u5171\u540c\u4f53\uff0c\u8ba9\u4e92\u8054\u7f51\u66f4\u597d\u9020\u798f\u4eba\u6c11\u3001\u9020\u798f\u4e16\u754c\u201d<\/p>\n<p>\u5728\u4e16\u754c\u4e92\u8054\u7f51\u5927\u4f1a\u671f\u95f4\uff0cdeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u4e3b\u5e2d\u5f20\u78ca\u2014\u2014\u5f20\u78ca\u63a5\u53d7\u7126\u70b9\u8bbf\u8c08\u65f6\u6307\u51fa\uff1a\u521b\u65b0\u662f\u6211\u4eec\u7684\u7b2c\u4e00\u8981\u7d20\uff0c\u4f46\u662f\u521b\u65b0\u8fc7\u4e86\u4e4b\u540e\uff0c\u7528\u6237\u771f\u7528\u4e86\uff0c\u4f60\u4f1a\u53d1\u73b0\uff0c\u7528\u6237\u4ed6\u9700\u8981\u4f60\u80fd\u591f\u628a\u5b83\u505a\u7684\u66f4\u5b89\u5168\uff0c\u56e0\u6b64\u8fd8\u662f\u8981\u6709\u4e00\u4e2a\u57fa\u7ebf\u5728\u8fd9\u91cc\u3002<\/p>\n<p>&nbsp;<\/p>\n<p><strong>2\u3001<a href=\"https:\/\/www.deepin.org\/zh\/2024-11-whlug\/\">2024-11 WHLUG<\/a><\/strong><\/p>\n<p>2024\u5e7411\u670830\u65e5\u4e0b\u5348\uff0cdeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u8054\u5408\u534e\u4e2d\u79d1\u6280\u5927\u5b66\u5f00\u653e\u539f\u5b50\u5f00\u6e90\u4ff1\u4e50\u90e8\u3001RustSBI\u5f00\u6e90\u793e\u533a\u548c\u6e05\u534e\u5927\u5b66\u5f00\u6e90\u64cd\u4f5c\u7cfb\u7edf\u8bad\u7ec3\u8425\u4e00\u8d77\u5728\u534e\u4e2d\u79d1\u6280\u5927\u5b66\u4e3b\u6821\u533a\u7f51\u7edc\u5b89\u5168\u7a7a\u95f4\u5b66\u9662\u6559\u5b66\u5b9e\u9a8c\u4e2d\u5fc3 \u4e3e\u529eWHLUG\u65b0\u4e00\u671f\u7684\u7ebf\u4e0b\u5f00\u6e90\u6d3b\u52a8\u3002<\/p>\n<p>\u6d3b\u52a8\u73b0\u573a\uff0c50\u4f59\u4f4d\u6765\u81ea\u534e\u4e2d\u79d1\u6280\u5927\u5b66\u3001\u5357\u660c\u5927\u5b66\u7684\u9ad8\u6821\u5b66\u751f\u4ee5\u53ca\u6b66\u6c49\u672c\u5730\u7684\u5f00\u6e90\u7231\u597d\u8005\u4eec\uff0c\u5171\u540c\u5206\u4eab\u4e0e\u63a2\u8ba8Rust\u505a\u5d4c\u5165\u5f0f\u5f00\u53d1\u3001\u5f00\u6e90\u7ecf\u5386\u548c\u7ecf\u9a8c\u3001\u81ea\u5b66\u8ba1\u7b97\u673a\u56db\u5e74\u6765\u7684\u7ecf\u5386\u548c\u611f\u609f\u7b49\u7cbe\u5f69\u5185\u5bb9\u3002<\/p>\n<p><img class=\"aligncenter\" src=\"https:\/\/wdcdn.qpic.cn\/MTY4ODg1NTMyNTQ4MzIwNA_199885_i_0zLCbp2xf0-4Xc_1733122460?w=1312&amp;h=506&amp;type=image\/png\" alt=\"\" \/><\/p>\n<p>&nbsp;<\/p>\n<p id=\"deepin-\u6df1\u5ea6-\u793e\u533a\u4eae\u76f8COSCon-24-\u7b2c\u4e5d\u5c4a\u4e2d\u56fd\u5f00\u6e90\u5e74\u4f1a\"><strong>3\u3001<a href=\"https:\/\/www.deepin.org\/zh\/dde-treeland\/\">deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u4eae\u76f8COSCon'24 \u7b2c\u4e5d\u5c4a\u4e2d\u56fd\u5f00\u6e90\u5e74\u4f1a<\/a><\/strong><\/p>\n<p>COSCon'24 \u7b2c\u4e5d\u5c4a\u4e2d\u56fd\u5f00\u6e90\u5e74\u4f1a\u66a8\u5f00\u6e90\u793e\u5341\u5468\u5e74\u5609\u5e74\u534e\uff0c\u4e8e11\u67082-3\u65e5\u5728\u4e2d\u5173\u6751\u56fd\u5bb6\u81ea\u4e3b\u521b\u65b0\u793a\u8303\u533a\u4f1a\u8bae\u4e2d\u5fc3\u4e3e\u529e\u3002deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u4f5c\u4e3a\u4e2d\u56fd\u5f00\u6e90\u5e74\u4f1a\u7684\u793e\u533a\u4f19\u4f34\uff0c\u5728\u672c\u6b21\u5927\u4f1a\u4e0a deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u5c06\u4eae\u76f8\u5f00\u6e90\u96c6\u5e02\uff0c\u5e76\u5e26\u6765 Treeland \u76f8\u5173\u4e3b\u9898\u7684\u6280\u672f\u5206\u4eab\u3002<\/p>\n<p><img class=\"alignnone aligncenter\" src=\"https:\/\/wdcdn.qpic.cn\/MTY4ODg1NTMyNTQ4MzIwNA_179406_DFjwxyDcTKJXbAsH_1733122618?w=693&amp;h=432&amp;type=image\/png\" alt=\"\" \/><\/p>\n<p>&nbsp;<\/p>\n<p id=\"\u5f00\u653e\u539f\u5b50\u6821\u6e90\u884cmeetup-\u5929\u6d25\u4e2d\u5fb7\u7ad9-\"><strong>4\u3001\u5f00\u653e\u539f\u5b50\u6821\u6e90\u884cmeetup\uff08\u5929\u6d25\u4e2d\u5fb7\u7ad9\uff09<\/strong><\/p>\n<p>2024\u5e7411\u670816\u65e5\u4e0b\u5348\uff0c\u5728\u5f00\u653e\u539f\u5b50\u6821\u6e90\u884c\u516c\u76ca\u9879\u76ee\u3001deepin \u793e\u533a\u548c OpenTenBase \u793e\u533a\u7684\u652f\u6301\u4e0b\uff0c\u5982\u610f\u73b2\u73d1\u793e\u533a\u6210\u529f\u8d70\u8fdb\u5929\u6d25\u4e2d\u5fb7\u5e94\u7528\u6280\u672f\u5927\u5b66\uff0c\u4e3e\u529e\u4e86\u4e00\u573a\u56f4\u7ed5\u5f00\u6e90\u901a\u8bc6\u3001\u6280\u672f\u3001\u793e\u533a\u7684\u4e92\u52a8\u5f0f\u5b9e\u8df5\u6559\u5b66 Meetup \u3002\u6b64\u6b21\u6d3b\u52a8\u5438\u5f15\u4e86\u5929\u6d25\u4e2d\u5fb7\u5e94\u7528\u6280\u672f\u5927\u5b66150\u4f59\u540d\u5b66\u751f\u7684\u70ed\u60c5\u53c2\u4e0e\uff0c\u540c\u65f6\u901a\u8fc7\u7ebf\u4e0a\u76f4\u64ad\u4e0e\u66f4\u591a\u70ed\u7231\u5f00\u6e90\u7684\u670b\u53cb\u5171\u4eab\u3002<\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u516d-deepin\u8bba\u575b\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u8bba\u575b<\/strong><\/h1>\n<p>1\u3001deepin\uff08\u6df1\u5ea6\uff09\u8bba\u575b\u7684\u6ce8\u518c\u7528\u6237\u6570\u91cf\u5df2\u7ecf\u7a81\u7834\u4e8616\u4e07\u5927\u5173<\/p>\n<p><img class=\"aligncenter\" src=\"https:\/\/wdcdn.qpic.cn\/MTY4ODg1NTMyNTQ4MzIwNA_473613_gJWMUZphIyYpOo2e_1732690938?w=1080&amp;h=445&amp;type=image\/png\" alt=\"\" \/><\/p>\n<p>&nbsp;<\/p>\n<p id=\"deepin-\u6df1\u5ea6-\u793e\u533a\u8bba\u575b-\u751f\u6d3b\u56ed\u5730-\u7248\u5757\u6b63\u5f0f\u4e0a\u7ebf\"><strong>2\u3001deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u8bba\u575b\u3010\u751f\u6d3b\u56ed\u5730\u3011\u7248\u5757\u6b63\u5f0f\u4e0a\u7ebf<\/strong><\/p>\n<p>2024\u5e7411\u6708\uff0c\u7ecf\u8fc7\u5e7f\u6cdb\u7684\u793e\u533a\u8c03\u67e5\u548c\u6df1\u601d\u719f\u8651\uff0c\u4ee5\u53ca\u5f00\u653e\u8bd5\u884c\u540e\uff0cdeepin\u8bba\u575b\u7684\u65b0\u7248\u5757\u2014\u2014\u201c\u751f\u6d3b\u56ed\u5730\u201d\u73b0\u5df2\u6b63\u5f0f\u4e0a\u7ebf\uff01\u8fd9\u4e2a\u5168\u65b0\u7684\u7248\u5757\u662f\u54cd\u5e94\u5e7f\u5927\u7528\u6237\u7684\u5fc3\u58f0\uff0c\u65e8\u5728\u4e3a\u5927\u5bb6\u63d0\u4f9b\u4e00\u4e2a\u65e0\u62d8\u65e0\u675f\u3001\u7eaf\u7cb9\u4ea4\u6d41\u548c\u5206\u4eab\u7684\u7a7a\u95f4\u3002<\/p>\n<p><img class=\"aligncenter\" src=\"https:\/\/storage.deepin.org\/thread\/202412031012551528_image.png\" alt=\"image.png\" \/><\/p>\n<p>&nbsp;<\/p>\n<h1 id=\"\u4e03-\u793e\u533a\u9e23\u8c22\" style=\"text-align: center;\"><strong>deepin \u793e\u533a\u9e23\u8c22<\/strong><\/h1>\n<p>\u3010\u8bba\u575b\u6700\u6d3b\u8dc3\u5c0f\u4f19\u4f34\u3011<\/p>\n<ul>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">\u5c0f\u9c7c\u8d1d\u58f3<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">\u795e\u672bshenmo<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">oli<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">buyike<\/span><\/code><code class=\"hljs markdown\"><br \/>\n<\/code>\u200b<\/li>\n<\/ul>\n<p>\u3010\u5185\u6d4b\u6700\u6d3b\u8dc3\u5c0f\u4f19\u4f34\u3011<\/p>\n<ul>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">buyike<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">autty<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">\u6c90\u6625<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">\u9a6c\u5c0f\u677e<\/span><\/code><code class=\"hljs markdown\"><br \/>\n<\/code>\u200b<\/li>\n<\/ul>\n<p>\u3010PR\u8d21\u732e\u6700\u6d3b\u8dc3\u5c0f\u4f19\u4f34\u3011<\/p>\n<ul>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">ziggy1030<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">kt268<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">ice909<br \/>\n<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">nn3300<\/span><\/code><\/li>\n<li><code class=\"hljs markdown\"><span class=\"hljs-code\">hillwoodro<\/span><\/code><\/li>\n<\/ul>\n<p>&nbsp;<\/p>\n<h1><strong>\u76f8\u5173\u9605\u8bfb\uff1a<\/strong><\/h1>\n<p>\uff081\uff09<a href=\"https:\/\/distrowatch.com\/table.php?distribution=deepin\">\u652f\u6301 deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/a><\/p>\n<p>\uff082\uff09<a href=\"https:\/\/www.deepin.org\/zh\/category\/news%ef%bc%88chinese%ef%bc%89\/deepin-monthly-report\/\">\u5f80\u671f deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a\u6708\u62a5<\/a><\/p>\n<p>&nbsp;<\/p>\n<p style=\"text-align: right;\">\u5185\u5bb9\u6765\u6e90\uff1adeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/p>\n<p style=\"text-align: right;\">\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904<\/p>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>deepin \u793e\u533a 11 \u6708\u6570\u636e\u603b\u89c8 &nbsp; deepin \u793e\u533a\u4ea7\u54c1 1\u3001deepin IDE\u91cd\u78c5\u5347\u7ea7\uff0c\u65b0\u589e\u667a\u80fd\u7ec8\u7aef\u7b49\u65b0\u529f\u80fd 2024\u5e7411\u6708\uff0cdeepin IDE\u8fce\u6765\u91cd\u78c5\u5347\u7ea7\uff0c\u6b64\u6b21\u66f4\u65b0\u4e2ddeepin-IDE\u5bf9\u4ee5\u4e0b\u529f\u80fd\u70b9\u8fdb\u884c\u4e86\u91cd\u70b9\u4f18\u5316\u53ca\u66f4\u65b0\uff1a \u2460 \u5185\u8054\u804a\u5929\u529f\u80fd\uff0c\u9009\u4e2d\u51fd\u6570\u5c31\u53ef\u4ee5\u5bf9\u8fd9\u6bb5\u51fd\u6570\u8fdb\u884c\u63d0\u95ee\uff0c\u53ef\u652f\u6301\u667a\u80fd\u7f16\u8f91\u548c\u5feb\u95ee\u5feb\u7b54\u4e24\u79cd\u529f\u80fd\u3002 \u2461 Codebase\u529f\u80fd\uff0c\u5373\u4fbf\u4e0d\u719f\u6089\u7684\u4ee3\u7801\u5de5\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u5feb\u901f\u7684\u4e86 ...<a href=https:\/\/www.deepin.org\/zh\/deepin-community-monthly-report-2024-11\/>\u9605\u8bfb\u66f4\u591a<\/a><\/p>\n",
      "protected": false
    },

  },
  {
    "id": 35620,
    "date": "2024-12-03T14:38:48",
    "date_gmt": "2024-12-03T06:38:48",
    "guid": {
      "rendered": "https:\/\/www.deepin.org\/?p=35620"
    },
    "modified": "2024-12-03T15:05:48",
    "modified_gmt": "2024-12-03T07:05:48",
    "status": "publish",
    "type": "post",
    "link": "https:\/\/www.deepin.org\/zh\/zh-application-contributors-02\/",
    "title": {
      "rendered": "\u3010\u5e94\u7528\u63ed\u699c\u4ee402\u671f\u301111\u6708\u5c0f\u7ec4\u603b\u7ed3\uff0c\u611f\u8c22\u8fd917\u4f4d\u670b\u53cb\u8d21\u732e\u4e8657\u4e2a\u5e94\u7528\uff0c\u5e78\u751a\u6709\u4f60\uff01"
    },
    "content": {
      "rendered": "<p><img loading=\"lazy\" class=\"alignnone size-full wp-image-35641\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1.png\" alt=\"\" width=\"900\" height=\"383\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1.png 900w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-300x128.png 300w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-150x64.png 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-768x327.png 768w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-24x10.png 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-36x15.png 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/12\/\u7ea2\u91d1\u8272\u559c\u5e86\u83b7\u5956\u8363\u8a89\u559c\u62a5\u516c\u4f17\u53f7\u5c01\u9762-1-48x20.png 48w\" sizes=\"(max-width: 900px) 100vw, 900px\" \/><\/p>\n<h1 style=\"text-align: center;\"><strong>deepin\u751f\u6001\u5171\u5efa\u5c0f\u7ec4 11\u6708\u603b\u7ed3<\/strong><\/h1>\n<p>\u572811\u6708\uff0c\u6211\u4eec\u8fce\u6765\u4e86\u00a0<strong>17\u4f4d<\/strong>\u00a0\u5f00\u53d1\u8005\u7684\u70ed\u60c5\u53c2\u4e0e\uff0c\u4ed6\u4eec\u4ee5\u591a\u79cd\u5f62\u5f0f\u63d0\u4ea4\u4e86\u5e94\u7528\uff0c\u5176\u4e2d\u6709\u00a0<strong>8\u4f4d<\/strong>\u00a0\u662f\u65b0\u52a0\u5165\u7684\u670b\u53cb\u3002\u4ed6\u4eec\u5171\u63d0\u4ea4\u4e86\u00a0<strong>57\u4e2a<\/strong>\u00a0\u5e94\u7528\uff0c\u5177\u4f53\u5305\u62ec\u00a0<strong>35\u4e2a<\/strong>\u00a0\u66f4\u65b0\u7684deb\u5e94\u7528\u3001\u00a0<strong>8\u4e2a<\/strong>\u00a0\u65b0\u4e0a\u67b6\u7684deb\u5e94\u7528\u3001\u00a0<strong>12\u4e2a<\/strong>\u00a0\u73b2\u73d1\u5e94\u7528\u4ee5\u53ca\u00a0<strong>2\u4e2a<\/strong>\u00a0wine\u5e94\u7528\u3002<\/p>\n<p>\u4e3a\u4e86\u8fdb\u4e00\u6b65\u63a8\u52a8deepin\u751f\u6001\u7cfb\u7edf\u7684\u5efa\u8bbe\uff0c\u6211\u4eec\u672c\u6708\u65b0\u589e\u4e86\u4e00\u9879\u5b9a\u671f\u6d3b\u52a8\u2014\u2014\u3010\u5e94\u7528\u63ed\u699c\u4ee4\u3011\uff0c11\u6708\u5185\u5df2\u7ecf\u987a\u5229\u8fdb\u884c\u4e86\u4e24\u671f\u3002\u8fd9\u4e00\u6d3b\u52a8\u65e8\u5728\u4e3a\u5bf9Linux\u751f\u6001\u5efa\u8bbe\u611f\u5174\u8da3\u7684\u5f00\u53d1\u8005\u63d0\u4f9b\u660e\u786e\u7684\u6253\u5305\u76ee\u6807\uff0c\u9f13\u52b1\u5927\u5bb6\u79ef\u6781\u53c2\u4e0e\u5230deepin\u5e94\u7528\u5546\u5e97\u7684\u751f\u6001\u5efa\u8bbe\u4e2d\u6765\uff0c\u5171\u540c\u6253\u9020\u66f4\u52a0\u7e41\u8363\u7684\u5e94\u7528\u73af\u5883\u3002<\/p>\n<h3 id=\"---\u5177\u4f53\u8d21\u732e\u60c5\u51b5\"><strong>\u00a0\u5177\u4f53\u8d21\u732e\u60c5\u51b5<\/strong><\/h3>\n<p><img class=\"aligncenter\" src=\"https:\/\/storage.deepin.org\/thread\/20241203035437456_image.png\" alt=\"image.png\" \/><\/p>\n<h3 id=\"---\u5177\u4f53\u8d21\u732e\u60c5\u51b5\"><strong>\u00a0\u5468\u8fb9\u6fc0\u52b1<\/strong><\/h3>\n<p>\u672c\u6708\u4e3a\u79ef\u5206+100\u4ee5\u4e0a\u7684\u5f00\u53d1\u8005\u53d1\u653e\u4e00\u5b9a\u7684\u5468\u8fb9\u5956\u52b1\uff0c\u5177\u4f53\u53d1\u653e\u5982\u4e0b\uff1a<\/p>\n<p><img class=\"aligncenter\" src=\"https:\/\/storage.deepin.org\/thread\/202412030355476720_image.png\" alt=\"image.png\" \/><\/p>\n<p>\u4ee5\u4e0a\u51e0\u4f4d\u5f00\u53d1\u8005\u7a0d\u540e\u5c0f\u9c7f\u9c7c\u5c06\u4f01\u5fae\u79c1\u804a\u5404\u4f4d\u6c9f\u901a\u5956\u52b1\u53d1\u653e\u4e8b\u5b9c\u3002<\/p>\n<p>\u611f\u8c22\u6240\u6709\u8d21\u732e\u8005\u7684\u8d21\u732e\uff01\u5bf9\u4e8e\u672c\u6708\u672a\u80fd\u83b7\u5f97\u5468\u8fb9\u5956\u52b1\u7684\u670b\u53cb\u4eec\uff0c\u6211\u4eec\u9f13\u52b1\u5927\u5bb6\u7ee7\u7eed\u4fdd\u6301\u70ed\u60c5\uff0c\u4e0b\u4e2a\u6708\u6211\u4eec\u518d\u63a5\u518d\u5389\u3002\u671f\u5f85\u4e0b\u4e2a\u6708\u4e0e\u60a8\u518d\u6b21\u76f8\u89c1\u3002<\/p>\n<hr \/>\n<h3 id=\"\u5173\u4e8edeepin\u751f\u6001\u5171\u5efa\u5c0f\u7ec4\"><strong>\u5173\u4e8e deepin \u751f\u6001\u5171\u5efa\u5c0f\u7ec4<\/strong><\/h3>\n<p>\uff081\uff09\u5c0f\u7ec4\u4ecb\u7ecd\uff1a\u57fa\u4e8e\u793e\u533a\u5f00\u6e90\u7cbe\u795e\uff0c\u4e3a\u63d0\u9ad8\u5927\u5bb6\u5bf9 deepin \u751f\u6001\u5efa\u8bbe\u7684\u53c2\u4e0e\u611f\uff0c\u5e94\u7528\u5546\u5e97\u5c06\u6b63\u5f0f\u5f00\u653e\u4f17\u591a\u8f6f\u4ef6\u7ed9\u5e7f\u5927\u5f00\u6e90\u7231\u597d\u8005\u8fdb\u884c\u7ef4\u62a4\u3002\u53c2\u4e0e\u5c0f\u7ec4\u5de5\u4f5c\u53ef\u83b7\u5f97\u591a\u9879\u4e13\u5c5e\u5c0f\u7ec4\u798f\u5229\uff0c\u5de5\u4f5c\u9879\u76ee\u5206\u4e3a<strong>\u73b2\u73d1\u683c\u5f0f\u8fc1\u79fb<\/strong>\u3001<strong>wine\u5e94\u7528\u6253\u5305<\/strong>\u3001<strong>\u539f\u751fdeb\u5e94\u7528\u7ef4\u62a4<\/strong>\u3002<\/p>\n<p>\uff082\uff09\u5c0f\u7ec4\u6210\u5458\uff1a\u81ea 4 \u6708\u4e2d\u65ec deepin \u751f\u6001\u5171\u5efa\u5c0f\u7ec4\u6b63\u5f0f\u6210\u7acb\u4ee5\u6765\uff0c\u5df2\u6709 1000 \u591a\u4f4d\u5c0f\u7ec4\u6210\u5458\u52a0\u5165\u5404\u9879\u76ee\u5c0f\u7ec4\u3002<\/p>\n<p>\uff083\uff09\u5c0f\u7ec4\u798f\u5229\uff1a\u5b8c\u6210\u5404\u7c7b\u578b\u5e94\u7528\u6253\u5305\u53ca\u4e0a\u67b6\u53ef\u4ee5\u83b7\u5f97\u4e00\u5b9a\u7684\u751f\u6001\u79ef\u5206\uff0c\u83b7\u5f97\u751f\u6001\u79ef\u5206\u8fbe\u5230\u4e00\u5b9a\u6570\u91cf\uff0c\u53ef\u4ee5\u83b7\u5f97\u5bf9\u5e94\u7684\u793e\u533a\u8363\u8a89\u79f0\u53f7\uff0c\u5e76\u4e14<strong>\u79ef\u5206\u53ef\u4ee5\u7528\u4e8e\u5151\u6362 deepin \u5468\u8fb9\u793c\u54c1<\/strong>\u3002\u622a\u6b62\u81f32024\u5e7412\u670831\u65e5\uff0c\u5e74\u5ea6\u751f\u6001\u79ef\u5206 Top10 \u7684\u5c0f\u7ec4\u6210\u5458\uff0c<strong>\u5c06\u9881\u53d1\u8363\u8a89\u8bc1\u4e66\u300adeepin\u751f\u6001\u5171\u5efa\u5c0f\u7ec4-\u5353\u8d8a\u8d21\u732e\u5956\u300b\u8868\u793a\u611f\u8c22<\/strong>\u3002<\/p>\n<p><img loading=\"lazy\" class=\"size-full wp-image-35454 alignnone\" src=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin%E7%94%9F%E6%80%81%E5%85%B1%E5%BB%BA200.jpg\" sizes=\"(max-width: 200px) 100vw, 200px\" srcset=\"https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200.jpg 200w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200-150x150.jpg 150w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200-100x100.jpg 100w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200-24x24.jpg 24w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200-36x36.jpg 36w, https:\/\/www.deepin.org\/wp-content\/uploads\/2024\/11\/202411180434073998_deepin\u751f\u6001\u5171\u5efa200-48x48.jpg 48w\" alt=\"\" width=\"200\" height=\"200\" \/><\/p>\n<p>&nbsp;<\/p>\n<article id=\"post-35009\" class=\"post-35009 post type-post status-publish format-standard hentry category-deepin-community-reports category-community-news tag-ai tag-dde tag-deepin tag-deepin-23 tag-deepin-linux tag-linux tag-linux-distribution tag-opensource tag-treeland\">\n<h1><strong>\u76f8\u5173\u9605\u8bfb\uff1a<\/strong><\/h1>\n<p>\uff081\uff09<a href=\"https:\/\/distrowatch.com\/table.php?distribution=deepin\">\u652f\u6301 deepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/a><\/p>\n<p class=\"entry-content\">\uff082\uff09<a href=\"https:\/\/bbs.deepin.org\/zh\/post\/265432\" target=\"_blank\" rel=\"noopener\">deepin\u793e\u533a\u300c\u5e94\u7528\u6295\u9012\u7cfb\u7edf\u300d\u5168\u65b0\u4e0a\u7ebf\uff0c\u8bda\u9080\u60a8\u6765\u5171\u5efa\u5e94\u7528\u751f\u6001\uff01<\/a><\/p>\n<p class=\"entry-content\">\uff083\uff09<a href=\"https:\/\/developer.chinauos.com\/#document3?dirid=656ef276bd766615b0b0300c&amp;id=657036f6bd766615b0b03132\" target=\"_blank\" rel=\"noopener\">\u5f00\u53d1\u8005\u8ba4\u8bc1\u53ca\u4e0a\u67b6\u6307\u5357<\/a><\/p>\n<p>&nbsp;<\/p>\n<p style=\"text-align: right;\">\u5185\u5bb9\u6765\u6e90\uff1adeepin\uff08\u6df1\u5ea6\uff09\u793e\u533a<\/p>\n<p style=\"text-align: right;\">\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904<\/p>\n<\/article>\n<div id=\"comments\" class=\"comments-area\">\n<div id=\"respond\" class=\"comment-respond\"><\/div>\n<\/div>\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "<p>deepin\u751f\u6001\u5171\u5efa\u5c0f\u7ec4 11\u6708\u603b\u7ed3 \u572811\u6708\uff0c\u6211\u4eec\u8fce\u6765\u4e86\u00a017\u4f4d\u00a0\u5f00\u53d1\u8005\u7684\u70ed\u60c5\u53c2\u4e0e\uff0c\u4ed6\u4eec\u4ee5\u591a\u79cd\u5f62\u5f0f\u63d0\u4ea4\u4e86\u5e94\u7528\uff0c\u5176\u4e2d\u6709\u00a08\u4f4d\u00a0\u662f\u65b0\u52a0\u5165\u7684\u670b\u53cb\u3002\u4ed6\u4eec\u5171\u63d0\u4ea4\u4e86\u00a057\u4e2a\u00a0\u5e94\u7528\uff0c\u5177\u4f53\u5305\u62ec\u00a035\u4e2a\u00a0\u66f4\u65b0\u7684deb\u5e94\u7528\u3001\u00a08\u4e2a\u00a0\u65b0\u4e0a\u67b6\u7684deb\u5e94\u7528\u3001\u00a012\u4e2a\u00a0\u73b2\u73d1\u5e94\u7528\u4ee5\u53ca\u00a02\u4e2a\u00a0wine\u5e94\u7528\u3002 \u4e3a\u4e86\u8fdb\u4e00\u6b65\u63a8\u52a8deepin\u751f\u6001\u7cfb\u7edf\u7684\u5efa\u8bbe\uff0c\u6211\u4eec\u672c\u6708\u65b0\u589e\u4e86\u4e00\u9879\u5b9a\u671f\u6d3b\u52a8\u2014\u2014\u3010\u5e94\u7528\u63ed\u699c\u4ee4\u3011\uff0c11\u6708\u5185\u5df2\u7ecf\u987a\u5229\u8fdb\u884c\u4e86\u4e24\u671f\u3002\u8fd9\u4e00 ...<a href=https:\/\/www.deepin.org\/zh\/zh-application-contributors-02\/>\u9605\u8bfb\u66f4\u591a<\/a><\/p>\n",
      "protected": false
    },
  }
]

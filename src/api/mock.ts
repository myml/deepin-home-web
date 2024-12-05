import { API } from './api'
import type { HomeConfig, News } from './model'

export class mockAPI implements API {
  async getHomeConfig(lang: string) {
    await this.delay()
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
  async loadNews(): Promise<News[]> {
    await this.delay()
    return newsMockData
  }
  async getOpenSource() {
    await this.delay()
    return {
      pull_request: 110941,
      commits: 2060,
      contributors: 11686,
      repositories: 24830,
      issues: 9061,
      teams: 61
    }
  }
  async delay() {
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

const homeConfigMockData = {
  carousel: {
    interval: 3000,
    cards: [
      {
        title: 'deepin v23',
        content: '深度科技发布deepin v23，全新设计，全新体验。',
        image:
          'https://storage.deepin.org/thread/202309191045559300_%E5%AE%98%E7%BD%911.png',
        image_link: 'https://www.deepin.org/zh/download',
        interval: 3000,
        online_time: '2024-12-04T02:35:03.000Z',
        downline_time: '2024-12-05T16:00:00.000Z"',
        links: [
          {
            title: '下载',
            url: 'https://www.deepin.org/zh/download'
          },
          {
            title: '了解更多',
            url: 'https://www.deepin.org/zh/download'
          }
        ]
      },
      {
        title: '',
        content: '',
        image:
          'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
        image_link: 'https://www.deepin.org/zh/download',
        interval: 5000,
        online_time: '2024-12-04T02:35:03.000Z',
        downline_time: '2024-12-05T16:00:00.000Z',
        links: []
      },
      {
        title: '',
        content: '',
        image:
          'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
        image_link: 'https://www.deepin.org/zh/download',
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
        title: '开箱即用',
        content:
          '我们不仅自研一系列基础办公软件，而且兼容大部分安卓和Windows软件，有40000+款软件供您选择。'
      },
      {
        title: '代码开源',
        content:
          '我们遵循开源软件许可证协议发布源代码，相关项目和源代码均可在 GitHub 上进行查看。',
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
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  }
]

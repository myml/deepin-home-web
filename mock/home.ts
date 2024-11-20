export default [
  {
    url: '/api/v1/public/config/home_zh_CN',
    method: 'GET',
    response: () => {
      return {
        imageList: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        ],
        reasonList: [
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
              '我们遵循开源软件许可证协议发布源代码，相关项目和源代码均可在 GitHub 上进行查看。'
          }
        ]
      }
    }
  },
  {
    url: '/api/v1/public/opensource',
    method: 'GET',
    response: () => {
      return {
        pull_request: 110941,
        commits: 2060,
        contributors: 11686,
        repositories: 24830,
        issues: 9061,
        teams: 61,
        user: 160034
      }
    }
  }
]

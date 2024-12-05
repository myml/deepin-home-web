<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese">
      <el-form label-width="auto">
        <el-form-item label="标题">
          <el-input v-model="reason.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-card
          v-for="(r, cardIndex) in reason.cards"
          :key="cardIndex"
          class="my-3"
        >
          <el-form label-width="auto">
            <el-form-item label="标题">
              <el-input v-model="r.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="描述">
              <el-input
                type="textarea"
                v-model="r.content"
                placeholder="请输入描述"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-card>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            class="block"
            @click="saveReason"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="英文" name="english"> </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { Reason } from '@/api/model'
import { ElMessage } from 'element-plus'

if (!localStorage.getItem('reason')) {
  localStorage.setItem(
    'reason',
    JSON.stringify({
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
          ]
        }
      ]
    })
  )
}

const activeName = ref('chinese')
const reason = ref<Reason>(JSON.parse(localStorage.getItem('reason') || '{}'))

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
}

const saveReason = () => {
  // 检查title和content字段是否有空的
  for (const r of reason.value.cards) {
    if (r.title === '' || r.content === '') {
      ElMessage.warning('标题和描述不能为空')
      return
    }
  }

  localStorage.setItem('reason', JSON.stringify(reason.value))
  ElMessage.success('保存成功')
}
</script>

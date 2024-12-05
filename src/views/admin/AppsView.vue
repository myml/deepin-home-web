<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese">
      <el-form label-width="100">
        <el-form-item label="标题">
          <el-input v-model="apps.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="apps.content"
            type="textarea"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-card v-for="(card, index) in apps.cards" :key="index" class="mt-3">
          <el-form label-width="100">
            <el-form-item label="标题">
              <el-input
                v-model="card.title"
                placeholder="请输入标题"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input
                v-model="card.content"
                type="textarea"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="应用列表">
              <el-row>
                <el-col
                  :span="12"
                  v-for="(list, index) in card.list"
                  :key="index"
                >
                  <el-card class="m-2">
                    <el-form label-width="100">
                      <el-form-item label="应用名称">
                        <el-input
                          v-model="list.title"
                          placeholder="请输入标题"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="应用图标">
                        <el-input
                          v-model="list.image"
                          placeholder="请输入图片"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </el-card>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
        <el-form-item class="mt-2">
          <el-button type="primary" @click="saveApps">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <el-form label-width="100">
        <el-form-item label="标题">
          <el-input v-model="apps.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="apps.content"
            type="textarea"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-card v-for="(card, index) in apps.cards" :key="index" class="mt-3">
          <el-form label-width="100">
            <el-form-item label="标题">
              <el-input
                v-model="card.title"
                placeholder="请输入标题"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input
                v-model="card.content"
                type="textarea"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="应用列表">
              <el-row>
                <el-col
                  :span="12"
                  v-for="(list, index) in card.list"
                  :key="index"
                >
                  <el-card class="m-2">
                    <el-form label-width="100">
                      <el-form-item label="应用名称">
                        <el-input
                          v-model="list.title"
                          placeholder="请输入标题"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="应用图标">
                        <el-input
                          v-model="list.image"
                          placeholder="请输入图片"
                        ></el-input>
                      </el-form-item>
                    </el-form>
                  </el-card>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
        <el-form-item class="mt-2">
          <el-button type="primary" @click="saveApps">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Apps } from '@/api/model'
import { ElMessage, type TabsPaneContext } from 'element-plus'

if (!localStorage.getItem('apps')) {
  localStorage.setItem(
    'apps',
    JSON.stringify({
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
              image:
                'https://www.deepin.org/index/assets/icons/design/pixso.png'
            },
            {
              title: 'Krita',
              image:
                'https://www.deepin.org/index/assets/icons/design/krita.png'
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
              image:
                'https://www.deepin.org/index/assets/icons/design/meitu.png'
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
    })
  )
}
const activeName = ref('chinese')

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
}
const apps = ref<Apps>(JSON.parse(localStorage.getItem('apps') || '{}'))

const saveApps = () => {
  if (!apps.value.title || !apps.value.content) {
    ElMessage.error('标题和内容不能为空')
    return
  }
  if (
    apps.value.cards.some(
      card =>
        !card.title ||
        !card.content ||
        card.list.some(list => !list.title || !list.image)
    )
  ) {
    ElMessage.error('卡片标题、内容、应用名称、应用图标不能为空')
    return
  }
  localStorage.setItem('apps', JSON.stringify(apps.value))
  ElMessage.success('保存成功')
}
</script>

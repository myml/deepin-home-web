<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese">
      <el-form label-width="100">
        <el-form-item label="导航">
          <div
            v-for="(nav, index) in footer.navs"
            :key="index"
            class="w-full mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md"
          >
            <el-form-item label="标题">
              <el-input v-model="nav.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="链接" class="mt-2">
              <div class="w-full grid grid-cols-5 rounded-sm overflow-hidde">
                <div
                  v-for="(link, linkIndex) in nav.links"
                  :key="linkIndex"
                  class="p-5 border border-[--website-layer-card-border] border-solid"
                >
                  <el-form label-width="60">
                    <el-form-item label="文本">
                      <el-input
                        v-model="link.text"
                        placeholder="请输入文本"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="URL" class="mt-2">
                      <el-input
                        v-model="link.url"
                        placeholder="请输入URL"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item label="二维码">
          <div class="w-full grid grid-cols-5 rounded-sm overflow-hidden">
            <div
              v-for="(qr, index) in footer.qr.imgs"
              :key="index"
              class="p-5 border border-[--website-layer-card-border] border-solid"
            >
              <el-form label-width="100">
                <el-form-item label="文本">
                  <el-input
                    v-model="qr.text"
                    placeholder="请输入文本"
                  ></el-input>
                </el-form-item>
                <el-form-item label="二维码链接" class="mt-2">
                  <el-input
                    v-model="qr.img"
                    placeholder="请输入图片"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveFooter">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <el-form label-width="100">
        <el-form-item label="导航">
          <div
            v-for="(nav, index) in footer.navs"
            :key="index"
            class="w-full mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md"
          >
            <el-form-item label="标题">
              <el-input v-model="nav.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="链接" class="mt-2">
              <div class="w-full grid grid-cols-5 rounded-sm overflow-hidde">
                <div
                  v-for="(link, linkIndex) in nav.links"
                  :key="linkIndex"
                  class="p-5 border border-[--website-layer-card-border] border-solid"
                >
                  <el-form label-width="60">
                    <el-form-item label="文本">
                      <el-input
                        v-model="link.text"
                        placeholder="请输入文本"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="URL" class="mt-2">
                      <el-input
                        v-model="link.url"
                        placeholder="请输入URL"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item label="二维码">
          <div class="w-full grid grid-cols-5 rounded-sm overflow-hidden">
            <div
              v-for="(qr, index) in footer.qr.imgs"
              :key="index"
              class="p-5 border border-[--website-layer-card-border] border-solid"
            >
              <el-form label-width="100">
                <el-form-item label="文本">
                  <el-input
                    v-model="qr.text"
                    placeholder="请输入文本"
                  ></el-input>
                </el-form-item>
                <el-form-item label="二维码链接" class="mt-2">
                  <el-input
                    v-model="qr.img"
                    placeholder="请输入图片"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveFooter">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { Footer } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, type TabsPaneContext } from 'element-plus'

if (!localStorage.getItem('footer')) {
  localStorage.setItem(
    'footer',
    JSON.stringify({
      navs: [
        {
          title: '关于deepin',
          links: [
            {
              text: '关于我们',
              url: 'https://www.deepin.org/zh/aboutus/'
            },
            {
              text: '联系我们',
              url: 'https://www.deepin.org/zh/contactus/'
            },
            {
              text: '条款协议',
              url: 'https://www.deepin.org/zh/agreement'
            },
            {
              text: '国际排名',
              url: 'https://distrowatch.com/table.php?distribution=deepin'
            }
          ]
        },
        {
          title: '海外社区',
          links: [
            {
              text: '西班牙语',
              url: 'https://deepinenespañol.org/'
            },
            {
              text: '斯洛伐克',
              url: 'https://deepin.sk/'
            },
            {
              text: '土耳其',
              url: 'https://deepintr.js.org/'
            },
            {
              text: '巴西',
              url: 'https://deepinbrasil.github.io/'
            },
            {
              text: '俄罗斯',
              url: 'https://mydeepin.ru/'
            },
            {
              text: '厄瓜多尔',
              url: 'https://deepin.lat/'
            },
            {
              text: '法语',
              url: 'https://deepinfrance.com/'
            },
            {
              text: '玻利维亚',
              url: 'https://deepinbolivia.com/'
            },
            {
              text: '沙特阿拉伯',
              url: 'https://deepin.mydeom.com/'
            }
          ]
        },
        {
          title: '友情链接',
          links: [
            {
              text: 'Ventoy',
              url: 'https://www.ventoy.net'
            },
            {
              text: 'uTools',
              url: 'https://www.u.tools'
            },
            {
              text: 'OSCHINA',
              url: 'https://www.oschina.net'
            },
            {
              text: 'CodeGeeX',
              url: 'https://codegeex.cn/'
            }
          ]
        }
      ],
      qr: {
        title: '加入我们',
        imgs: [
          {
            text: '关注社区微信公众号',
            url: '',
            img: 'https://bbs.deepin.org/assets/contact/wx.png'
          },
          {
            text: '论坛微信小程序',
            url: '',
            img: 'https://www.deepin.org/wp-content/uploads/2023/11/deepin小程序码.png'
          },
          {
            text: 'deepin小助手',
            url: '',
            img: 'https://www.deepin.org/wp-content/uploads/2024/08/xiaozhushou.png'
          }
        ]
      }
    })
  )
}

const footer = ref<Footer>(JSON.parse(localStorage.getItem('footer') || '{}'))
const activeName = ref('chinese')

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
}

const saveFooter = () => {
  // 检查是否有空值
  for (const nav of footer.value.navs) {
    if (nav.title.trim() === '') {
      ElMessage.warning('导航标题不能为空')
      return
    }
    for (const link of nav.links) {
      if (link.text.trim() === '' || link.url.trim() === '') {
        ElMessage.warning('链接文本和URL不能为空')
        return
      }
    }
  }
  localStorage.setItem('footer', JSON.stringify(footer.value))
  ElMessage.success('保存成功')
}
</script>

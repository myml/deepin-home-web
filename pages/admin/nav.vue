<template>
  <div>
    <AdminTabBar :active-name="activeName" @clicked="handleClick" />
    <el-card v-for="(menu, index) in nav.menu" :key="index" class="my-4">
      <template #footer>
        <el-row align="middle">
          <el-col :span="4"
            ><el-button type="primary" @click="addSubMenu(index, menu)"
              >添加子菜单</el-button
            ></el-col
          ></el-row
        >
      </template>
      <el-row
        class="p-2 border"
        :class="index % 2 == 0 ? 'bg-slate-200' : 'bg-slate-100'">
        <el-col :span="21">
          <el-row>
            <el-col :span="4"><el-input v-model="menu.name"></el-input></el-col>
            <el-col v-if="menu.children?.length == 0" :span="12" :offset="1"
              ><el-input v-model="menu.url"></el-input
            ></el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" size="small" @click="deleteMenu(index)"
            >删除</el-button
          >
        </el-col>
      </el-row>
      <template
        v-for="(childMenu, childIndex) in menu.children"
        :key="childIndex">
        <el-row
          class="p-2 border"
          :class="childIndex % 2 == 0 ? 'bg-slate-100' : 'bg-slate-200'">
          <el-col :span="20" :offset="1">
            <el-row>
              <el-col :span="4"
                ><el-input v-model="childMenu.name"></el-input
              ></el-col>
              <el-col
                v-if="childMenu.children?.length == 0"
                :span="18"
                :offset="1"
                ><el-input v-model="childMenu.url"></el-input
              ></el-col>
            </el-row>
          </el-col>
          <el-col :span="3">
            <el-button
              type="primary"
              size="small"
              @click="addGrandChildMenu(childIndex, childMenu)">
              添加子菜单
            </el-button>
            <el-button
              type="danger"
              size="small"
              @click="deleteChildMenu(index, childIndex)"
              >删除</el-button
            >
          </el-col>
        </el-row>
        <template
          v-for="(grandChildMenu, grandChildIndex) in childMenu.children"
          :key="grandChildIndex">
          <el-row
            class="p-2 border"
            :class="grandChildIndex % 2 == 0 ? 'bg-slate-200' : 'bg-slate-100'">
            <el-col :span="17" :offset="3">
              <el-row>
                <el-col :span="4"
                  ><el-input v-model="grandChildMenu.name"></el-input
                ></el-col>
                <el-col :span="19" :offset="1"
                  ><el-input v-model="grandChildMenu.url"></el-input
                ></el-col>
              </el-row>
            </el-col>
            <el-col :span="2" :offset="1">
              <el-button
                type="danger"
                size="small"
                @click="
                  deleteGrandChildMenu(index, childIndex, grandChildIndex)
                "
                >删除</el-button
              >
            </el-col>
          </el-row>
        </template>
      </template>
    </el-card>

    <el-row class="my-4"
      ><el-button type="primary" @click="addMenu">添加菜单</el-button>
      <el-button type="success" @click="saveChanges">保存</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Nav, Menu } from '~/api/model'
import { ElMessage } from 'element-plus'

const adminStore = useAdminStore()
const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    nav.value = adminStore.admin.homeConfig?.nav
    loading.value = false
  }
}
const loading = ref(false)
const activeName = ref<'zh' | 'en'>('zh')
const nav = ref<Nav>({} as Nav)

asyncData()

const handleClick = (tab: 'zh' | 'en') => {
  activeName.value = tab
  asyncData()
}

const dialogVisible = ref(false)
const currentMenu = ref<Menu | null>(null)

const addMenu = () => {
  currentMenu.value = { name: '', url: '', children: [] }
  dialogVisible.value = true
}

// 删除菜单
const deleteMenu = (index: number) => {
  nav.value.menu.splice(index, 1)
}

// 删除子菜单
const deleteChildMenu = (menuIndex: number, childIndex: number) => {
  if (!nav.value.menu[menuIndex]?.children) return
  nav.value.menu[menuIndex].children.splice(childIndex, 1)
}

// 删除二级子菜单
const deleteGrandChildMenu = (
  menuIndex: number,
  childIndex: number,
  grandChildIndex: number
) => {
  if (!nav.value.menu[menuIndex]?.children) return
  if (!nav.value.menu[menuIndex]?.children[childIndex]?.children) return
  nav.value.menu[menuIndex]?.children[childIndex]?.children.splice(
    grandChildIndex,
    1
  )
}

// 一级菜单添加子菜单
const addSubMenu = (index: number, menu: Menu) => {
  console.log(index, menu)
  menu.children?.push({ name: '', url: '', children: [] })
}

// 二级菜单添加子菜单
const addGrandChildMenu = (index: number, menu: Menu) => {
  console.log(index, menu)
  menu.children?.push({ name: '', url: '', children: [] })
}

const saveChanges = () => {
  // 检查有子菜单的一级菜单是否有url，如果有则置为空
  // 一起检查name是否为空，没有子菜单的url是否为空
  nav.value.menu.forEach(menu => {
    if (menu.name.trim() === '') {
      ElMessage.warning('菜单名称不能为空')
      return
    }
    if (!menu.children) return
    if (menu.children?.length > 0) {
      menu.url = ''
      menu.children.forEach(child => {
        if (child.children) {
          if (child.children?.length > 0) {
            child.url = ''
          }
        }
      })
    }
  })
  adminStore.setHomeConfig(activeName.value, 'nav', nav.value)
  ElMessage.success('保存成功')
}
</script>

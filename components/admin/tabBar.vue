<template>
  <el-row>
    <el-col>
      <span
        class="text-lg px-3 py-1 cursor-pointer hover:border-b-2 mx-1 hover:border-blue-400"
        :class="activeName === 'zh' ? 'border-b-2 border-blue-400' : ''"
        @click="handleClick('zh')"
        >中文</span
      >
      <span
        class="text-lg px-3 py-1 cursor-pointer hover:border-b-2 mx-1 hover:border-blue-400"
        :class="activeName === 'en' ? 'border-b-2 border-blue-400' : ''"
        @click="handleClick('en')"
        >英文</span
      >
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
const { activeName = 'zh' } = defineProps<{ activeName: 'zh' | 'en' }>()

const emit = defineEmits<{
  clicked: [option: 'zh' | 'en']
}>()
const handleClick = (lang: 'zh' | 'en') => {
  emit('clicked', lang)
}
</script>

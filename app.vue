<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
onMounted(() => {
  useLangStore().init()
})
</script>

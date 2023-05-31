<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'


import { useCategoryStore } from "@/stores/catagory"
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <RouterView :key="$route.fullPath"/>
  <LayoutFooter />
</template>
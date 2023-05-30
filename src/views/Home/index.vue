<script setup>
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  

</template>
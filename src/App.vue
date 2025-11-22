<template>
  <div class="wrapper">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'

export default {
  name: "App",
  components: {
    HeaderComponent,
  }
}
</script>

<style src="./assets/styles/style.css"></style>
<style src="./assets/styles/media.css"></style>

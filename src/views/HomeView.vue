<template>
      <div id="content">
          <div id="content-positioner">
              <div class="sidebar left"></div>
              <div id="feed-of-posts">
                      <!-- from json-->
              </div>
              <div class="sidebar right"></div>
          </div>
      </div>
    <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/Footer.vue'

export default {
  name: "HomeView",
  components: {
    FooterComponent
  }
}

</script>

<style scoped src="../assets/styles/index.css">
</style>

<template>
      <div id="content">
    <div id="content-positioner">
      <div class="sidebar left"></div>
      <div id="feed-of-posts">
        <!-- Render posts from store -->
        <PostItem
          v-for="post in allPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
      <div class="sidebar right"></div>
    </div>
  </div>
    <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/Footer.vue'
import PostItem from '@/components/Post.vue'
import { mapGetters } from 'vuex'


export default {
  name: "HomeView",
  components: {
    FooterComponent,
    PostItem
  },
 computed: {
  ...mapGetters(['allPosts'])
  }
}

</script>

<style scoped src="../assets/styles/index.css">
</style>

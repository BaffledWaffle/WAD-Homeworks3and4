<template>
  <div id="content">
    

    <div id="content-positioner">
      <div class="sidebar left"></div>

        <div class="center-column">
          <div class="logout-bar">
            <button class="logout-btn" @click="logout">
              Logout
            </button>
          </div>

          <div id="feed-of-posts">
            <!-- Render posts from store -->
            <PostItem
              v-for="post in allPosts" 
              :key="post.id" 
              :post="post" 
            />

            <div class="reset-likes-container">
              <button @click="resetAllLikes" class="reset-likes-btn">
                Reset All Likes
              </button>
            </div>
          </div>

          <div class="home-actions">
            <button class="action-btn add" @click="$router.push('/add-post')">
              Add Post
            </button>

            <button class="action-btn delete" @click="deleteAllPosts">
              Delete All
            </button>
          </div>
        </div>

      <div class="sidebar right"></div>
    </div>
  </div>
    <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/Footer.vue'
import PostItem from '@/components/Post.vue'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'


export default {
  name: "HomeView",
  components: {
    FooterComponent,
    PostItem
  },
 computed: {
  ...mapGetters(['allPosts'])
  },
  methods: {
    ...mapActions(['resetLikes', 'fetchPosts']),
    resetAllLikes() {
      this.resetLikes();
    },
    logout() {
    localStorage.removeItem('token');

    axios.post('http://localhost:3000/api/users/logout')
      .then(() => {
        this.$router.push('/login');
      })
      .catch(err => {
        console.error(err);
        this.$router.push('/login');
      });
  },
    async deleteAllPosts() {
      try {
        const token = localStorage.getItem('token');
        console.log("send")
        await axios.delete('http://localhost:3000/api/posts/delete-all', {
          headers: {
            authorization: 'Bearer ' + token
          }
        });

        this.$store.dispatch('fetchPosts');

        this.$router.push('/');
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          console.error(err);
        }
      }
}
  },
  mounted() {
    this.fetchPosts();
  }
}

</script>

<style scoped src="../assets/styles/index.css">

</style>

import { createStore } from 'vuex';
import postsData from '@/assets/js/posts.json'; 

export default createStore({
  state: {
    posts: postsData // store all posts
  },
  getters: {
    // Get all posts
    allPosts: state => state.posts
  },
  mutations: {
    // Increment likes for a post by its id
    likePost(state, postId) {
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.likes++;
      }
    },
    // Reset likes for all posts
    resetLikes(state) {
      state.posts.forEach(post => post.likes = 0);
    }
  },
  actions: {
    // Actions can call mutations if needed (optional here)
    likePost({ commit }, postId) {
      commit('likePost', postId);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  modules: {}
});

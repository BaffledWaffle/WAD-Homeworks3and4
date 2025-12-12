<template>
  <div class="post">
    <!-- Post image (only shown if image_path exists) -->
    <div v-if="post.image_path" class="post-images">
      <img :src="getImageUrl(post.image_path)" alt="post" />
    </div>

    <div class="avatar-text">
      <div class="user-avatar">
        <img :src="getImageUrl(post.avatar_path)" alt="user-avatar" />
      </div>

      <div class="text">
        <div class="post-header">
          <p class="usernames">{{ post.author }}</p>
          <p class="post-date">{{ formatDate(post.created_at) }}</p>
        </div>

        <p :class="['main-text', { expanded: expanded }]" ref="mainText">
          {{ post.description }}
        </p>

        <!-- Show more / Show less button -->
        <button v-if="showButton" @click="toggleExpanded">
          {{ expanded ? 'Show less' : 'Show more' }}
        </button>

        <!-- Like button with like count -->
        <div class="post-like">
          <button @click="likePost"></button>
          <p>{{ post.likes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      expanded: false,
      showButton: false
    };
  },
  mounted() {
    this.checkShowButton();
  },
  methods: {

    getImageUrl(path) {
      if (!path) return '';
      // Handle both absolute and relative paths
      if (path.startsWith('assets/')) {
        return require(`@/${path}`);
      }
      return path;
    },

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      // Returns: "Oct 31, 2025"
    },

    toggleExpanded() {
      this.expanded = !this.expanded;
    },
    likePost() {
      this.$store.commit('likePost', this.post.id);
    },
    checkShowButton() {
      this.$nextTick(() => {
        const el = this.$refs.mainText;
        if (el.scrollHeight > el.clientHeight) {
          this.showButton = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 15px;
  background-color: #F5E8D9;
  border-radius: 8px;
}

.post-images img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.avatar-text {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
}

.user-avatar img {
  width: 40px;
  height: 40px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
}


.usernames {
  font-weight: bold;
  font-family: "mont";
}

.post-date {
  font-family: "mont_light";
  font-size: 12px;
  color: #666;
  margin: 0;
}

.main-text {
  font-family: "mont_light";
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.main-text.expanded {
  -webkit-line-clamp: unset;
}

.text button {
  font-family: "mont";
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.post-like button {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/img/heartEmpty.png");
  background-size: cover;
  border: none;
  cursor: pointer;
}

.post-like button:hover {
  background-image: url("@/assets/img/heartHover.png");
}
</style>

<template>
        <div id="content">
            <form id="add-post-form" action="">
                <div id="inputs-container">
                    <div>
                        <label for="post-file">Add file:</label>
                        <label id="post-file" name="postFile">
                            <input type="file"/>Choose file
                        </label>
                    </div>
                    <div>
                        <label for="post-text">Post text:</label>
                        <textarea id="post-text" placeholder="Type here Your post text..." name="postText"></textarea>
                    </div>
                </div>
                <button type="button" @click="goToCreatePost">CREATE POST</button>
            </form>
        </div>
</template>

<script>
export default {
  name: "AddPostView",

  methods: {
    goToCreatePost() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped src="../assets/styles/add-post.css">
</style>

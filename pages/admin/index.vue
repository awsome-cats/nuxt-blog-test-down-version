<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        Create Post
      </app-button>
    </section>
    <!---- 投稿された記事の表示 --->
    <section class="existing-posts">
      <h1>投稿済みの記事はこちら</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
    <!---- 投稿された記事の表示 end--->
  </div>
</template>

<script>

export default {
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>

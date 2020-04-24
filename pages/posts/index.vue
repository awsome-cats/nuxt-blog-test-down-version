<template>
  <div>
    <div>
      <h3>This is post page</h3>
    </div>
    <div class="posts-page">
    <section class="post-list">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  // storeの配列を返す
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
  div h3 {
    text-align: center;
  }
  .posts-page {
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


  
</style>



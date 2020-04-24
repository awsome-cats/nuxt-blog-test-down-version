<template>
  <div>
    <section class="post-list">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :is-admin ='isAdmin'
        :title="post.title"
        :preview-text="post.previewText"
        :thumbnail="post.thumbnail"
      />
    </section>
    
  </div>
</template>

<script>
import postPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    postPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
      posts: {
      type: Array,
      required: true
    }
  },
  created(){
    console.log('props',this.posts)
  }
  // computed: {
  //   posts() {
  //     console.log(this.posts)
  //   }
  // }
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>


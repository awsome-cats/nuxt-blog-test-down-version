<template>
  <div class="home-page">
    <section class="intro">
      <!-- Top Page start -->
      <h1>Get the Latest tech news!</h1>
    </section>
      <!-- nuxtServerInit -->
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image:url('~assets/images/main-back-image.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  font-weight:200;
  color: black;
  background-color: rgb(245, 245, 245);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>

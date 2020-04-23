<template>
  <nuxt-link :to="foodLink" class="food-preview">
    <article>
      <div class="food-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}" />
      <div class="food-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'foodPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      require: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    foodLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style scoped>
  .post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .food-preview {
    width: 400px;
    margin: 10px;
  }
}

.food-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.food-content {
  padding: 10px;
  text-align: center;
}

a:hover .food-content,
a:active .food-content {
  background-color: #ccc;
}
</style>

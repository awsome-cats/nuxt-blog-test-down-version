<template>
  <div>
    <section class="food-list">
      <food-preview
        v-for="food in foods"
        :key="food.id"
        :id="food.id"
        :is-admin ='isAdmin'
        :title="food.title"
        :preview-text="food.previewText"
        :thumbnail="food.thumbnail"
      />
    </section>
    
  </div>
</template>

<script>
import FoodPreview from '@/components/Posts/FoodPreview'
export default {
  components: {
    FoodPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
      foods: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.food-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
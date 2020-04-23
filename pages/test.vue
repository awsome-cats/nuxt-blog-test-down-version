<template>
  <div>
    <h1>Food page</h1>
    <FoodList :foods="foodPosts"/>
  </div>
</template>

<script>
import FoodList from '~/components/Posts/FoodList'
export default {
  components: {FoodList},
  fetch({ commit, store }) {
    return new Promise((resolve, reject) => {
      resolve({
        foodPosts:[
            {
              id: '1',
              title: '投稿Food1', 
              previewText: '初Food投稿',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOhrYYnO4OzoLGTl0X78W6vuAmLnl2H1XqaNHHeguibNcZ5qj&usqp=CAU'
            },
            {
              id: '2',
              title: '投稿Food2', 
              previewText: '投稿Food2',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOhrYYnO4OzoLGTl0X78W6vuAmLnl2H1XqaNHHeguibNcZ5qj&usqp=CAU'
            },
            {
              id: '3',
              title: '投稿Food3', 
              previewText: '投稿Food3',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOhrYYnO4OzoLGTl0X78W6vuAmLnl2H1XqaNHHeguibNcZ5qj&usqp=CAU'
            },
            {
              id: '4',
              title: '投稿Food4', 
              previewText: '投稿Food4',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtOhrYYnO4OzoLGTl0X78W6vuAmLnl2H1XqaNHHeguibNcZ5qj&usqp=CAU'
            }
        ]
      })
    })
    .then(data => {
     store.commit('setFoodPosts', data.foodPosts)
    })
  },
   computed: {
     foodPosts() {
      return this.$store.getters.foodPosts
    }
   }
}
</script>

<style>

</style>
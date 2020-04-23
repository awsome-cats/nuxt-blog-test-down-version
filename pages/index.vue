<template>
  <div class="home-page">
    <section class="intro">
      <!-- Top Page start -->
      <h1>Get the Latest tech news!</h1>
    </section>
      <!-- nuxtServerInit -->
      <PostList :posts="loadedPosts"/>
      <!-- fetch -->
      <FoodList :foods="foodPosts"/>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
import FoodList from '~/components/Posts/FoodList'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostList,
    FoodList
  },

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
            },{
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
  // nuxtServerInitをstoreから呼び出す
  computed: {
    ...mapGetters(['loadedPosts']),
    // loadedPosts() {
    //   return this.$store.getters.loadedPosts
    // },
    foodPosts() {
        return this.$store.getters.foodPosts
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

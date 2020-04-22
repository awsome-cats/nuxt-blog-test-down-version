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
import AppButton from '~/components/UI/AppButton'
import PostList from '~/components/Posts/PostList'
export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  asyncData(context, callback) {
    
    setTimeout(() =>{
      callback(null, {
        loadedPosts :[
        {
          id: '1',
          title: '投稿1', 
          previewText: '初投稿',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBbWvbtIKXHQpA8MZT146AQRLtVjrje5fQQjSij_UeudjJ2SvX&usqp=CAU'
        },
        {
          id: '2',
          title: '投稿2', 
          previewText: '投稿2',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdz4yUO9vj48xRq2fqjel_XbaHo4lW-bFXgQ-eMIcG6WTEDWca&usqp=CAU'
        },{
          id: '3',
          title: '投稿3', 
          previewText: '投稿3',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqniWF-fNSWMNTjvW2s8Axuc7LjxOVX8fp7xBCteJvXd4_tlco&usqp=CAU'
        },
        {
          id: '4',
          title: '投稿4', 
          previewText: '投稿4',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTie-RNPNuofgrhFrHS83JqX7Kv8zYM7cWeueX77AAff9gMRMib&usqp=CAU'
        }
      ]
      })
    }, 100)
  },
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

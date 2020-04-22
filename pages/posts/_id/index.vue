<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        タイトル: {{loadedPost.title}}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{loadedPost.updatedDate}}
        </div>
        <div class="post-detail">
          <!-- contextのparamsは使えなかった -->
          Written by Name {{loadedPost.author}},pageID:{{ $route.params.id }}
        </div>
        <p>{{loadedPost.content}}</p>
      </div>
      <p>Let me know what you think about the post , send a mail to <a href="feedback@my-awsome-domain.com">feedback@my-awsome-domain.com.</a></p>
      <p><nuxt-link to="/">戻る</nuxt-link></p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: 
          {
            author: 'kenny',
            updatedDate: new Date(),
            title: 'リモートワークにとって大事なこと3つ (ID: '+ context.route.params.id +')',
            id: '1',
            content: 'こんな時代だからこそオンラインの拡充を....',
            previewText: '初投稿',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyVHRLlDbRXRr5-N62PlJJmDmqZgiZqq3fjBFnPNCMtwcryulT&usqp=CAU'
          }
      })
    },100)

  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

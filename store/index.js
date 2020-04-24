import axios from 'axios'
// require('dotenv').config()
// const { API } = process.env

export const state = () => ({
  state: {
    loadedPosts: []
  }
})

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  }

}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios.get(process.env.baseUrl + '/posts.json')
    
    .then(res => {
      const postsArray = []
    for(const key in res.data) {
      postsArray.push({...res.data[key], id: key})
    }
      vuexContext.commit('setPosts', postsArray)
    })
    .catch(e => context.error(e))
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  addPost(vuexContext, post){
    const createdPost = {...post, updatedDate: new Date()}
    return axios.post(process.env.BASE_URL, createdPost)
      .then(result => {
        vuexContext.commit('addPost', {...createdPost, id: result.data.name})
      })
      .catch(e => console.log(e))
  },
  editPost(vuexContext, editedPost) {
    return axios.put(process.env.BASE_URL + '/' + editedPost.id + '.json', editedPost)
    .then(res => {
      vuexContext.commit('editPost', editedPost)
    })
      .catch(e => console.log(e))
  }
  
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  }
}


//  import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       loadedPosts: [],
//       foodPosts: []
//     },
//     // state, payloadを引数にとってpostsに代入する
//     mutations: {
//       setPosts (state, posts) {
//         state.loadedPosts = posts
//       },
//       setFoodPosts(state, foods) {
//         state.foodPosts = foods
//       }
//     },
//     actions: {

//       getData({commit, loadedPosts}) {
//         axios.get('https://firestore.googleapis.com/v1/projects/nuxt-blog-13a37/databases/(default)/documents/posts/')
//         .then(res => {
//           state.loadedPosts = res.data.documents
          
//         })
//         .catch(e => {
//           console.log(e)
//         })
//       },
//       setPosts (vuexContext, posts) {
//         vuexContext.commit('setPosts', posts)
//       },
//       setFoodPosts (vuexContext, foods) {
//         vuexContext.commit('setFoodPosts',foods)
//       }
//     },

//     // 配列を返す
//     getters: {
//       loadedPosts (state) {
//         return state.loadedPosts
//       },
//       foodPosts (state) {
//         return state.foodPosts
//       }
//     }
//   })
// }

// export default createStore
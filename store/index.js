// const state = () => ({

// })

// const mutations = {

// }

// const actions = {

// }

// const getters = {

// }


 import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    // state, payloadを引数にとってpostsに代入する
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    // commitを使ってmutaitionsのsetPostsを呼び出す
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
            vuexContext.commit('setPosts',[
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
              },
              {
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
            ])
            
          resolve()
        }, 100)
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    // 配列を返す
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
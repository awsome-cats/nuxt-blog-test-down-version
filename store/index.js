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
      loadedPosts: [],
      foodPosts: []
    },
    // state, payloadを引数にとってpostsに代入する
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      setFoodPosts(state, foods) {
        state.foodPosts = foods
      }
    },
    // commitを使ってmutaitionsのsetPostsを呼び出す
    // vuexContext: vuexのcontextでactionsの中でのみ使える
    // Nuxt.jsのcontextとは違う
    // vuexContextの内容
    // {
    // state,      // `store.state` と同じか、モジュール内にあればローカルステート
    // rootState,  // `store.state` と同じ。ただしモジュール内に限る
    // commit,     // `store.commit` と同じ
    // dispatch,   // `store.dispatch` と同じ
    // getters,    // `store.getters` と同じか、モジュール内にあればローカルゲッター
    // rootGetters // `store.getters` と同じ。ただしモジュール内に限る
    // }
    actions: {
      nuxtServerInit(context) {
        return new Promise((resolve, reject) => {
            context.commit('setPosts',[
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
        })
      },
      
      setPosts (context, posts) {
        context.commit('setPosts', posts)
      },
      setFoodPosts (context, foods) {
        context.commit('setFoodPosts',foods)
      }
    },

    // 配列を返す
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      foodPosts (state) {
        return state.foodPosts
      }
    }
  })
}

export default createStore
import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },

    mutations: {
      SET_POSTS (state, posts) {
        state.posts = posts
      }
    }
  })
}

export default store

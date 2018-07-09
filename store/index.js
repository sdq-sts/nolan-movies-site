import Vuex from 'vuex'
import Author from '~/assets/Nolan'

const store = () => {
  return new Vuex.Store({
    state: {
      authorName: Author.name,
      authorImages: Author.images,
      authorBio: Author.bio,
      movies: Author.movies
    },

    getters: {
      authorName: (state) => state.authorName,
      authorImages: (state) => state.authorImages,
      authorBio: (state) => state.bio,
      movies: (state) => state.movies
    }
  })
}

export default store

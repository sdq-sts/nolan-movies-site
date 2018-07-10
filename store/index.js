import Vuex from 'vuex'
import Author from '~/assets/Nolan'

const store = () => {
  return new Vuex.Store({
    state: {
      siteTitle: Author.siteTitle,
      siteSubtitle: Author.siteSubtitle,
      siteDescription: Author.siteDescription,
      socialLinks: Author.social,
      authorName: Author.name,
      authorImages: Author.images,
      authorBio: Author.bio,
      movies: Author.movies
    },

    getters: {
      siteTitle: (state) => state.siteTitle,
      siteSubtitle: (state) => state.siteSubtitle,
      siteDescription: (state) => state.siteDescription,
      socialLinks: (state) => state.socialLinks,
      authorName: (state) => state.authorName,
      authorImages: (state) => state.authorImages,
      authorBio: (state) => state.authorBio,
      movies: (state) => state.movies
    }
  })
}

export default store

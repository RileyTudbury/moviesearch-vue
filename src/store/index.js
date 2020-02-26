import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: [],
    myMovies: []
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },

    addMovie(state, movie) {
      state.movies.push(movie)
    },

    removeMovie(state, id) {
      state.movies = state.movies.filter(m => m._id != id)
    },

    setActiveMovie(state, movie) {
      state.activeMovie = movie
    }
  },

  actions: {

    async getMovies({ commit, dispatch }, searchParam) {
      try {
        let res = await _api.get(searchParam)
        commit("setMovies", res.data.results)

      } catch (error) {
        console.error(error)
      }
    },

    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie)
    }
  }
})

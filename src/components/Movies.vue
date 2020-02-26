<template>
  <div class="row">
    <div class="col text-center">
      <h1>Movies go here!</h1>
      <ol>
        <movie v-for="movieObj in movies" :key="movieObj._id" :movieData="movieObj" />
      </ol>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";

export default {
  name: "Movies",
  mounted() {
    this.$store.dispatch("getMovies");
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {
    Movie
  }
};
</script>

<style>
</style>
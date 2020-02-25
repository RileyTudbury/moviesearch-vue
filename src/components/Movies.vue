<template>
  <div class="row">
    <div class="col text-center">
      <h1>Movies go here!</h1>
    </div>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
</style>
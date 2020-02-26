<template>
  <div class="movie-search">
    <h5>Search for Movies here!</h5>
    <form @submit.prevent="getMovies(queryString)">
      <input
        type="text"
        name="query"
        placeholder="Enter your search..."
        v-model="queryString"
        required
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MovieSearch",
  data() {
    return {
      queryString: ""
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies", this.queryString);
    }
  }
};
</script>

<style scoped>
</style>
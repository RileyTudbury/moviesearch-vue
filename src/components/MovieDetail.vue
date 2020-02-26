<template>
  <div class="row">
    <div class="col text-center">
      <h1>Movie Details</h1>
      <div v-if="details.id">
        <h3>{{ details.title }}</h3>
        <h5>Average Score: {{details.vote_average}} out of 10</h5>
        <img :src="'https://image.tmdb.org/t/p/w500/' + details.poster_path" width="350" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  methods: {},
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>

<style scoped>
</style>
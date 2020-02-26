<template>
  <li class="my-3" @click="setActive">
    <img
      v-if="movieData.poster_path"
      :src="'https://image.tmdb.org/t/p/w500/' + movieData.poster_path"
      alt="Movie Poster"
      height="40"
      width="40"
    />
    <img v-else src="//placehold.it/40" alt />
    <h5>
      {{ movieData.title }}
      <span
        v-if="movieData.vote_average"
      >- {{ movieData.vote_average}} out of 10</span>
    </h5>
  </li>
</template>

<script>
export default {
  name: "Movie",
  props: ["movieData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
  outline: 1px solid black;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
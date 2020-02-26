<template>
  <li class="text-left my-2" @click="setActive">
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + movieData.poster_path"
      alt="Movie Poster"
      height="40"
      width="40"
    />
    <h5>{{ movieData.title }}</h5>
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
.movie {
}
li {
  display: flex;
  cursor: pointer;
}
</style>
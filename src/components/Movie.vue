<template>
  <h1>Movie goes here!</h1>
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
  cursor: pointer;
}
</style>
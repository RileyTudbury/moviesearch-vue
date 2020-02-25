<template>
  <li>
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
  cursor: pointer;
}
</style>
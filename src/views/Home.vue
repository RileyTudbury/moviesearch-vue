<template>
  <div class="home container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Your Movie List!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center" id="search-bar">
        <movie-search />
      </div>
    </div>
    <div class="row">
      <div class="col-4" id="movies-list">
        <movies />
      </div>
      <div class="col-4" id="active-movie">
        <movie-detail />
      </div>
      <div class="col-4" id="added-movies"></div>
    </div>
  </div>
</template>

<script>
import Movies from "@/components/Movies";
import Movie from "@/components/Movie";
import MovieDetail from "@/components/MovieDetail";
import MovieSearch from "@/components/MovieSearch";

export default {
  name: "Home",
  components: {
    Movies,
    Movie,
    MovieDetail,
    MovieSearch
  }
};
</script>

<style>
body {
  text-shadow: 2px 2px 5px black;
  min-height: 100vh;
  color: white;
  background-image: url(https://wallpaperaccess.com/full/304265.jpg);
}
</style>
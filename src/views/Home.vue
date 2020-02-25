<template>
  <div class="home container-fluid">
    <div class="row text-center">
      <div class="col">
        <h1>Your Movie List!</h1>
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

export default {
  name: "Home",
  components: {
    Movies,
    Movie,
    MovieDetail
  }
};
</script>

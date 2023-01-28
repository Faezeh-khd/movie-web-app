<template>
    <div id="movie-container">
        <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
</template>

<script>
import Movie from './Movie.vue'
export default {
    components: {
        Movie,
    },
    data() {
        return {
            movies: [],
        };
    },
    computed: {
        movies(){
            return this.$store.getters.getMovies;
        },
    },
    // created() {
    //     this.movies = this.$store.getters.getMovies;
    // }

};
</script>

<style lang='scss' scoped>
#movie-container {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    justify-content: center;
}
</style>
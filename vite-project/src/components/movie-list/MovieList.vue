<template>
   <ul class="movie-list list-group">
      <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id"
       @onToggle="$emit('onTogglee' , $event)" 
       @forTrash="$emit('trashBtn' , $event)" />
      <!-- <MovieListItem />
      <MovieListItem /> -->
   </ul>
</template>

<script>
import MovieListItem from '@/components/movie-list-item/MovieListItem.vue';

export default {
   components: {
      MovieListItem,
   },
  props: {
   movies: {
      type: Array,
      required: true, 
   }
  }
}
</script>

<style scoped> 
.movie-list {
   margin-top: 2rem;
   padding: 1.5rem;
   border-radius: 4px;
   background-color: #fcfaf5;
   box-shadow: 15px 15px 15px rgba(0 , 0, 0, 0.15);
   /* margin-bottom: 1rem; */
}
</style>
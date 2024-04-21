<template>
   <div class="movie-add-form">
      <h3>
         Yangi Kino Qoshish
      </h3>
      <form class="add-form d-flex">
         <input type="text" class="form-control new-movie-label" placeholder="Qanday Kino?" :value="name" @input="name = $event.target.value">
         <input type="number" class="form-control new-movie-label" placeholder="Nechchi marotaba korilgan?" :value="viewers" @input="viewers = $event.target.value">

         <PrimaryBtn class="btn-outline-dark" type="submit" @click="addMovie">Qo'shish</PrimaryBtn>
      </form>
   </div>
</template>

<script>

export default {
   data(e) {
      return {
         name: "",
         viewers: ""
      }
   },
  methods: {
   addMovie(e) {
      if(!this.name || !this.viewers) return
      e.preventDefault();
      const newMovie = {
         name: this.name,
         viewers: this.viewers,
         favourite: false,
         like: false,
         id: Date.now()
      }
      this.$emit("createMovie", newMovie)
      this.name = ""
      this.viewers = ""
   }
  }
}  
</script>

<style scoped>
.movie-add-form {
   padding: 1.5rem;
  margin-top: 2rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
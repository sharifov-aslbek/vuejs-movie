<template>
   <Box>
      <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ AllmoviesCount }}</p>
      <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{ favouriteMoviecount }}</p>
   </Box>   
</template>

<script>

export default {
   props: {
      AllmoviesCount: {
         type: Number,
         required: true,
      },
      favouriteMoviecount: {
         type: Number,
         required: true,
      }
   }
}
</script>

<style scoped> </style>
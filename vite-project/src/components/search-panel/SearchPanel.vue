<template>
   <input type="text" class="form-control search-input" placeholder="Kinolarni qidirish"
    @input="changeHandler"  :value="termA">
</template>

<script>
export default {
   props: {
      updateTermHandler: {
         type: Function,
         required: true
      },
   },
   data() {
      return {
         termA: '',
      }
   },
   methods: {
      changeHandler(e) {
         this.termA = e.target.value
         this.updateTermHandler(this.termA)
      }
   },
}
</script>

<style scoped>
.search-input {
   /* margin-top: 2rem; */
   padding: 1.5rem;
   border-radius: 4px;
   background-color: #fcfaf5;
   box-shadow: 15px 15px 15px rgba(0 , 0, 0, 0.15);
   margin-bottom: 1rem;
}
</style>
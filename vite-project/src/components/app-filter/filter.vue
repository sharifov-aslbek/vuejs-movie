<template>
   <div class="btn-group">
      <PrimaryBtn v-for="btn in filterBtns" :key="btn.name" 
      class="btn" 
      :class="[filterName == btn.name ? 'btn-dark' : 'btn-outline-dark']" 
      @click="filterHandler(btn.name)">
         {{ btn.title }}
      </PrimaryBtn>
      </div>
</template>


<script>

export default {
   props: {
      updateFilterHandler: {
         type: Function,
         required: true
      },
      filterName: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         filterBtns: [
            {
               title: 'Barcha Kinolar',
               name: 'all'
            },
            {
               title: 'Mashhur kinolar ',
               name: 'popular'
            },
            {
               title: 'Eng kop korilgan Kinolar',
               name: 'mostViewers'
            }
         ],
         filter: "all",
      }
   },
   methods: {
      filterHandler(filter) {
         this.filter = filter
         this.updateFilterHandler(this.filter)
      },
   }
}
</script>

<style></style>
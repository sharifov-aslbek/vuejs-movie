<template>
  <div class="app font-monospace">
     <div class="content">
        <AppInfo :AllmoviesCount="movies.length" :favouriteMoviecount="movies.filter(c => c.favourite).length" />
        <Box>
           <SearchPanel :updateTermHandler="updateTermHandler" />
           <Filter :updateFilterHandler="updateFilterHandler" :filterName="filter" />
        </Box>
        <MovieList :movies="onFilterHandler(onSearchHandler(movies, term) , filter)" @onTogglee="onToggleHandler" @trashBtn="trashHandler" />
        <MovieAdd @createMovie="createMovie" />
     </div>
  </div>
</template>


<script>
import AppInfo from '@/components/appB/app-info/AppInfo.vue';
import SearchPanel from '@/components/search-panel/SearchPanel.vue';
import Filter from '@/components/app-filter/filter.vue';
import MovieList from '@/components/movie-list/MovieList.vue';
import MovieAdd from '@/components/movie-add-form/MovieAdd.vue';
export default {
  components: {
     AppInfo,
     SearchPanel,
     Filter,  
     MovieList,
     MovieAdd,
  },
  data() {
      return {
         movies: [  ],
         term: '',
         filter: 'all',
      }
   },
   methods: {
      createMovie(item) {
         this.movies.push(item)
      },
      onToggleHandler({id, prop}) {
         console.log(prop);
         this.movies = this.movies.map(item => {
            if(item.id == id) {
               return {...item, [prop]: !item[prop]}
            }
            return item
         })
      },
      trashHandler(id) {
         this.movies = this.movies.filter(c => c.id != id)
      },
      onSearchHandler(arr , term) {
         if(term.length == 0) {
            return arr
         }

         return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
      },
      onFilterHandler(arr, filter) {
         switch (filter) {
            case 'popular':
               return arr.filter(c => c.like)
            case 'mostViewers':
                  return arr.filter(c => c.viewers > 500)
            default:
               return arr

         }
      },
       updateTermHandler(term) {
         this.term = term
      },
      updateFilterHandler(filter) {
         this.filter = filter
      },
      async fetchMovie() {
            const dataa = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const jsonData = await dataa.json()
            const newArr = await jsonData.map(item => ({
               id: item.id,
               name: item.title,
               viewers: item.id * 10,
               favourite: false,
               like: false,
            }))
            this.movies = newArr
         } ,
      },
      mounted() {
         this.fetchMovie()
      }
      
   }  
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
</style>  

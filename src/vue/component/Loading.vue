<style lang="scss">

</style>

<template lang="pug">
transition(name="fade",mode="out-in")
  //- .loading(v-if="loadingShow")
  .loading
    span Loading...
</template>

<script lang="es6">
export default {
    name: 'Loading',
    data(){
        return {
            // loadingShow:true,
        }
    },
    computed: Vuex.mapState({
        loadingShow: state => state.loadingShow,
        // changeLoading: state => state.changeLoading
    }),
    mounted(){
			// console.log(this.$store.state.loadingShow);
      // console.log(state.loadingShow);
      console.log(this.loadingShow);

			$(window).load(()=>{
        // this.changeLoading();
				// this.loadingShow = false;
			});
			
    },
		methods:{
				
    },
    components:{
      
    }
}
</script>
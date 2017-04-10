<style lang="scss">

</style>

<template lang="pug">
transition(name="fade",mode="out-in")
  .loading(v-if="loadingShow")
    span Loading...
</template>

<script>

export default {
    name: 'Loading',
    data(){
        return {
            // loadingShow:true,
        }
    },
    computed: {
      ...Vuex.mapState({
          loadingShow: state => state.loadingShow
      }),
      // testAddOthercomputed:()=>{
      //   return 'testAddOthercomputed'
      // }
    },
    mounted(){
      
			$(window).load(()=>{
        this.changeLoading();
        // this.goconsole();
        // console.log(this.testAddOthercomputed);
			});
			
    },
		methods:{
      ...Vuex.mapActions(['changeLoading']),
      // goconsole(){
      //   console.log('456');
      // },
      
    },
    components:{
      
    }
}


</script>
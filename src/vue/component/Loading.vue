<style lang="scss">

</style>

<template lang="pug">
transition(name="fade",mode="out-in")
  .loading(v-if="loadingShow")
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
        testAddOthercomputed: ()=> true,
    }),
    mounted(){
      
			$(window).load(()=>{
        this.change();
        this.goconsole();
			});
			
    },
    // methods:Vuex.mapActions({
    //   change:'changeLoading',
    //   goalert:()=>{
    //     alert('456');
    //   },
    // }),
		methods:{
      goconsole(){
        console.log('456');
      },
      change(){
        this.$store.dispatch('changeLoading')
      }
    },
    components:{
      
    }
}


</script>
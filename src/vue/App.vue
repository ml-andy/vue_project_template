<style lang="scss">
@import "../css/index.scss";
</style>

<template lang="pug">
#app
	Loading
	
	.menu
		router-link(to="/foo")
			|Go to Foo
		router-link(to="/bar")
			|Go to Bar
	.wrapper
			router-view

</template>

<script>
const Loading = require('../vue/component/Loading.vue')

export default {
    name: 'app',
    data(){
        return {
            // loadingShow:true,
        }
    },
    computed: {
      ...Vuex.mapState({
          loadingShow: state => state.loadingShow,
      }),

    },
    mounted(){
      // console.log(this.loadingShow);

			$(window).load(()=>{
				// this.changeLoading();
			});
			
    },
		methods:{
      // ...Vuex.mapActions(['changeLoading']),
      tracker_pg(v){
        tracker_pg(v);
      },
      tracker_btn(v){
        tracker_btn(v);
      },
    },
    components:{
      Loading
    }
}
</script>
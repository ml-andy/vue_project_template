<style lang="scss">
@import "../css/index.scss";
</style>

<template lang="pug">
#app
	Loading
	
	.wrapper

</template>

<script lang="es6">
const Loading = require('../vue/component/Loading.vue');
// console.log(Vuex.mapState)
// import { mapState } from 'Vuex'

export default {
    name: 'app',
    data(){
        return {
            // loadingShow:true,
        }
    },
    computed: Vuex.mapState({
        loadingShow: state => state.loadingShow,
    }),
    mounted(){
			// console.log(this.$store.state.loadingShow);
      // console.log(state.loadingShow);
      // console.log(this.loadingShow);

			$(window).load(()=>{
				// this.loadingShow = false;
			});
			
    },
		methods:{
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
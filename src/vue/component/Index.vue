<style lang="scss">

</style>

<template lang="pug">
.main
  //- |this is index!! id:{{ $route.params.id }}
  |this is index!!
</template>

<script>

export default {
    name: 'Index',
    data(){
        return {
            // loadingShow:true,
        }
    },
    computed: {
      
    },
    mounted(){
      
    },
		methods:{
      
    },
    watch:{
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(this.$route.params.id);
        
      }
    },
    components:{
      
    }
}


</script>
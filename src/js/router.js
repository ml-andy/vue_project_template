const Index = require('../vue/component/Index.vue')
// const Aaa = { template: '<div>aaa</div>' }
// const Bbb = { template: '<div>bbb</div>' }

const routes = [
  { 
    path: '/', 
    components: {
      default:Index,
      // a: Aaa,
      // b: Bbb
    }
  },
  // { path: '/:id', component: Index },
  // { path: '/index/:id', component: Index },
]

const router = new VueRouter({
  routes
})

module.exports = router;

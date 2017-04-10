const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Product = { template: '<div> product {{ $route.params.id }}</div>' }
const User = { template: '<div> user ID:{{ $route.params.id }} / POSTID:{{ $route.params.post_id }}</div>' }
const Index = require('../vue/component/Index.vue')

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/product/:id', component: Product },
  { path: '/user/:id/post/:post_id', component: User },
  { path: '/index/:id', component: Index },
]

const router = new VueRouter({
  routes
})

module.exports = router;

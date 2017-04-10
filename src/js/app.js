require('../index.pug');
require('es6-promise').polyfill();
const store = require('../js/store.js');
const router = require('../js/router.js');
const App = require('../vue/App.vue');

$(()=>{
	new Vue({
		el: '#app',
		store,
		router,
		render: h => h(App)
	})
});
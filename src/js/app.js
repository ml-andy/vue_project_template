require('../index.pug');
require('es6-promise').polyfill();
const store = require('../js/store.js');
const App = require('../vue/App.vue');

$(()=>{
	new Vue({
		el: '#app',
		store,
		render: h => h(App)
	})
});
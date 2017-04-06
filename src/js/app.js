require('../index.pug');
const store = require('../js/store.js');
const App = require('../vue/App.vue');

$(()=>{
	new Vue({
		el: '#app',
		store,
		render: h => h(App)
	})
});
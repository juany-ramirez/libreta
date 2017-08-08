// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Prestamo from './components/Prestamo.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.credentials = true;

const router = new VueRouter({
	routes: [//arreglo de objetos
		{//cada ruta es un objeto
			name: 'Login',
			path: '/login',
			component: Login
		},
		{//cada ruta es un objeto
			name: 'Home',
			path: '/',
			component: Home
		},
		{//cada ruta es un objeto
			name: 'Prestamo',
			path: '/prestamo',
			component: Prestamo
		}
	]
})
new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');

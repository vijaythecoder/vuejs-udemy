// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar
	}
]

const router = new VueRouter({
	routes : routes
})


new Vue({
	router
}).$mount('#app')

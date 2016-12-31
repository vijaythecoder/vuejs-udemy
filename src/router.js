import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		component: require('./App')
	}
]

export default new VueRouter({
	routes : routes
})

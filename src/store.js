import Vue from 'vue'
import Vuex from 'vuex'
import paginas from '../api/paginas.json'
import produtos from '../api/produtos.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		paginas,
		produtos,
	},
	getters:{
		imagesSrcBasePath(){ 
			return './img/'
		}
	},
	mutations: {
	},
	actions: {
	}
})
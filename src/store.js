import Vue from 'vue'
import Vuex from 'vuex'
import paginas from '../api/paginas.json'
import produtos from '../api/produtos.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		paginas,
		produtos
	},
	getters:{
		imagesSrcBasePath(){ 
			if(window.location.port == '8080' || window.location.port == '8081'){
				return 'http://localhost/bambuteca_imagens/' 
			}
			else{ return './img/'}
		}
	},
	mutations: {

	},
	actions: {

	}
})

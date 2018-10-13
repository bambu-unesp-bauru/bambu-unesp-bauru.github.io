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
			return './img/'
			// caso as imagens sejam hospedadas no butterCMS
			// if(window.location.port == '8080' || window.location.port == '8081'){
			// 	return 'https://cdn.buttercms.com/'
			// }
			// else{ return './img/'}
		}
	},
	mutations: {

	},
	actions: {

	}
})

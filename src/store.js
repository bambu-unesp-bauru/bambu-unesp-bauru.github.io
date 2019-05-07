import Vue from 'vue'
import Vuex from 'vuex'
import paginas from '../api/paginas.json'
import produtos from '../api/produtos.json'
import especies from '../api/especies.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		paginas,
		produtos,
		especies
	},
	getters:{
		imagesSrcBasePath () {  return 'https://s3-sa-east-1.amazonaws.com/bambu-bauru-unesp/' }
	}
})
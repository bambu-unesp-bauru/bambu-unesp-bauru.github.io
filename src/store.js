import Vue from 'vue'
import Vuex from 'vuex'
import paginas from '../api/paginas.json'
import produtos from '../api/produtos.json'
import { butter } from '@/buttercms'//api

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		paginas,
		produtos,
		buttercms: {
			fetching: false,
			home: undefined
		}
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
		fetchPage(state, pageName){
			this.state.buttercms.fetching = true
			butter.page.retrieve('*', pageName)
				.then((res) => {
					this.state.buttercms.home = res.data.data.fields
					this.state.buttercms.home.fetched = true
				}).catch((res) => {
					console.log(res)
				})
				.then(() => {
					this.state.buttercms.fetching = false
				})
		}
	}
})
import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

Vue.use(Router, nprogress)

const router =  new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior () {
		return { x: 0, y: 0 }
	},

	routes: [
		{
			path: '/',
			name: 'Projeto bambu',
			// component: Home
			component: () => import('./views/0_Home.vue')
		},
		{
			path: '/projetobambu',
			name: 'O que é o Projeto bambu?',
			component: () => import('./views/1_Projetobambu.vue')
		},
		{
			path: '/projetos',
			name: 'Projetos',
			component: () => import('./views/2_Projetos.vue')
		},
		{
			path: '/produtos',
			name: 'Produtos',
			component: () => import('./views/3_Produtos.vue')
		},
		{
			path: '/glossario',
			name: 'Glossário',
			component: () => import('./views/4_Glossario.vue')
		},
		{
			path: '/quem-somos',
			name: 'Quem somos',
			component: () => import('./views/5_Quemsomos.vue')
		},
		{
			path: '/publicacoes',
			name: 'Publicacoes',
			component: () => import('./views/6_Publicacoes.vue')
		},
		{
			path: '/pesquisas',
			name: 'Pesquisas',
			component: () => import('./views/7_Pesquisas.vue')
		},
		{
			path: '/contato',
			name: 'Contato',
			component: () => import('./views/8_Contato.vue')
		}
	],

})

router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// Start the route progress bar.
		nprogress.start()
	}
	next()
}),

router.afterEach(() => {
	nprogress.done()
})

export default router
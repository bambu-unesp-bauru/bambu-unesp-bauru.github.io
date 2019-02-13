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
			name: 'Projeto bambu', // 1
			component: () => import('./views/Home.vue')
		},
		{
			path: '/projetobambu',
			name: 'O que é o Projeto bambu?',
			component: () => import('./views/Projetobambu.vue')
		},

		{
			path: '/especies',
			name: 'Espécies de Bambu',
			component: () => import('./views/Especies.vue')
		},
		
		{
			path: '/extensao',
			name: 'Projetos de Extensão',
			component: () => import('./views/Extensao.vue')
		},
		{
			path: '/produtos',
			name: 'Produtos',
			component: () => import('./views/Produtos.vue')
		},
		{
			path: '/publicacoes',
			name: 'Publicações',
			component: () => import('./views/Publicacoes.vue')
		},
		{
			path: '/videos',
			name: 'Vídeos',
			component: () => import('./views/Videos.vue')
		},
		{
			path: '/glossario',
			name: 'Glossário',
			component: () => import('./views/Glossario.vue')
		},
		{
			path: '/quem-somos',
			name: 'Quem somos',
			component: () => import('./views/Quemsomos.vue')
		},
		{
			path: '/contato',
			name: 'Contato',
			component: () => import('./views/Contato.vue')
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
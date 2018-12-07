<template>
	<div class="home">
		<Hero :heroAtrr='heroAtrr'></Hero>
		<TheContent>
			<section>
				<div class="theContent" ref="homeContent"></div>
				<div class="autor">
					<img :src="autor.retrato">
					<h4 class="post-autor">{{ autor.nome }}</h4>
				</div>
				<div>
				</div>
			</section>
		</TheContent>
		<NavBottom :routesDefs="routesDefs"></NavBottom>
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import TheContent from '@/components/TheContent.vue'
import Gallery from '@/components/Gallery.vue'
import NavBottom from '@/components/NavBottom.vue'
import { pageviews } from '@/mixins/pageviews'

export default {
	name: 'home',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/projetobambu', 
					name:'O que é o projeto bambu?'
				},
				previous: {
					to: '',
					name: ''
				}
			},
			heroAtrr: {
				imageFullpath: undefined,
				quote: undefined
			},
			autor: {
				retrato: undefined,
				nome: undefined
			},
			textoPrincipal: undefined
		}
	},
	computed:{
		isFetching() { return this.$store.state.buttercms.fetching },
		pageData(){ return this.$store.state.buttercms.home },
		// autor(){ return this.imagesSrcBasePath + 'autores/' + 'marco-antonio-dos-reis-pereira.jpg' }
	},
	watch: {
		pageData(data){
			if(data.fetched === true){
				this.buildPage()
			}
		},
	},
	created(){ this.getPage() }, 
	updated(){
		const mainSection = this.$refs.homeContent
		mainSection.innerHTML = this.textoPrincipal
	},
	methods:{
		getPage() {
			this.$store.dispatch('fetchPage', 'home') 
		},
		buildPage(){
			this.heroAtrr.quote = this.pageData.subtitulo
			this.heroAtrr.imageFullpath = 'background-image: url('+ this.pageData.imagem_de_fundo + ')'
			this.autor.retrato = this.pageData.autor[0].retrato_do_autor
			this.autor.nome = this.pageData.autor[0].nome_completo
			this.textoPrincipal = this.pageData.texto_principal
		}
	}, 
	mixins:[ pageviews ],
	components:{
		Hero,
		TheContent,
		Gallery, 
		NavBottom
	}
}
</script>
<style lang="scss" scoped>
// @import '../assets/scss/content';

div.home{
	nav.bottom{
		height: 20vh;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr;
		a.nav-bottom {
			display: flex;
			align-items: center;
			padding: 1em;			
			background-color: rgb(210,210,210);
			color: white;
			font-size: 2em;
			text-decoration: none;
			.material-icons{
				font-size: 1.8em
			}
		}
		a.nav-bottom:hover{
			background-color: rgb(150,150,150);
		}
		.next{
			justify-content: flex-end;
		}
	}
}
</style>
<template>
	<div class="Especies">  <!-- 2 -->
		<HeroTitle></HeroTitle>
		<section class="especies-colecao">
			<div class="especie" v-for="(especie, index) in especies" :key="index">
				<h2>{{ especie["titulo"] }}</h2>
				<img v-if="especie.nome_foto" :src="imagePath(especie.nome_foto)" :alt="'Foto de ' + especie.titulo">
				<p><span>Moitas cultivadas:</span> {{ especie["moitas-cultivadas"] }}</p>
				<p class="origem"><span>Origem:</span> {{ especie["origem"] }}</p>
				<p class="descricao"><span>Descricao:</span> <br>{{ especie["descricao"] }}</p>
				<p class="usos"><span>Usos mais comuns:</span> <br>{{ especie["usos mais comuns"] }}</p>
			</div>
		</section>		
		<NavBottom :routesDefs="routesDefs"></NavBottom>
	</div>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue'
import TheContent from '@/components/TheContent.vue'
import Gallery from '@/components/Gallery.vue'
import NavBottom from '@/components/NavBottom.vue'
import { pageviews } from '@/mixins/pageviews'

export default {
	name: 'especies',
	data(){
		return{
			contentArray: false,
			routesDefs: {
				next: {
					to:'/extensao', // 4 
					name:'Projetos de extensão' 
				},
				previous: {
					to: '/projetobambu', // 2
					name: 'O que é o projeto bambu' // 2
				}
			}
		}
	},
	computed:{
		especies(){ return this.$store.state.especies }
	},
	methods:{
		imagePath(file){
			return this.imagesSrcBasePath + 'especies/' + file
		}
	},
	mixins:[ pageviews ],
	components:{
		HeroTitle,
		TheContent,
		Gallery, 
		NavBottom
	}
}
</script>
<style lang="scss" scoped>
div.Especies{
	.especies-colecao{
		max-width: 90%;
		margin: 2rem auto;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

		@media (max-width: 1000px) {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}

		@media (max-width: 450px) {
			grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
		}

		display: grid;
		grid-gap: 2rem;
		.especie{
			max-width: 600px;
			background: #f2f2f2;
			padding: 1.5rem 2rem;
			line-height: 1.52;
			-webkit-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
			-moz-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
			box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
			img{ max-width: 100% };
			h2 {
				font-size: x-large;
				margin-bottom: .5em;
			}
			p.origem { padding-bottom: .5rem }

			p.descricao, p.usos{ 
				padding: .5rem 0;
				border-top: 1px solid grey
			}
			p > span {  font-size: small}

		}
	}
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
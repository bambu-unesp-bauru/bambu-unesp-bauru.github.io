<template>
	<div class="produtos">
		<HeroTitle></HeroTitle>	
		<div class="busca">
			<VueFuse
				placeholder="Busque por nome"
				event-name="results"
				:list="produtos"
				:keys="keyBind"
				:shouldSort="true"
			/>
		<select v-model="searchSelected">
			<option v-for="(searchKey, index) in searchOptions" :key="index">{{searchKey}}</option>
		</select>
		</div>
		<section class="bambuteca">
			<ul class="produtos-colecao">
				<li class="produto-item" v-for="produto in results" :key="produto.nome">
					<ul class="produtos-info">
						<!-- <li v-show="produtoClicked">ID {{ produto.registro }}</li> -->
						<li>{{ produto.nome }}</li>
						<li v-show="produtoClicked"><strong>Materiais: </strong>{{ produto.materiais }}</li>
						<li v-show="produtoClicked"><strong>Espécie: </strong>{{ produto.especie }}</li>
						<li v-show="produtoClicked"><strong>Técnica: </strong>{{ produto.tecnica }}</li>
						<li v-show="produtoClicked"><strong>Dimensão, lagura, profundiade: </strong>{{ produto.dim_alt_larg_prof }}</li>
						<li v-show="produtoClicked"><strong>Descrição física: </strong>{{ produto.descricao_fisica }}</li>
						<li v-show="produtoClicked"><strong>Autor: </strong>{{ produto.autor }}</li>
						<li v-show="produtoClicked"><strong>Origem: </strong>{{ produto.origem }}</li>
						<li v-show="produtoClicked"><strong>Data: </strong>{{ produto.data }}</li>
						<li v-show="produtoClicked"><strong>Produção: </strong>{{ produto.producao }}</li>
						<li v-show="produtoClicked"><strong>Função: </strong>{{ produto.funcao }}</li>
						<li v-show="produtoClicked"><strong>Dados patrimoniais: </strong>{{ produto.dados_patrimoniais }}</li>
						<li v-show="produtoClicked"><strong>Autores (compilação): </strong>{{ produto.compilacao_autores }}</li>
						<li v-show="produtoClicked"><strong>Data (compilação): </strong>{{ produto.compilacao_data }}</li>
					</ul>
					<ul class="produtos-imagens">
						<template v-for="(imagem,index) in produto.imagens">
							<li v-if="imageType(imagem, 'th')"  :key="index">
								<a :href="imagePath(imagem.replace('th.jpg','fl.jpg'))"><img class="product-image-item" :src="imagePath(imagem)"></a>
							</li>
						</template>
					</ul>
				</li>
			</ul>
		</section>
		<NavBottom :routesDefs="routesDefs"></NavBottom>
	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import { pageviews } from '@/mixins/pageviews'
import NavBottom from '@/components/NavBottom.vue'
import VueFuse from '@/components/VueFuse.vue'
import HeroTitle from '@/components/HeroTitle.vue'

export default{
	name:'produtos',
	components:{
		TheContent,
		NavBottom,
		VueFuse,
		HeroTitle
	},
	data(){
		return{
			results: [],
			searchSelected: 'nome',
			keyBind: ['nome'],
			produtoClicked: true,
			searchOptions: [
				"nome",
				"registro",
				"materiais",
				"especie",
				"tecnica",
				"dim_alt_larg_prof",
				"descricao_fisica",
				"autor",
				"origem",
				"data",
				"producao",
				"funcao",
				"dados_patrimoniais",
				"compilacao_autores",
				"compilacao_data"
			],

			routesDefs: {
				next: {
					to:'/publicacoes', 
					name:'Publicações'
				},
				previous: {
					to: '/extensao',
					name: 'Projetos de Extensão'
				}
			}
		}
	},
	watch:{
		searchSelected(before){
			let output = []
			output.push(before)
			this.keyBind = output
		}, 
	}, 
	mixins:[ pageviews ],
	computed:{
		produtos(){ return this.$store.state.produtos }
	},
	created(){
		this.$on('results', results => { this.results = results})
	},
	methods:{
		imageType(nomeArquivo, tipo){
			return nomeArquivo.indexOf('_'+ tipo + '.jpg') !== -1 // true / false se tiver mesmo valor que substring
		},
		imagePath(imagem){
			return this.$store.getters.imagesSrcBasePath +'produtos/'+ imagem
		}		
	}
}
</script>
<style lang="scss" scoped>
div.produtos{
	div.busca, section{
		width: 90%;
		margin: auto
	}

	div.busca{
		margin: 1em auto;
		display:grid;
		grid-template-columns: 4fr 1fr;
		grid-gap: 1em;
		input{
			min-height: 45px;
			padding: .35em
		}
	}
	section.bambuteca{
		ul.produtos-colecao{
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			display: grid;
			grid-gap: 2rem;

			li.produto-item{
				cursor:pointer;
				display: flex;
				flex-flow: column;
				background: #f2f2f2;
				padding: 2rem;
				-webkit-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
				-moz-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
				box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.1);
				transition: box-shadow ease .5s;

				ul.produtos-info{
					li{
						padding: .25em 0
					}
					li:first-child{
						font-size: 1.5em 
					}
				}
			}
			li.produto-item:hover{
				-webkit-box-shadow: 11px 10px 9px -10px rgba(0,0,0,0.63);
				-moz-box-shadow: 11px 10px 9px -10px rgba(0,0,0,0.63);
				box-shadow: 11px 10px 9px -10px rgba(0,0,0,0.63);
			}
			ul.produtos-imagens{
				li{
					margin-top:1rem; 
					img.product-image-item{
						max-width: 100%;
					}
				}
			}
		}
	}
}
</style>
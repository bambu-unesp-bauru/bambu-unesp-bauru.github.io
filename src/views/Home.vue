<template>
	<div class="home">  <!-- 1 -->
		<!-- <div v-for="(post, index) in contents" :key="index"> -->
			<!-- <p>{{ post.data["-LTQDZgQRBJIr-__SBFs"]["Autor - imagem"] }}</p> -->
			<!-- <p>{{ post.data[".key"]["Autor - imagem"] }}</p> -->
			<!-- {{ richTextItems(post.data["-LTQDZgQRBJIr-__SBFs"]["Conteúdo"]) }} -->

		<Hero :heroAtrr='heroAtrr'></Hero>
		<TheContent>
			<section ref="home">
				<!-- {{ post.data["-LTQDZgQRBJIr-__SBFs"]["Conteúdo"] }} -->
				<p>O Laboratório de Experimentação com Bambu da Unesp – Bauru é um programa de investigação sobre o bambu e suas aplicações, processado e in natura. Integrado ao Projeto Bambu, por meio do ensino e prática, os alunos de graduação e pós graduação dos cursos de Design, Artes, Arquitetura e Engenharia da Unesp - Bauru realizam atividades em campo, desenvolvem projetos e produtos, e promovem a divulgação da cultura do bambu. Esta plataforma reúne um banco de dados e imagens com produtos desenvolvidos por alunos e pesquisadores. Em constante atividade, as informações são atualizadas por novos ingressantes do programa. </p>

				<h3>Porque o bambu?</h3>
				<aside class="quote">
				<span>Porque é</span><br>
				barato e auto-renovável,<br>
				leve e forte,<br>
				estético e tropical,<br>
				resistente e energético.<br>
				</aside>
				<p>Porque possui excelentes características biológicas, físicas, químicas e mecânicas que o habilitam a ser utilizado em numerosas aplicações práticas.</p>
				<p>A literatura nos mostra mais de 1,000 diferentes usos para o bambu, desde o consumo como alimento, através de seu nutritivo broto, até seu emprego na construção de casas, móveis, instrumentos musicais, artesanato, ferramentas e utensílios diversos entre muitos outros.</p>
				<p>Algumas aplicações industriais do bambu tem sido atualmente objeto de pesquisas e desenvolvimento prático, destacando as possibilidades de exploração na Agroindústria.</p>
				<ul>
					<li>Polpa e celulose para papel</li>
					<li>Mobiliário</li>
					<li>Artesanato</li>
					<li>Pisos e cabos de ferramentas de bambu laminado colado</li>
					<li>Habitação popular</li>
					<li>Brotos (responsável por U$ bilhões/ano de exportação na China)</li>
				</ul>
				<p>Na área social existe a possibilidade do emprego de mão de obra das cidades e entorno, favorecendo a fixação do homem no campo, evitando o exodo rural e possibilitando ainda a geração de renda.</p>
				<p>Na área ambiental, o bambu é considerado o “amigo da natureza” uma vez que é um grande protetor do solo devido ao seu vigoroso sistema radicular; é um rápido sequestrador e armazenador de carbono; fornece alimento e abrigo para a vida selvagem; é um recurso perene, renovável e de crescimento muito rápido (6 meses entre o nascimento do broto e a altura final do colmo, que pode atingir até 30 metros em algumas espécies gigantes) e ainda pode ser utilizado em milhares de aplicações. Tudo isto, utilizando-se apenas da energia do sol como alimento (fotossíntese).</p>
				<p>A falta de informação,  faz o bambu ser esquecido e desconhecido entre nós, porém é referenciado até como divindade entre os orientais, tendo acompanhado a história do homem desde tempos imemoriais.</p>
				<p>Existem no mundo cerca de 1.300 espécies de bambu, sendo a maioria delas espécies tropicais que se adaptam muito bem às nossas condições, como tem sido observado em pesquisas conduzidas para a introdução de espécies prioritárias na Área Experimental Agrícola do Departamento de Engenharia Mecânica da Unesp/Campus de Bauru. Onde também, no Laboratório de Processamento de Materiais, estão sendo desenvolvidas pesquisas com “bambu laminado colado e sarrafeado”, o que inclui aplicações em pisos, forros, paredes, cabos de ferramentas, vigas e vigotas para construção.</p>
				
				<div class="autor">
					<img :src="autor">
					<h4 class="post-autor">Marco Antônio dos Reis Pereira</h4>
				</div>
			</section>
		</TheContent>
		<!-- </div> -->

		<NavBottom :routesDefs="routesDefs"></NavBottom>
	</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import TheContent from '@/components/TheContent.vue'
import Gallery from '@/components/Gallery.vue'
import NavBottom from '@/components/NavBottom.vue'
import { pageviews } from '@/mixins/pageviews'
// import { db } from '@/firebase'

export default {
	name: 'home',
	data(){
		return{
			contentArray: false,
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
				quote: 'Laboratório de Experimentação com Bambu da UNESP - Bauru'
			}
		}
	},
	// firebase:{
	// 	contents: {
	// 		source: db.ref('contents'),
	// 	}
	// },
	methods:{
		richTextItems(htmlString){ 
			let doc = new DOMParser().parseFromString(htmlString, 'text/html').body.childNodes
			console.log(doc)
			this.contentArray = Array.from(doc)
		}
	},
	computed:{
		autor(){ return this.imagesSrcBasePath + 'autores/' + 'marco-antonio-dos-reis-pereira.jpg' }
	},
	created(){
			this.heroAtrr.imageFullpath = 'background-image: url("' + this.imagesSrcBasePath + 'home/' +this.pageImages[0]+'")'
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
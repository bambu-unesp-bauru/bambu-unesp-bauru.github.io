<template>
	<div class="projetobambu">
		<Hero :heroAtrr='heroAtrr'></Hero>

		<div class="gallery">
			<figure v-for="(img, index) in pageImages.laboratorio" :key="index">
				<a :href="imageSrc(img, 'projeto_bambu_laboratorio/')"><img :src="imageSrc(img, 'projeto_bambu_laboratorio/')"></a>
			</figure>
		</div>

		<TheContent>
			<section class="projetobambu">
				<p>O Projeto Bambu foi concebido pelo Prof. Dr. Marco Antônio dos Reis Pereira em 1990 e continua em atividade sob sua orientação o Laboratório de Experimentação com Bambu da Unesp - Bauru.   Por meio do ensino e da pesquisa, os alunos de graduação realizam atividades em campo e promovem a divulgação da cultura do bambu.  O Projeto Bambu desenvolve projetos de pós-graduação no curso de Design/FAAC/Unesp – Bauru na orientação de alunos e na disciplina Design e Construção com Bambu. Formação e capacitação de alunos dos cursos de Design, de Arquitetura, de Artes e de Engenharia criou-se o Grupo Taquara.</p>
				<p>O Laboratório de Experimentação com Bambu oferece infraestrutura para pesquisas com bambu processado e in natura, incluindo equipamentos, matéria prima, maquinários e orientação técnica. Os estudos em laboratório apresentam dados sobre as características físicas e de resistência mecânica do bambu, importantes para a avaliação da qualidade do material e seu potencial tecnológico, visando posterior suas aplicações.</p>
				<p>O laboratório inclui a marcenaria, onde produtos diversos são propostos e desenvolvidos pelos alunos, chegando até os laminados colados, utilizados em pisos, painéis, cabos de ferramentas agrícolas e elementos para a construção civil, rural e moveleira.</p>
				<p>O Projeto Bambu também conta com plantação própria desde o ano de 1998 produzindo colmos em área agrícola de 1,5 hectares- Área Experimental Agrícola do Departamento de Engenharia Mecânica da Unesp/Bauru – a 3 quilômetros de distância do Laboratório. Esta área destina-se ao cultivo e estudo de 30 espécies entre 12 prioritárias de bambu, seguindo orientação fornecida pelo INBAR (Internacional Network for Bamboo and Rattan, 1995). Os dados de campo relativos ao desenvolvimento e produção de colmos subsidiam o acompanhamento da adaptação e desenvolvimento da cultura.</p>
				<p>No mesmo local de cultivo, realiza-se a pesquisa e o tratamento preservativo dos colmos de bambu para assegurar maior durabilidade do material em suas diversas formas por meio de métodos tradicionais e químicos. O projeto Bambu abrange o desenvolvimento de projetos, capacitação, estruturas, instalações, cultivo de espécies e produtos artesanais e processados. Os alunos são capacitados na cadeia produtiva do bambu, conjuntamente com os agricultores da comunidade do Assentamento Horto de Aimorés em Bauru.</p> 
			</section>

			<section class="projetobambu">
				<h3>Prêmios</h3>
				<ul>
					<li>2015 Prêmio Tecnologia Social da Fundação Banco do Brasil, Fundação Banco do Brasil.</li>
					<li>2013 Prêmio Fundação Banco do Brasil de Tecnologia Social, Fundação Banco do Brasil.</li>
					<li>2012 Prêmio Instituto 3M, Instituto 3M.</li>
					<li>2012 Melhores trabalhos, II Forum de Extensão Universitária do campus da Unesp de Bauru.</li>
					<li>2012 1º Lugar Trabalho, II Simpósio Internacional de Meio Ambiente e Desenvolvimento Sustentável da Unesp.</li>
					<li>2011 Prêmio Santander- Unisol, Universidade Solidária-Unisol.</li>
					<li>2010 Prêmio Santander- Unisol, Universidade Solidária-Unisol.</li>
					<li>2009 Prêmio Proext-Mec-Sesu, Ministério da Educação e Cultura - MEC.</li>
					<li>2008 Prêmio Odebrecht Contribuições da Engenharia para o Desenvolvimento Sustentável, Construtora Norberto Odebrecht.</li>
				</ul>
			</section>

			<section class="projetobambu">			
				<h3>Objetivos</h3>
				<p>O principal objetivo do Projeto Bambu é propagar o conhecimento e a cultura do bambu, introdução e plantio de espécies, manejo e produção de colmos, caracterização físico-mecânica-hidráulica de espécies, processamento de chapas de bambu laminado colado, desenvolvimento de produtos artesanais processados e estruturas leves, e atividades de formação,  bem como garantir a continuidade das ações ligadas à formação e qualificação dos envolvidos na cadeia produtiva do bambu para pesquisas e divulgação.</p>
			</section>
		</TheContent>

		<Gallery>
			<figure v-for="(img, index) in pageImages.areaAgricola" :key="index">
				<a :href="imageSrc(img, 'projeto_bambu_area_agricola/')"><img :src="imageSrc(img, 'projeto_bambu_area_agricola/')"></a>
			</figure>
		</Gallery>

		<NavBottom :routesDefs="routesDefs"></NavBottom>

	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import { pageviews } from '@/mixins/pageviews'
import Gallery from '@/components/Gallery.vue'
import NavBottom from '@/components/NavBottom.vue'
import Hero from '@/components/Hero.vue'

export default{
	name:'Projetobambu',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/projetos', 
					name:'Projetos'
				},
				previous: {
					to: '/',
					name: 'Home'
				}
			},
			heroAtrr: {
				imageFullpath: "background-image: url(\"./img/taquara/4_taquara_processo_seletivo_3.jpg\")",
				quote: ''
			}
		}
	},
	mixins: [pageviews],
	components:{
		Hero,
		TheContent,
		NavBottom,
		Gallery
	}
}
</script>
<style lang="scss" scoped>
</style>
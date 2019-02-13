<template>
	<div class="Extensao">
		<HeroTitle></HeroTitle>
		<Gallery gall_dir="taquara/"></Gallery>

		<TheContent>

			<section>
			<h3>Projeto de extensão Taquara</h3>

			<p>O Projeto Taquara é uma equipe permanente, contínua e multidisciplinar, formada em 2009 por alunos de diversos cursos, como Design, Arquitetura, Relações Públicas e Engenharia e está inserida no Projeto Bambu. O projeto tem contribuído para a formação complementar e diversificada do aluno, desenvolvimento pessoal, trabalho em grupo, participação em atividades como cursos e capacitação, editais, eventos, desenvolvimento de produtos e estruturas atuação junto à comunidade e junto a alunos da Unesp e de fora. Pelo projeto Taquara já passaram mais de 80 alunos dos diversos cursos e anualmente entre 10 e 15 novos alunos ingressam no projeto por meio de processo seletivo, passando necessariamente pelo processo de capacitação. O critério para seleção parte do interesse no bambu, do espírito voluntário e do trabalho em equipe dos candidatos. Com caráter multidisciplinar o projeto tem sido uma ótima oportunidade de participação e desenvolvimento dos alunos. Além da troca e transferência de conhecimento no ambiente acadêmico, este grupo atua em atividades de extensão com comunidades rurais e urbanas com objetivo de inserção social.  Novas escolas e comunidades são incorporadas no início de cada ano e apenas na medida que o contato se estabelece e as atividades se desenvolvem uma interação dialógica e uma ação transformadora é instaurada. Para o projeto 2017, por exemplo, as comunidades do Jardim Nicéia, Jardim Europa, EE. Doutor Zuianni, Acop PET Bela Vista, EE. Eduardo Velho Filho e Assentamento Rural Horto de Aimorés foram contatadas. Outras como APAE, Sorri e uma entidade de idosos estão em processo. O projeto vai ainda fomentar a participação coletiva e o planejamento em grupo para ampliação dos projetos com parceria na área de Educação. Além do desenvolvimento de projetos sociais junto Associação Agroecológica Viverde do Assentamento Rural Horto de Aimorés desde 2010.</p>
			<p>O projeto funciona no Laboratório de Experimentação com Bambu na Unesp e os contatos podem ser efetuados pelo telefone (14) 3103-6120 ramal 6844 ou pelo e-mail <a href="mailto:bambutaquara@gmail.com?Subject=bambutaquara">bambutaquara@gmail.com</a></p>
			<p>Acessando a página no facebook é possível conhecer o trabalho do grupo: <a href="https://facebook.com/bambutaquara">facebook.com/bambutaquara</a></p>
			</section>		

			<div class="gallery">
				<figure v-for="(img, index) in pageImages.taquara" :key="index">
					<a :href="imageSrc(img, 'taquara/')"><img :src="imageSrc(img, 'taquara/')"></a>
				</figure>
			</div>

			<section>
			<h3>Projeto de extensão com o Assentamento Rural  Horto de Aimorés</h3>
			<img :src="imageSrc('catalogo.jpg', 'extensao/')" alt="Imagem de publicação do do Assentamento Rural Horto de Aimorés">
			<p>O Projeto de extensão é desenvolvido desde o ano 2008 com a comunidade do Assentamento Rural Horto de Aimorés, localizado em Bauru a 15 Km da Unesp. Neste local, cerca de 350 famílias foram assentadas pelo INCRA desde o ano 2007, e além do trabalho com a terra, vem buscando alternativas de sustentabilidade, fixação no campo e geração de renda. Este projeto prevê um conjunto de atividades de capacitação, desenvolvimento e extensão, pautadas em estudos na área da sustentabilidade e do design em continuidade às ações já iniciadas no Projeto Bambu. Primeiramente, foram doadas 60 mudas para plantio comunitário na área do assentamento rural.  Por meio de parcerias, premiações e editais, como o 12° Concurso Banco Santander-Real Unisol (Universidade Solidária) do Ministério da Educação e Cultura (Proext–MEC 2010), aquisição de bolsas para alunos e trabalho de voluntariado, o Projeto Bambu recebeu recursos para desenvolvimento de extensão. Por um longo período, sempre semanalmente, foram realizados encontros e oficinas práticas na UNESP/Laboratório de Experimentação com Bambu onde a capacitação adquirida foi estendida aos agricultores das famílias do assentamento rural.</p> 
			<p>As atividades consistiram em capacitação técnica na cadeia produtiva do bambu: plantio, manejo, corte/colheita dos colmos, tratamento preventivo contra fungos e insetos, secagem, processamento para obtenção de ripas laminadas e confecção de produtos artesanais em bambu in natura e laminado colado (BLC). </p>
			<p>O objetivo do projeto de extensão é estimular a geração de renda com a produção artesanal.  Através da participação em feiras, mostras locais em Bauru, no Campus da Unesp e a comercialização de utensílios para o Projeto “Caras do Brasil” do grupo Pão de Açúcar, a Associação Agroecológica Viverde tem recebido reconhecimento e ampliada a sua renda. </p>
			<p>No ano de 2017 o projeto de extensão foi aprovado pelo edital de Voluntariado Banco do Brasil para aquisição das máquinas e equipamentos necessários à implantação da tecnologia do bambu laminado colado, como potencial de obtenção de maior valor agregado no produto.</p>
			<p>Os contatos para encomendas podem ser efetuados pelo telefone de José Maria Rodrigues (14) 99663-5763 ou Gabriel Cereja (14) 99173-8554.</p>
			</section>

			<div class="gallery">
				<figure v-for="(img, index) in pageImages.viverde" :key="index">
					<a :href="imageSrc(img, 'viverde/')"><img :src="imageSrc(img, 'viverde/')"></a>
				</figure>
			</div>

		</TheContent>
		<NavBottom :routesDefs="routesDefs"></NavBottom>

	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import Gallery from '@/components/Gallery.vue'
import NavBottom from '@/components/NavBottom.vue'
import HeroTitle from '@/components/HeroTitle.vue'
import { pageviews } from '@/mixins/pageviews'

export default{
	name:'Extensao',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/produtos', 
					name:'Produtos'
				},
				previous: {
					to: '/especies',
					name: 'Espécies de Bambu'
				}
			}
		}
	},
	mixins: [pageviews],
	components:{
		TheContent,
		Gallery,
		NavBottom,
		HeroTitle
	}
}
</script>
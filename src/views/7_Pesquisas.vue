<template>
	<div class="Pesquisas">
		<TheContent>
			<HeroTitle></HeroTitle>
			<section class="pesquisas">
				<h3>Dissertações e Teses:</h3>
					<p>BARELLI, Breno Giordano Pensa. Design para sustentabilidade: modelo de cadeia produtiva do bambu laminado colado (BLC) e seus produtos. 2009. 131 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2009. Disponível em: <a href="http://hdl.handle.net/11449/89698">http://hdl.handle.net/11449/89698</a>.</p>

					<p>RAMOS, Bruno Perazzelli Farias. Metodologia de curvatura de bambu laminado colado (BLAC) para fabricação de mobiliário: diretrizes para o design. 2014. 114 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: <a href="http://hdl.handle.net/11449/110862">http://hdl.handle.net/11449/110862</a>.</p>

					<p>VENTURA, Flavio Cardoso. Aplicabilidade da metodologia ecodesign à produção de calçados femininos. 2014. 91 f. Dissertação (mestrado) - Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2014. Disponível em: 	<a href="http://hdl.handle.net/11449/110861">http://hdl.handle.net/11449/110861</a>.</p>

					<p>PADOVAN, Roberval Bráz. O bambu na arquitetura: desing de conexões estruturais. 2010. 181 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2010. Disponível em: <a href="http://hdl.handle.net/11449/89702">http://hdl.handle.net/11449/89702</a>.</p>

					<p>SANTOS, Gabriel Fernandes dos. Design Participativo para a Sustentabilidade: desenvolvimento de painéis modulares para fechamentos, utilizando bambu associado com terra e resíduos. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/137816">https://repositorio.unesp.br/handle/11449/137816</a></p>

					<p>TAKAMITSU, Helen Tatiana. O uso de bambu e metal clay no design de jóias de arte. 2011. 156 f. Dissertação (mestrado) - Universidade Estadual Paulista, Faculdade de Arquitetura, Artes e Comunicação, 2011. Disponível em: <a href="http://hdl.handle.net/11449/89735">http://hdl.handle.net/11449/89735</a></p>

					<p>YAMADA, Thaís Regina Ueno. Estruturas flat foldable em bambu laminado colado baseadas em técnicas de dobra e corte do origami e do kirigami. Tese (doutorado)- Universidade Estadual Paulista Julio de Mesquita Filho, Faculdade de Arquitetura, Artes e Comunicação, 2016. Disponível em: <a href="https://repositorio.unesp.br/handle/11449/144520">https://repositorio.unesp.br/handle/11449/144520</a></p>
			</section>

			<section class="pesquisas">
				<h3>Pesquisa de Mestrado e Doutorado em andamento:</h3>
				<p>Flávio Cardoso Ventura. Pesquisa de doutorado: Diretrizes para o design de componentes em bambu para calçados femininos.</p>

				<p>Gabriel Fernandes do Santos. Pesquisa de doutorado: Design participativo para o bem-estar em comunidades carentes.</p>

				<p>João Victor Gomes. Pesquisa de mestrado: Produção e avaliação de prótese transtibial de baixo custo constituída por biocompósitos.</p>

				<p>Rodrigo Rocha. Pesquisa de mestrado: Bambu laminado termo-tratado: metodologias aplicáveis para a obtenção de novas tonalidades.</p>

				<p>Patrícia Nunes Telles. Pesquisa de mestrado: Design sustentável: materiais e processos inovadores. Compósitos em fibra de bambu e sua empregabilidade na fabricação de mobiliário. </p>

				<p>Silvia Sasaoka: Pesquisa de doutorado: Design, uma didática na qualificação técnica e estética do artesão de bambu.</p>
			</section>

			<section class="pesquisas">
				<h3>Tcc Trabalho de Conclusão de Curso</h3>
				<p>Eduardo Miguel Marques. Relatório final de projeto de extensão. Graduação Engenharia Civil e Ambiental Unesp Bauru. 2017.</p>

				<p>Livia Garcia Ferrari. Design sustentável com bambu (Projeto de geração de renda para o Assentamento Rural Horto de Aimorés). Graduação em Design. 2012. </p>

				<p>Mariana Lourenço. Relatório final: bambu e sustentabilidade: análise comparativa entre três processos de produção de mobiliário. Graduação Engenharia Mecânica Unesp Bauru. 2011. </p>

				<p>Pedro Alexandre Aniceto. Treliça espacial com peças-sistema de bambu in natura. Graduação em Arquitetura da FAAC Unesp Bauru. 2017. </p>

				<p>Rodrigo Domingos Borges. Determinação da densidade aparente ao longo do internó, em três diferentes alturas do colmo. Graduação Engenharia Mecânica Unesp Bauru.</p>
			</section>
			
		</TheContent>
		<NavBottom :routesDefs="routesDefs"></NavBottom>

	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import NavBottom from '@/components/NavBottom.vue'
import HeroTitle from '@/components/HeroTitle.vue'

export default{
	name:'Pesquisas',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/contato', 
					name:'Contato'
				},
				previous: {
					to: '/publicacoes',
					name: 'Publicações'
				}
			}
		}
	},
	components:{
		TheContent,
		NavBottom,
		HeroTitle
	}
}
</script>
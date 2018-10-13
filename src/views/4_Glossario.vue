<template>
	<div class="Glossario">
		<TheContent>

			<HeroTitle></HeroTitle>

			<section class="glossario">
				<h3>A planta bambu</h3>
				<ul>
					<li><strong>colmo</strong> parte ligeiramente cilíndrica do bambu (em algumas espécies é quadrado e em muito poucas é maciço), dispõe de uma sequência de internós ocos, separados transversalmente uns dos outros por diafragmas (septos), que aparecem externamente como nós.</li>

					<!-- <li><strong>cavidade</strong> parte vazia e interna do colmo.</li> -->

					<li><strong>diafragma</strong> feixe tendinoso localizado no interior do colmo, é a parte resistente de maior rigidez dos colmos, separa transversalmente as cavidades internas.</li>

					<li><strong>nó</strong> elemento visível externamente ao colmo e alinhado à região do diafragma, dos nós se originam as folhas e ramos.</li>
					<li><strong>ramo</strong> são os “galhos” do colmo. É a parte do bambu composta por gema, galho, folhas e flores. Utilizado para confecção de mudas de forma semelhante à estaquia em outros vegetais.</li>
					<li><strong>gema</strong> parte inicial do ramo, pequeno bulbo que conecta o galho ao colmo, cada gema dormente pode evoluir para um rizoma, para um colmo ou para um galho.</li>
					<li><strong>internó</strong> (ou entrenó) parte do colmo compreendida entre dois nós.</li>
					<li><strong>parede</strong> relativo a espessura do colmo, sua parte sólida. É composta pelos vasos, parênquimas, fibras e “casca”.</li>
					<li><strong>rizoma</strong> caule subterrâneo onde se armazenam nutrientes para o desenvolvimento do bambu. Comporta-se de forma diferente em espécies entouceirantes e alastrantes.</li>
				</ul>
			</section>
			
			<section class="glossario">
				<h3>O material</h3>
				<p>O material feito com o bambu abrange diversos tipos de cortes que geram peças e componentes utilizados na produção de uma grande diversidade de objetos.</p>
				<ul>
					<li><strong>bambu</strong> <i> in natura</i> ou em sua forma natural roliça. É processamento primário do material sem a retirada da casca, parênquima ou do nó.</li>
				</ul>
				
			</section>

			<section>
				<h3>Corte ou formato de peças do bambu</h3>
				<ul>
					<li><strong>ripas de bambu in natura</strong> material gerado por cortes longitudinais dos colmos, com ou sem a casca e parênquima, aparelhada ou não.</li>
					<li><strong>ripa</strong> laminada ripa sem casca e sem parênquima e com suas 4 faces aparelhadas*. Seu formato é gerado por cortes para uso em bambu laminado colado (BLaC).</li>
					<li><strong>ripa aparelhada</strong> desbastada em esquadro.</li>
				</ul>
				
			</section>
			
			<section class="glossario">
				<h3>Chapa, placa ou painel de bambu</h3>
				<ul>
					<li><strong>chapa, placa</strong> e <strong>painel de bambu in <i>natura</i></strong> formada por ripas de bambu in natura trançadas e/ou coladas umas às outras, lateralmente de modo que as fibras sejam paralelas ao comprimento da peça.</li>
					<li><strong>chapas</strong> ou <strong>placas de Bambu Laminado Colado</strong> ou <strong>BLaC</strong> composto por ripas laminadas coladas paralelamente umas às outras lateralmente, e também por aquelas coladas em camadas, umas sobre as outras. </li>
					<li><strong>BLaC</strong> ou <strong>Bambu Laminado Colado</strong> composto por lâminas coladas umas às outras paralelamente ou lateralmente; superfície manufaturada a partir de uma sobreposição de uma ou mais camadas de modo que as fibras de todas sejam paralelas ao comprimento da peça. Este processo é realizado em maquinário do Laboratório de Experimentação com Bambu (refiladora dupla, serra circular de bancada, serra plaina de duas faces, colagem e prensagem das ripas em maquinário específico e plaina desengrossadeira). </li>
					<li><strong>chapa de partículas</strong> de bambu são chapas ou placas de partículas de bambu prensadas à base de resinas orgânicas de origem vegetal e inorgânicas. Este processo é realizado em maquinário do Laboratório de Experimentação com Bambu (coleta de resíduos obtido na produção de BLaC, picagem dos resíduos, peneiramento em malhas com aberturas diversas, mistura do resíduo selecionado com resina, prensagem em prensa hidráulica e lixamento manual).</li>
				</ul>
			</section>

			<section class="glossario">			
			<h3>Componentes</h3>
			<ul>
				<li>treliças superfície manufaturada e entramada por fibras, tiras ou ripas de bambu.</li>
				<li>Eesteira de bambu in natura superfície manufaturada por fibras ou tiras de bambu em natura tecidos ou entramados que serve para revestimento de chão ou vedação.</li>
				<li>esteira de BLaC  superfície manufaturada a partir de composições com lâminas ou peças encaixadas e coladas.</li>
				<li>painel composto superfície manufaturada a partir da bricolagem com segmentos de colmos, cortados transversalmente, polidos e montados de forma concêntrica colados com adesivo PVA. É usado como revestimento. </li>
				<li>bambu processado bambu com suas propriedades naturais modificadas a fim de adaptá-lo, principalmente forma, a determinado uso. </li>
				<li>bambu industrializado bambu transformado por processos de alta complexidade inviáveis de forma manual. </li>
			</ul>
			</section>
			
			<section class="glossario">
				<h3>Acabamentos</h3>
				<ul>
					<li>cavilha de bambu peça utilizada como elemento de junção entre peças maiores por meio de pressão.</li>
					<li>ligação aparafusada ligação entre peças realizada por meio de rosca. Geralmente feita com parafusos, barras roscadas, porcas e arruelas.</li>
				</ul>
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
	name:'Glossario',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/quem-somos', 
					name:'Quem somos'

				},
				previous: {
					to:'/produtos', 
					name:'Produtos'
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
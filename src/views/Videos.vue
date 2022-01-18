<template>
	<div class="Videos">
		<TheContent>

			<HeroTitle></HeroTitle>

			<section>
				<h3>Unesp Notícias</h3>
				<p>Estruturas de origami.</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/fPrxQ20C85M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<h3>Unesp Notícias</h3>
				<p>Bambu Taquara.</p>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/5zL2_IrZtJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<h3>Técnica Rural</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/OE4J1L77QP0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<h3>Reportagem Canal Rural</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/VW-dFgpqQ7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<h3>Festival de Lanternas de Bambu -Unesp Bauru e Take Akari</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/JMwrtkWyuA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<h3>Intercâmbio Japão-Brasil – Bambu: a revitalização de uma comunidade</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/3A20J2XYgcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section>
				<h3>Oficina de Bambu</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/DQ15NWfC-nI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section>
				<h3>Retrospectiva Taquara 2016</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/3yXCm0i5RJI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section>
				<h3>Time Lapse TaquaTubo</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/iNRahUTXWDA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section>
				<h3>Visita da E.E. Dr. Luiz Zuiani</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/qJpZREzJVzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section>
				<h3>Projeto Bambu Unesp</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/7yY3hrHyYAk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>

			<section>
				<p>Conheça o <a href="https://www.youtube.com/channel/UC69BS0mXwPyoE4l4wuLKtgw">canal no youtube.</a></p>
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
	name:'Videos',
	data(){
		return{
			routesDefs: {
				next: {
					to:'/glossario', 
					name:'Glossário'

				},
				previous: {
					to:'/publicacoes', 
					name:'Publicações'
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

<style lang="scss">
.youtube-frame{
	max-width: 700px
}
</style>
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
				<h3>Reportagem Globo Rural</h3>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/cdIJoLSsEhg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<template>
	<div class="Contato">
		<TheContent>
			<HeroTitle></HeroTitle>
			<section class="contato">
				<p>Universidade Estadual Paulista "Júlio de Mesquita Filho" Campus de Bauru Faculdade de Engenharia</p>

				<p>Departamento de Engenharia Mecânica</p>
				<p>
					Av. Eng. Luiz Edmundo C. Coube, s/n<br>
					CEP 17033-360 Bauru São Paulo Brasil<br>
				</p>
				<p>Fale por e-mail com: Prof. Dr. Marco A. dos Reis Pereira:<br>
					<a href="mailto:marco-antonio.pereira@unesp.br?Subject=Projeto%20Bambu" target="_top">marco-antonio.pereira@unesp.br</a>
				</p>
			</section>
			
			<section class="contato">
				<p>Conheça a página do Grupo Taquara: <a href="https://www.facebook.com/bambutaquara">facebook.com/bambutaquara</a>.
				<br>
				Contato sobre o site: <a href="mailto:silvia.sasaoka@gmail.com?Subject=Projeto%20Bambu" target="_top">silvia.sasaoka@gmail.com</a></p>
			</section>

			<section>
				<h3>Laboratório de experimentação com bambu da UNESP - Bauru</h3>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29520.841874371432!2d-49.0468096!3d-22.349655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71530d4bf46a2e05!2sLaborat%C3%B3rios+de+oficina+mec%C3%A2nica+-+UNESP!5e0!3m2!1spt-BR!2sbr!4v1537051321654" class="gmaps" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
			</section>
		</TheContent>
		<NavBottom :routesDefs="routesDefs"></NavBottom>
	</div>
</template>

<script>
import TheContent from '@/components/TheContent.vue'
import HeroTitle from '@/components/HeroTitle.vue'
import NavBottom from '@/components/NavBottom.vue'

export default{
	name:'Contato',
	data(){
		return {
			routesDefs: {
				next: {
					to:'', 
					name:''
				},
				previous: {
					to: '/quem-somos',
					name: 'Quem somos'
				}
			}
		}
	},
	components:{
		TheContent,
		HeroTitle,
		NavBottom
	}
}
</script>

<style lang="scss" scoped>
div.Contato{
	.gmaps{
		width: 210%;
		column-span: all;
	}		
}

@media (max-width: 1071px) {
	div.Contato{
		.gmaps{
			width: 100%
		}		
	}
}
</style>
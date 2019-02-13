export const pageviews = {
	computed:{
		imagesSrcBasePath(){ return this.$store.getters.imagesSrcBasePath },
		pageImages(){
			let allPagesImages = this.$store.state.paginas
			switch(this.$route.path){
				case '/' : 	return allPagesImages.filter(index => index.home !== undefined)[0].home;
				case '/publicacoes' : return allPagesImages.filter(index => index.publicacoes !== undefined)[0].publicacoes;
				case '/glossario' : return allPagesImages.filter(index => index.glossario !== undefined)[0].glossario;
				case '/projetobambu' : 
					return {
						areaAgricola: allPagesImages.filter(index => index.projeto_bambu_area_agricola !== undefined)[0].projeto_bambu_area_agricola,
						laboratorio: allPagesImages.filter(index => index.projeto_bambu_laboratorio !== undefined)[0].projeto_bambu_laboratorio
					};
				case '/extensao' : 
					return {
						taquara: allPagesImages.filter(index => index.taquara !== undefined)[0].taquara,
						viverde: allPagesImages.filter(index => index.viverde !== undefined)[0].viverde
					};
				case '/quem-somos': return allPagesImages.filter(index => index.quem_somos !== undefined)[0].quem_somos;
			}
		},

		routeName(){ return this.$route.path }
	},
	methods:{
		imageSrc(image, folder){ return this.imagesSrcBasePath + folder + image }
	}
}
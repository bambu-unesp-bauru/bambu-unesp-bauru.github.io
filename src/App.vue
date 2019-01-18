<template>
	<div id="app">
		<Header></Header>
		<main><router-view/></main>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import api from  './api'

export default{
	name:"app", 
	components:{
		Header,
		Footer
	},
	mounted(){
		api.get('/.json')
			.then( res => console.log(res.data.contents) )
			.catch( error => console.log(error) )
	}
}
	
</script>

<style lang="scss">
@import 'reset-css';
@import '@/assets/nprogress.scss';
@import '@/assets/fonts.scss';
@import '@/assets/icons.scss';
</style>

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
// import { db } from './firebase';

export default{
	name:"app", 
	components:{
		Header,
		Footer
	},
	// firebase: {
	// 	users: {
	// 	// source: db.ref('contents'),
	// 	source: db.ref('contents'),

	// 	// Optional, allows you to handle any errors.
	// 	cancelCallback(err) {
	// 		console.error(err);
	// 	}
	// 	}
	// }
}
	
</script>

<style lang="scss">
@import 'reset-css';
@import '@/assets/nprogress.scss';
@import '@/assets/fonts.scss';
@import '@/assets/icons.scss';
</style>

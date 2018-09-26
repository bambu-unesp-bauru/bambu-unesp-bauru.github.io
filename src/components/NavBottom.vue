<template>

<nav class="bottom">
	<div v-if="isHome"></div>
	<router-link v-if="!isHome" :to="routesDefs.previous.to" tag="a" class="nav-bottom previous"><i class="material-icons">arrow_backward</i>{{ routesDefs.previous.name }}</router-link>
	<router-link :to="routesDefs.next.to" tag="a" class="nav-bottom next">{{ routesDefs.next.name }} <i class="material-icons">arrow_forward</i> </router-link>
</nav>

</template>

<script>
export default{
name:'navBottom',
computed:{
	isHome(){ return this.$route.path === '/' ? true : false }
}, 
props:{ 
		'routesDefs': {
			'previous': {
				'to': String,
				'name': String
			},
			'next': {
				'to': String,
				'name': String
			}
		}
	}
}

</script>

<style lang="scss">
nav.bottom{
	height: 20vh;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 1fr;
	grid-gap: .1em;
	a.nav-bottom {
		display: flex;
		align-items: center;
		padding: 1em;			
		background-color: rgb(210,210,210);
		color: white;
		font-size: 2em;
		text-decoration: none;
		transition: all ease .5s; 
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
		.material-icons{
			font-size: 1.8em
		}
	}
	a.nav-bottom:hover{
		background-color: rgb(150,150,150);
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
	}
	.next{
		justify-content: flex-end;
	}
	.previous{
		i{ max-width:57px  }
		justify-content: flex-start;
	}
}	
</style>
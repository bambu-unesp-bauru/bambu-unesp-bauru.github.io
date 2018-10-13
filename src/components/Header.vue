<template>
	<header class="page-header">
		<nav class="menu" :class="{ active: menu }">
			<ol v-show="menu">
				<li class="menu-item"><h1 v-show="menu" class="page-title"><router-link to="/">Projeto bambu</router-link></h1></li>
				<li class="menu-item"><router-link to="/projetobambu">O que é o Projeto Bambu</router-link></li>
				<li class="menu-item"><router-link to="/projetos">Projetos</router-link></li>
				<li class="menu-item"><router-link to="/produtos">Produtos</router-link></li>
				<li class="menu-item"><router-link to="/glossario">Glossário</router-link></li>
				<li class="menu-item"><router-link to="/quem-somos">Quem somos</router-link></li>
				<li class="menu-item"><router-link to="/publicacoes">Publicacoes</router-link></li>
				<li class="menu-item"><router-link to="/pesquisas">Pesquisas</router-link></li>
				<li class="menu-item"><router-link to="/contato">Contato</router-link></li>
			</ol>
			<button @click="menu = !menu"><i class="material-icons">{{ menuArrow }}</i></button>
		</nav>
		<div @click="menu = !menu" v-show="menu" class="background"></div>
    </header>
</template>
<script>
import { pageviews } from '@/mixins/pageviews'

export default{
	name:'Header',
	data(){
		return {
			menu: false,
			menuArrow: 'menu'
		}
	},
	watch: {
		menu(){ this.menu ? this.menuArrow = 'close' : this.menuArrow = 'menu' },
		$route(){ this.menu = false }
	},
	mixins: [ pageviews ]
}

</script>
<style lang="scss" scoped>
header.page-header{
	nav.menu.active{
		background-color: rgb(255,255,255);
		-webkit-box-shadow: 10px 0px 5px 0px rgba(0,0,0,0.25);
		-moz-box-shadow: 10px 0px 5px 0px rgba(0,0,0,0.25);
		box-shadow: 10px 0px 5px 0px rgba(0,0,0,0.25);
	}
	nav.menu{
		position: fixed;
		top:0;
		left: 0;
		height:100vh;
		line-height: 1.52em;
		padding-left: 0;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
		grid-gap: 1rem;
		transition: all ease .35s;
		z-index: 100;
		ol {
			margin:auto;
			li{ 
				line-height: 3em;
				a{
					color: black;
					text-decoration: none;
					padding-left: 1.25rem;
					font-size: 1.52em;
					transition: all ease .35s;
					border-left: 1em solid white;
				}
				a:hover{
					border-left: 1em solid black;
				}
				a.router-link-exact-active{
					border-left: 1em solid #7fa77f
				}
			}
		}
		button{
			cursor: pointer;
			border: 0;
			max-width: 40px;
			display: flex;
			color: white;
			background-color: #7fa77f;
			max-height: 40px;
			align-items: center;
			border: 1px white solid;
			margin: .5em;
			transition: all ease .35s;
		}
		button:hover{
			background-color: black;
		}
		button:active{
			background-color: #7fa77f;
		}
	}
	.background{
		cursor: pointer;
		position: fixed;
		background-color: rgba(255,255,255,.5);
		width: 100%;
		height: 100%;
		z-index: 10;
	}

}
@media (max-width: 700px) {
	header.page-header{
		nav.menu{
			ol{
				li{
					a{
						font-size:1em;
					}
				}
			}
		}
	}
}

</style>
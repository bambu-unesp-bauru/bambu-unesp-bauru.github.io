<template>
	<div class="Footer">
		<div class="instituicoes">
		<a href="https://www2.unesp.br/" ><div class="logo unesp"></div></a>
		<a href="http://www.faac.unesp.br/"><div class="logo faac"></div></a>
		<a href="http://www.feb.unesp.br/"><div class="logo feb"></div></a>
		<a href="http://www.faac.unesp.br/#!/pos-graduacao/"><div class="logo pos-bauru"></div></a>
		</div>
	</div>
</template>

<script>
export default{
	name:'Footer'
}

</script>
<style lang="scss" scoped>
.Footer{
	.instituicoes{
		display:flex;
		justify-content: space-between;
		margin: 3em 0;

		.logo{
			opacity: .15;
			background-image: url('../assets/img/logos.png');
			background-repeat: no-repeat;
			height: 88px;
			margin: 1em;
			transition: opacity .25s ease;
		}

		.logo:hover{
			opacity: 1;
		}

		.unesp{
			width: 267px;
			background-position: -42px;
		}

		.faac{
			width:93px;
			background-position: -300px;
		}

		.feb{
			width:279px;
			background-position: -437px;
		}

		.pos-bauru{
			width:150px;
			background-position: -750px;
		}
	}
}
@media (max-width: 1000px) {
	.Footer{
		.instituicoes{
			flex-direction: column;
			.logo{
				margin:2em auto;
				opacity:1
			}
			.unesp{ background-position: 10px }
		}
	}
}
</style>
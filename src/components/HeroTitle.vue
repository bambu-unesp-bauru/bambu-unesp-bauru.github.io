<template>
	<div class="HeroTitle">
		<div class="header">
			<h2 class="page-title">{{ this.$route.name }}</h2>
		</div>
	</div>
</template>

<script>
export default{
	name:'HeroTitle'
}
</script>

<style lang="scss" scoped>
div.HeroTitle{
	div.header{ 
		color: white;
		background-color: #7fa77f;
		h2{
			width: 90%;
			margin: auto;
			font-size: 5em;
			padding: 1em 0; 
		}
	}
}
@media (max-width: 700px) {
	div.HeroTitle{
		div.header{
			h2{
				font-size: 3em;
				text-align: center	
			}
		}
	}
}
</style>
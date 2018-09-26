<template>
	<div class="hero" :style="heroAtrr.imageFullpath">
		<div class="headline">
			<h2>{{ this.$route.name }}</h2>
			<p>{{this.heroAtrr.quote}}</p>
		</div>
	</div>
</template>
<script>

export default{
	name: 'Hero',
	props: {
		heroAtrr: {
			imageFullpath: {
				required: true,
				type: String
			},
			quote: {
				required: true,
				type: String
			}
		}
	},
}
</script>
<style lang="scss">
	div.hero{
		height: 100vh;
		background-size: cover;
		background-position: bottom; 
		display: flex;
		flex-direction: column;
		align-items: center;
		div.headline {
			margin: auto;
			color: white;
			text-shadow: 0px 1px 6px rgba(0, 0, 0, 0.6);
			display:flex;
			flex-direction: column;
			align-items:center;
			h2{
				font-size: 6em;
			}

			p{
				font-size: 2em;
				padding: 1em
			}
		}
	}
</style>
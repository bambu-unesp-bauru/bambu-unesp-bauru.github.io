<template>
	<div class="hero" :style="heroAtrr.imageFullpath">
		<div class="headline">
			<h2>{{ this.$route.name }}</h2>
			<p v-if="heroAtrr.quote != ''">{{ this.heroAtrr.quote }}</p>
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
	.hero{
		background: linear-gradient(#FFF, #096c42);
		height: 100vh;
		background-size: cover;
		background-position: bottom; 
		display: flex;
		flex-direction: column;
		align-items: center;

		.headline {
			margin:auto;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align:center;
			h2{
				font-size: 5em;
				text-shadow: 0px 1px 6px rgba(0, 0, 0, 0.6);
			}
			p{
				width: 100%;
				padding: .75em;
				margin-top: 1em;
				background-color: rgba(0,0,0,.75);
			}
		}
	}

@media (max-width: 700px) {
	.hero{
		.headline{
			padding:0 1em;
			h2{
				font-size: 4em;
			}
			p{
				line-height: 1.52;
			}
		}
	}
}
</style>
<template>
	<div class="gallery">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Gallery'
}
</script>

<style lang="scss">
div.gallery{
	max-width: 90%;
	margin: auto;
	margin-top: 1rem;
	columns: 300px;
	column-gap: 1.52rem;
	figure{
		margin-bottom: 1.52rem;
		img{
			width: 100%;
			background-color: #7fa77f;
		}
	}
}
</style>
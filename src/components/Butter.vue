<template>
	<div class="butter">
		<p>{{ msg }}</p>
	</div>
</template>
<script>
import Butter from 'buttercms';
export const butter = Butter(process.env.VUE_APP_BUTTER);

export default {
	name:'butter',
	data(){
		return {
			msg:process.env.VUE_APP_BUTTER
		}
	},
	mounted(){
		// console.log(process.env.VUE_APP_BUTTER)

		butter.post.list({page: 1, page_size: 10}).then(function(response) {
			console.log(response)
		})

	},
}
</script>
<style lang="scss">
div.butter{
	p{
		width: 100%;
		text-align: center
	}
}
</style>
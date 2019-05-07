<template>
	<div class="theContent">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TheContent'
}
</script>

<style lang="scss">
	div.theContent{
		section{	
			padding: 1.5em 0;
			max-width: 90%;
			margin: auto; 
			column-width: 300px;
			column-gap: 2em;
			column-rule: 1px solid #444;
			p{
				padding-bottom:1em;
				font-size: 1.1em;
				line-height: 1.52em;
				page-break-inside: avoid;
			}
			aside.quote{
				color:#7fa77f;
				font-style: italic;
				font-weight:bold;
				font-size: 2em;
				border-top: 5px solid #7fa77f;
				border-bottom: 5px solid #7fa77f;
				padding: .5em 0;
				margin: 1.5rem 0;
				line-height: 1.12;
			}

			h3	{
				font-weight: bold;
				font-size: 1.82em;
				line-height:1.25;
				margin-bottom: .5em;
				page-break-inside: avoid;
			}
			ul {
				padding-left:1em;
				page-break-inside: avoid;
				li{
					list-style-type: square;
					line-height: 1.52em;
				}
			}
			div.autor{
				display: flex;
				width: 300px;
				flex-direction: row;
				align-items: center;
				
				.post-autor{
					margin-left: 1em;

				}

				img{
					border-radius: 50%;
					-webkit-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.63);
					-moz-box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.63);
					box-shadow: 10px 10px 9px -10px rgba(0,0,0,0.63);
				}
			}
		}
	}
</style>
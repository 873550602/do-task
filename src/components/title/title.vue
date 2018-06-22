<template>
	<div class="title-box">
		<span class="text">{{textTitle}}</span>
	</div>
</template>

<script>
	export default {
		name: 'mytitle',
		props: {
			textTitle: String,
		},
	}
</script>

<style lang="less" scoped="scoped">
	.title-box {
		padding: 3px 15px;
		background: #c5cae9;
		.text {
			font-size: 1.0rem;
			color: #777;
		}
	}
</style>
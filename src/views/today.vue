<template>
	<div class="layout">
		today
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		name: 'inbox',
		methods: {
			...mapMutations([
				'setTopBarName',
			])
		},
		created() {
			this.setTopBarName('今天');
		}
	}
</script>

<style>

</style>
<template>
	<div class="layout">
		all
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
			this.setTopBarName('所有');
		}
	}
</script>

<style>

</style>
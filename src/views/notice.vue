<template>
	<mu-container class="layout">
		<mu-appbar color="primary">
			<mu-button icon slot="left" v-go-back>
				<mu-icon value="keyboard_backspace"></mu-icon>
			</mu-button>
			消息
		</mu-appbar>
		<my-nothing iconfont="icon-tongzhi" text-title="没有通知" subtext-title="在这里接收来自共享清单的消息" v-if="!notices || !notices.length"></my-nothing>
	</mu-container>
</template>


<script>
	import myNothing from '@/components/nothing'
	export default {
		data(){
			return {
				notices:[]
			}
		},
		components:{
			myNothing
		}
	}
</script>

<style>

</style>
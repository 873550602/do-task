<template>
	<div class="task-list-box">
		<my-title v-if="title" :text-title="title"></my-title>
		<mu-list>
			<mu-list-item button :class="{'complete':task.isFinish,'incomplete':!task.isFinish}" v-for="task in dataList" @touchmove="doTask($event)" >
				<mu-list-item-action>
					<i class="iconfont" :class="{'icon-wancheng':task.isFinish,'icon-weiwanchengrenwu':!task.isFinish}" @click="$emit('change_status',task)"></i>
				</mu-list-item-action>
				<mu-list-item-title>{{task.name}}</mu-list-item-title>
			</mu-list-item>
		</mu-list>
	</div>
</template>

<script>
	import myTitle from '@/components/title'
	export default {
		name: 'taskList',
		props: {
			dataList: Array,
			title: String
		},
		data(){
			return {
			}
		},
		methods:{
			doTask($event){
				console.log('xxxxxxxxxxxx')
				alert($event);
			}
		},
		components: {
			myTitle,
		}
	}
</script>

<style lang="less" scoped="scoped">
	.task-list-box {
		background: #fff;
		.incomplete {
			i,.mu-item-title{
				color: #555;
			}
			i.icon-weiwanchengrenwu {
				position: relative;
				font-size: 18px;
				z-index: 999;
			}
		}
		.complete {
			i,.mu-item-title{
				color: #ccc;
			}
			i.icon-wancheng {
				position: relative;
				font-size: 22px;
				z-index: 999;
			}
		}
	}
</style>
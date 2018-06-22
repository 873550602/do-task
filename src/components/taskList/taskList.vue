<template>
	<div class="task-list-box">
		<my-title v-if="title" :text-title="title"></my-title>
		<mu-list :class="{'complete':task.isFinish,'incomplete':!task.isFinish}" v-for="task in dataList">
			<mu-list-item button :ripple="false">
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
		components: {
			myTitle
		},
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
				font-size: 18px;
			}
		}
		.complete {
			i,.mu-item-title{
				color: #ccc;
			}
			i.icon-wancheng {
				font-size: 22px;
			}
		}
	}
</style>
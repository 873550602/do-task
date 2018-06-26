<template>
	<div class="layout">
		<my-nothing text-title="没有任务，放松一下" subtext-title="点击 + 按钮添加任务" iconfont="icon-inboxempty" v-if="showNothing"></my-nothing>
		<div v-if="!showNothing">
			<task-list :data-list="taskList" @change_status="changeStatus" slideIcon="done" successBgc="#1de9b6"></task-list>
			<task-list title="已完成" :dataList="finishTaskList" @change_status="changeStatus" slideIcon="clear" successBgc="#f44336"></task-list>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	import myNothing from '@/components/nothing'
	import TaskList from '@/components/taskList'
	export default {
		name: 'inbox',
		data(){
			return {
				showNothing:true,
				taskList:[{
					id:'1001',
					name:'学英语',
					isFinish:false
				},{
					id:'1002',
					name:'学做饭',
					isFinish:false
				},{
					id:'1003',
					name:'打球',
					isFinish:false
				}],
				finishTaskList:[{
					id:'1004',
					isFinish:true,
					name:'晨跑'
				}]
			}
		},
		methods: {
			changeStatus(task){
				task.isFinish = !task.isFinish;
				if(task.isFinish){
					this.taskList.remove(task);
					this.finishTaskList.add(task);
				}else{
					this.taskList.add(task);
					this.finishTaskList.remove(task);
				}
			},
			...mapMutations([
				'setTopBarName',
			])
		},
		components:{
			TaskList,
			myNothing
		},
		created() {
			this.setTopBarName('收集箱');
		}
	}
</script>

<style>

</style>
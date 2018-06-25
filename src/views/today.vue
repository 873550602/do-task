<template>
	<div class="layout">
		<task-list title="已过期" :data-list="goneTaskList" slideIcon="done" successBgc="#1de9b6" showDate></task-list>
		<task-list title="今天" :data-list="todayTaskList" slideIcon="done" successBgc="#1de9b6"></task-list>
		<task-list title="已完成" :data-list="finishTaskList" slide-icon="clear" success-bgc="#f44336"></task-list>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	import TaskList from '@/components/taskList'
	export default {
		name: 'today',
		data() {
			return {
				todayTaskList:[{
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
				goneTaskList:[{
					id:'1001',
					name:'爬山',
					date:'4月15日',
					isFinish:false
				},{
					id:'1002',
					name:'旅游',
					date:'4月30日',
					isFinish:false
				},{
					id:'1003',
					name:'看书',
					date:'6月20日',
					isFinish:false
				}],
				finishTaskList: [{
					id: '1004',
					isFinish: true,
					name: '晨跑'
				}]
			}
		},
		methods: {
			...mapMutations([
				'setTopBarName',
			])
		},
		components: {
			TaskList
		},
		created() {
			this.setTopBarName('今天');
		}
	}
</script>

<style>

</style>
<template>
	<div class="task-list-box" @touchmove.preventDefault="doTask($event)" @touchend="doneTask($event)" @touchstart="initTask($event)">
		<my-title v-if="title" :text-title="title"></my-title>
		<mu-list>
			<mu-list-item :data-key="task.id" button :ripple="false" :class="{'complete':task.isFinish,'incomplete':!task.isFinish}" v-for="task in dataList">
				<div tag="div" class="hidden-icon">
					<mu-icon value="done"></mu-icon>
				</div>
				<mu-list-item-action>
					<i class="iconfont" :class="{'icon-wancheng':task.isFinish,'icon-weiwanchengrenwu':!task.isFinish}" @click.stop="$emit('change_status',task)"></i>
				</mu-list-item-action>
				<mu-list-item-title>{{task.name}}</mu-list-item-title>
			</mu-list-item>
		</mu-list>
	</div>
</template>

<script>
	import $ from 'jquery'
	import myTitle from '@/components/title'
	export default {
		name: 'taskList',
		props: {
			dataList: Array,
			title: String
		},
		data() {
			return {
				xnum: 0,
				isDone:false,//滑动完成标志
			}
		},
		methods: {
			initTask($event) {
				$('.mu-item-wrapper').css('width','100%');
				this.xnum = $event.targetTouches[0].clientX;
				var l = $($event.target).parents('.mu-item-wrapper').length;
				if(l) {
					$($event.target).parents('.mu-item-wrapper').css({
						'border-top': '1px solid #eee',
						'border-bottom': '1px solid #eee'
					});
				}
			},
			doTask($event) {
				var l = $($event.target).parents('.mu-item-wrapper').length;
				if(l) {
					var offset = $event.targetTouches[0].clientX - this.xnum;
					var muItem = $($event.target).parents('.mu-item-wrapper');
					var hiddenIcon = muItem.find('.hidden-icon');
					muItem.css('margin-left', offset + 'px');
					if(offset>=80){
						this.isDone = true,
						hiddenIcon.css('background', '#1de9b6');
					}else{
						this.isDone = false,
						hiddenIcon.css('background', '#eee');
					}
				}
			},
			doneTask($event) {
				var l = $($event.target).parents('.mu-item-wrapper').length;
				var muItem = $($event.target).parents('.mu-item-wrapper');
				var vue = this;
				var selectedTask;
				if(l) {
					var id = muItem.parents('li').attr('data-key');
					$.each(this.dataList,function(idx,item){
						if(item.id == id){
							selectedTask = item;
						}
					})
					$($event.target).parents('.mu-item-wrapper').css({
						'border-top': '0px',
						'border-bottom': '0px'
					});
					if(this.isDone){
						muItem.animate({
							marginLeft:'100%'
						},'fast',function(){
							vue.$emit('change_status',selectedTask);
							muItem.css('margin-left','0px');
						});
					}else{
						muItem.animate({
							marginLeft:'0'
						});
					}
				}
			},
		},
		components: {
			myTitle,
		},
		mounted(){
			$('.mu-item-wrapper').css('width','100%');
		}
	}
</script>

<style lang="less" scoped="scoped">
	.task-list-box {
		background: #fff;
		.mu-list {
			padding: 0;
			.mu-item-wrapper {
				.hidden-icon {
					width: 100%;
					position: absolute;
					top: 0;
					left: -100%;
					height: 100%;
					text-align: right;
					padding-right: 8px;
					background: #eee;
					i.mu-icon {
						font-size: 40px;
						font-weight: bold;
						color: #fff;
					}
				}
			}
			.incomplete {
				i,
				.mu-item-title {
					color: #555;
				}
				i.icon-weiwanchengrenwu {
					position: relative;
					font-size: 18px;
					z-index: 999;
				}
			}
			.complete {
				i,
				.mu-item-title {
					color: #ccc;
				}
				i.icon-wancheng {
					position: relative;
					font-size: 22px;
					z-index: 999;
				}
			}
		}
	}
</style>
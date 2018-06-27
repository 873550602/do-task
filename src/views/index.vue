<template>
	<mu-container class="layout" @click="closeCreateTask">
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left" @click="open = !open">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			{{this.topBarName}}
			<mu-menu slot="right">
				<mu-button flat>
					<mu-icon value="more_vert"></mu-icon>
				</mu-button>
				<mu-list slot="content">
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>显示详细</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>隐藏已完成</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>排序</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>分享</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
				</mu-list>
			</mu-menu>
		</mu-appbar>
		<mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
			<mu-row>
				<mu-col span="12" class="sider-top">
					<mu-row class="photo-box">
						<mu-col span="6">
							<mu-col span="12"><img class="photo" src="../assets/img/def_photo.png" @click="this.toggleIsLogin" /></mu-col>
							<mu-col span="12" class="user-name" v-show="this.userInfo.isLogin">{{this.userInfo.userName}}</mu-col>
						</mu-col>
						<mu-col span="6">
							<mu-flex class="act-icon button-wrapper" justify-content="end">
								<mu-button icon>
									<mu-icon size="30" color="#fff" value="search"></mu-icon>
								</mu-button>
								<mu-button icon v-show="this.userInfo.isLogin" to="/notice">
									<mu-icon size="30" color="#fff" value="email"></mu-icon>
								</mu-button>
							</mu-flex>
						</mu-col>
					</mu-row>
					<mu-flex class="flex-wrapper" justify-content="center">
						<mu-button full-width color="#bbdefb" to="/signIn" v-show="!this.userInfo.isLogin">登录或注册</mu-button>
					</mu-flex>
				</mu-col>
			</mu-row>
			<mu-list>
				<mu-list-item button to="/all">
					<mu-list-item-action>
						<mu-icon value="list_alt" size="24"></mu-icon>
					</mu-list-item-action>
					<mu-list-item-title>所有</mu-list-item-title>
				</mu-list-item>
				<mu-list-item button to="/today">
					<mu-list-item-action>
						<my-today :date="today"></my-today>
					</mu-list-item-action>
					<mu-list-item-title>今天</mu-list-item-title>
				</mu-list-item>
				<mu-list-item button to="/inbox">
					<mu-list-item-action>
						<mu-icon value="inbox" size="24"></mu-icon>
					</mu-list-item-action>
					<mu-list-item-title>收集箱</mu-list-item-title>
				</mu-list-item>
			</mu-list>
			<mu-divider></mu-divider>
			<mu-paper class="demo-list-wrap">
				<mu-list toggle-nested>
					<mu-list-item button :ripple="false" nested :open="downopen === 'open0'" @toggle-nested="downopen = arguments[0] ? 'open0' : ''">
						<mu-list-item-action>
							<mu-icon :value="downopen === 'open0'?'folder_open':'folder'"></mu-icon>
						</mu-list-item-action>
						<mu-list-item-title>文件夹</mu-list-item-title>
						<mu-list-item-action>
							<mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
						</mu-list-item-action>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 1</mu-list-item-title>
						</mu-list-item>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 2</mu-list-item-title>
						</mu-list-item>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 3</mu-list-item-title>
						</mu-list-item>
					</mu-list-item>
					<mu-list-item button :ripple="false" nested :open="downopen === 'open1'" @toggle-nested="downopen = arguments[0] ? 'open1' : ''">
						<mu-list-item-action>
							<mu-icon :value="downopen === 'open1'?'folder_open':'folder'"></mu-icon>
						</mu-list-item-action>
						<mu-list-item-title>考试</mu-list-item-title>
						<mu-list-item-action>
							<mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
						</mu-list-item-action>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 1</mu-list-item-title>
						</mu-list-item>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 2</mu-list-item-title>
						</mu-list-item>
						<mu-list-item button :ripple="false" slot="nested">
							<mu-list-item-title>List Item 3</mu-list-item-title>
						</mu-list-item>
					</mu-list-item>
				</mu-list>
			</mu-paper>
			<mu-divider></mu-divider>
			<mu-list>
				<mu-list-item button>
					<mu-list-item-action>
						<mu-icon value="add" size="24"></mu-icon>
					</mu-list-item-action>
					<mu-list-item-title>添加清单</mu-list-item-title>
				</mu-list-item>
				<mu-list-item button>
					<mu-list-item-action>
						<mu-icon value="settings" size="24"></mu-icon>
					</mu-list-item-action>
					<mu-list-item-title>管理清单和标签</mu-list-item-title>
				</mu-list-item>
			</mu-list>
		</mu-drawer>
		<mu-button class="add-btn" small fab color="primary" v-show="!isCreateTask" @click.stop="createTask">
			<mu-icon value="add"></mu-icon>
		</mu-button>
		<router-view></router-view>
		<mu-row class="footer create-task-box" v-show="isCreateTask" @click.stop>
			<mu-col span="12">
				<input type="text" class="text-task" v-model="task.name" placeholder="准备做点什么呢？" />
				<mu-row class="icon-act-box">
					<mu-col span="6" class="left-box">
						<i class="iconfont icon-rili-select" @click=""></i>
						<i class="iconfont icon-youxianji3"></i>
						<i class="iconfont icon-biaoji"></i>
						<i class="iconfont icon-liebiao"></i>
					</mu-col>
					<mu-col offset="5" span="1" class="right-box">
						<i class="iconfont icon-sent" :class="{disabled:!task.name.trim()}"></i>
					</mu-col>
				</mu-row>
			</mu-col>
		</mu-row>
		<mu-dialog width="100%" :open.sync="openPop">
			<mu-row>
				<mu-col span="4"><my-today :date="today"></my-today></mu-col>
				<mu-col span="4"></mu-col>
				<mu-col span="4"></mu-col>
			</mu-row>
		</mu-dialog>
		<mu-bottom-nav class="footer" v-show="!isCreateTask">
			<mu-bottom-nav-item title="任务" icon="check_box"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="日历" icon="event_note"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="番茄" icon="av_timer"></mu-bottom-nav-item>
			<mu-bottom-nav-item title="设置" icon="settings"></mu-bottom-nav-item>
		</mu-bottom-nav>
	</mu-container>
</template>

<script>
	import myToday from '@/components/today'
	import { mapMutations } from 'vuex'
	import { mapState } from 'vuex'
	import $ from 'jquery'
	export default {
		name: 'index',
		data() {
			return {
				task: {
					name: '',
				},
				isCreateTask: false,
				downopen: '',
				openPop:true,
				open: false,
				docked: false,
				position: 'left',
				today: new Date().getDate(),
			}
		},
		methods: {
			createTask() {
				this.isCreateTask = true;
				setTimeout("$('input.text-task').focus();", 10);
			},
			closeCreateTask() {
				this.isCreateTask = false;
			},
			...mapMutations([
				'toggleIsLogin'
			])
		},
		computed: {
			...mapState([
				'userInfo',
				'topBarName'
			])
		},
		components: {
			myToday
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
	.sider-top {
		padding: 30px 10px !important;
		height: 150px;
		background: #42a5f5;
		.photo-box {
			color: #fff;
			img.photo {
				width: 50px;
				height: 50px;
				vertical-align: top;
				border-radius: 25px;
				background: #e3f2fd;
				border: 2px solid #fff;
			}
			.user-name {
				margin-top: 15px;
				font-weight: bold;
				font-size: 1.2rem;
			}
		}
		.flex-wrapper {
			margin-top: 20px;
		}
	}
	
	.mu-list {
		.router-link-active {
			.mu-item-title,
			i {
				color: #0094CA;
			}
		}
	}
	
	.add-btn {
		position: fixed;
		z-index: 9999;
		right: 40px;
		bottom: 80px;
	}
	
	.create-task-box {
		input.text-task {
			height: 40px;
			width: 100%;
			padding-left: 8px;
			color: #333;
			border: 0;
			outline: none;
		}
		.icon-act-box {
			background: #f5f5f5;
			height: 35px;
			color: #90a4ae;
			line-height: 35px;
			.left-box {
				i {
					margin: 0px 12px;
				}
			}
			.right-box {
				i.disabled {
					color: #ccc;
				}
				i {
					color: #2196f3;
				}
			}
		}
	}
	
	.footer {
		position: fixed;
		width: 100%;
		bottom: 0;
		box-shadow: 0px -3px 6px 2px #d5d5d5;
		;
	}
</style>
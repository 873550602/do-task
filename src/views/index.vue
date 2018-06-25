<template>
	<mu-container class="layout">
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left" @click="open = !open">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			{{this.$store.state.topBarName}}
			<mu-menu slot="right">
				<mu-button flat>
					<mu-icon value="more_vert"></mu-icon>
				</mu-button>
				<mu-list slot="content">
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>Menu Item 1</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>Menu Item 2</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
				</mu-list>
			</mu-menu>
		</mu-appbar>
		<mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
			<mu-row>
				<mu-col span="12" class="sider-top">
					<img class="photo" src="../assets/img/def_photo.png" />
					<mu-icon size="30" color="#fff" value="search" class="right"></mu-icon>
					<mu-flex class="flex-wrapper" justify-content="center">
						<mu-button full-width color="#bbdefb" to="/signIn">登录或注册</mu-button>
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
		<router-view></router-view>
	</mu-container>
</template>

<script>
	import myToday from '@/components/today'
	export default {
		name: 'index',
		data() {
			return {
				downopen: '',
				open: false,
				docked: false,
				position: 'left',
				today: new Date().getDate(),
				topBarName: '',
			}
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
		img.photo {
			width: 50px;
			height: 50px;
			vertical-align: top;
			border-radius: 25px;
			background: #e3f2fd;
			border: 2px solid #fff;
		}
		.flex-wrapper {
			margin-top: 20px;
		}
	}
	.mu-list{
		.router-link-active{
			.mu-item-title,i{
				color: #0094CA;
			}
		}
	}
</style>
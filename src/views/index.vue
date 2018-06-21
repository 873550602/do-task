<template>
	<mu-container class="layout">
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left" @click="open = !open">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			收件箱
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
							<mu-button full-width color="#bbdefb">登录或注册</mu-button>
					</mu-flex>
				</mu-col>
			</mu-row>
		</mu-drawer>
	</mu-container>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				open: false,
				docked: false,
				position: 'left'
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.sider-top {
		padding: 30px 10px;
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
		.flex-wrapper{
			margin-top: 20px;
		}
	}
</style>
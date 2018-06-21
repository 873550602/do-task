<template>
	<div class="layout">
		<mu-container class="form-box">
			<mu-row>
				<mu-col span="12 logo-box">
					<img class="logo" src="../../build/logo.png" />
					<div class="text-logo"> Do Task </div>
					<mu-text-field v-model="UserName" icon="account_circle" placeholder="用户名"></mu-text-field>
					<mu-text-field v-model="Password" icon="locked" placeholder="密码"></mu-text-field>
				</mu-col>
			</mu-row>
		</mu-container>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.layout {
		height: 100%;
		background: #fff;
		.logo-box {
			text-align: center;
			img.logo {
				width: 50px;
				height: 50px;
			}
			.text-logo {
				font-size: 1.5rem;
				color: #55E3A5;
			}
		}
	}
</style>
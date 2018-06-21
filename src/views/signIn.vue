<template>
	<div class="layout">
		<mu-container class="form-box">
			<mu-row>
				<mu-col span="12" class="logo-box">
					<img class="logo" src="../../build/logo.png" />
					<div class="text-logo"> Do Task </div>
				</mu-col>
				<mu-col span="12">
					<mu-text-field v-model="UserName" icon="account_circle" placeholder="用户名"></mu-text-field>
				</mu-col>
				<mu-col span="12">
					<mu-text-field v-model="Password" icon="locked" placeholder="密码"></mu-text-field><br>
				</mu-col>
			</mu-row>
			<mu-row justify-content="between" class="access-account">
			    <mu-col span="4"><img src="../assets/img/qq.png"/></mu-col>
			    <mu-col span="4"><img src="../assets/img/weixin.png"/></mu-col>
			    <mu-col span="4"><img src="../assets/img/weibo.png"/></mu-col>
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
		.form-box {
			position: relative;
			margin: 0 auto;
			width: 80%;
			height: 100%;
			text-align: center;
			.logo-box {
				margin-top: 50px;
				margin-bottom: 80px;
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
			.access-account{
				width: 100%;
				position: absolute;
				bottom: 30px;
			}
		}
	}
</style>
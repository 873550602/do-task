<template>
	<mu-container class="layout">
		<mu-row>
			<mu-col span="8" offset="2">
				<i class="iconfont icon-img" :class="iconfont"></i>
				<div class="text-title text-center">
					{{textTitle}}
					<div class="sub-text-title">{{subtextTitle}}</div>
				</div>
			</mu-col>
		</mu-row>
	</mu-container>
</template>

<script>
	export default {
		name: 'nothing',
		props:{
			iconfont:String,
			textTitle:String,
			subtextTitle:String,
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		position: fixed;
		height: 100%;
		background: #fff;
		.icon-img{
			margin: 100px auto 0;
			width: 180px;
			height: 180px;
			text-align: center;
			font-size: 8.0rem;
			line-height: 1.9;
			border-radius: 90px;
			background: #42a4f3;
			display: block;
		}
		.text-title{
			margin-top: 20px;
			font-size: 1.3rem;
			color: #82b1ff;
			.sub-text-title{
				margin-top: 10px;
				color: #999;
				font-size: 90%;
			}
		}
	}
</style>
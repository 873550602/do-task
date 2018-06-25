<template>
	<div class="icon-box">
		<i class="iconfont icon-rili" :style="{color:activeColor}"></i>
		<div class="day" :style="{color:activeColor}">
			{{date}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'today',
		props: {
			date: Number,
		},
		data() {
			return {
			}
		},
		computed:{
			activeColor:function(){
				if(this.$store.state.topBarName == '今天'){
					return '#0094CA';
				}else{
					return '#757575';
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.icon-box{
		position: relative;
		width: 24px;
		height: 24px;
		text-align: center;
		.iconfont{
			font-size: 20px;
		}
	}
	img.today {
		width: 100%;
		height: 100%;
	}
	.day{
		position: absolute;
		top: 9px;
		width: 100%;
		color: #777;
		font-size: 1rem;
	}
</style>
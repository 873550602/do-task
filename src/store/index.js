import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		topBarName:'',//topBar的title名称
		userInfo:{//用户信息
			isLogin:false,
			userName:'张三'
		}
	},
	mutations:{
		setTopBarName(state,name){
			state.topBarName = name;
		},
		toggleIsLogin(state){
			state.userInfo.isLogin = !state.userInfo.isLogin;
		}
	},
	actions:{},
	modules:{}
})

export default store;

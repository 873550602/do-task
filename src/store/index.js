import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		topBarName:''
	},
	mutations:{
		setTopBarName(state,name){
			state.topBarName = name;
		}
	},
	actions:{},
	modules:{}
})

export default store;

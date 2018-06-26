import Vue from 'vue'
Vue.directive('go-back',{
	inserted(el){
		el.addEventListener('click',function(){
			history.back();
		})
	}
})

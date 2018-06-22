(function (){
	Array.prototype.remove = function (item){
		this.splice(this.indexOf(item),1);
	}
	Array.prototype.add = function (item){
		this.splice(0,0,item);
	}
})();

export default {};

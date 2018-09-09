//点赞组件
Vue.component('likes',{
	template:
	`<button v-bind:class="{liked:liked}" @click="toggleLike">
	赞 {{like_count}}
	</button>`,
	data:function(){
		return {
			like_count:13,
			liked:false
		}
	},
	methods:{
		toggleLike:function(){
			if(this.liked==false){
				this.like_count++;
				this.liked=true;
			}else{
				this.like_count--;
				this.liked=false;
			}
		}
	}
});
new Vue({
	el:'#app',
})
// Vue.component('alert',{
// 	template:'<button @click="onClick">点我</button>',
// 	methods:{
// 		onClick:function(){
// 			console.log('div component')
// 		}
// 	}
// });

// new Vue({
// 	el:'#app',
// 	components:{
// 		alert:{
// 			template:'<button @click="onClick">点我</button>',
// 			methods:{
// 				onClick:function(){
// 				console.log('div component')
// 				}	
// 			}
// 		}
// 	}
// })
// var app= new Vue({
// 	el:"#app",
// 	data:{
// 		name:"帅气的我",
// 		url:'http://www.baidu.com',
// 		img:'images/myself.jpg',
// 		kclass:'btn btn-default',
// 		isActive:true,
// 		sex:"male",
// 		sexhobby:[],
// 		place:null,
// 		role:null,
// 		math:54,
// 		physics:23,
// 		english:32
// 		},
// 	computed:{
// 		sum:function(){
// 			return this.math+this.physics+this.english
// 		},
// 		avg:function(){
// 			return Math.round((this.sum)/3)
// 		}
// 	},
// 	methods:{
// 		onClick:function(){
// 			console.log('click')
// 		},
// 		onEnter:function(){
// 			console.log('mouseover')
// 		},
// 		onLeave:function(){
// 			console.log('mouseleave')
// 		},
// 		onKeypress:function(){
// 			console.log('keypressed')
// 		},
// 		onSubmit:function(){
// 			console.log('submit')
// 		},
// 		pressEnter:function(){
// 			console.log('enterpressed')
// 		},
// 	}
// });
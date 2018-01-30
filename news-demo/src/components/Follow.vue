<template>
	<div id="follow">
		<div class="content mt30">
			<div class="newsList">
				<ul>
					<li v-for="(item,index) in arrList">
						<a href="conText.html">
							<h2>{{index+1}}.{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</li>
					
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arrList:[]
			}
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this = this;
				this.$http.get('src/data/follow.data').then(function(res){
					_this.arrList= res.data;
					console.log(_this.arrList);
				}).catch(function(err){
					console.log(Follow,err);
				});
			}
			
		}
	}
</script>

<style scoped>
	.mt30{
		margin-top:30px;
	}
</style>
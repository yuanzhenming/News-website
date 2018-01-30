<template>
	<div id="app">
		<Loading v-show="loading"></Loading>
		<NavView v-show="headerShow"></NavView>
		<transition name="slide-down">
			<keep-alive>
				<router-view class="router-view"></router-view>
			</keep-alive>
		</transition>
		<FooterView v-show='footerShow'></FooterView>
		
	</div>
</template>

<script>
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	
	import {mapGetters,mapActions} from 'vuex'
	
	export default {
		computed:mapGetters([
			'headerShow',
			'loading',
			'footerShow'
		]),
		watch:{
			$route(to,from){
				if(to.path == '/user-info'){
					this.$store.dispatch('hideHeader');
				}else{
					this.$store.dispatch('showHeader');
				}
				if(to.path.substring(0,9) == '/article/'){
					this.$store.dispatch('hideFooter');
				}else{
					this.$store.dispatch('showFooter');
				}
			}

		},
		components:{
			NavView,
			FooterView
		}
		
	}
</script>

<style>
	@import './assets/css/index.css';
	.slide-down-enter-active,
	.slide-down-leave-active{
		transition:.4s all ease;
		opacity:.2;
		transform: translated3d(0,6em,0);
	}
	.slide-down-enter,
	.slide-down-leave{
		opacity:1;
		transform: translated3d(0,6em,0);
	}
</style>
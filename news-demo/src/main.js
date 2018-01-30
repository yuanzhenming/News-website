import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading'

import filters from './filters' 
//Vue.filter(名字,函数)
Object.keys(filters).forEach((key)=> Vue.filter(key,filters[key]))
//添加过滤器的方式二
//Vue.filter('normalTime',function(input){
//  	var oDate=new Date(Number(input));
//  	return oDate.getFullYear() + '-' +(oDate.getMonth()+1)+'-' + oDate.getDate() +' '+ oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
//})
Vue.use(VueRouter);
Vue.use(Loading);

//关于axios的配置
axios.interceptors.request.use(function(config){//配置发送请求的文件
	store.dispatch('showLoading')
	return config;
},function(error){
	return Promise.reject(error);
});
axios.interceptors.response.use(function(response){//请求回来
	store.dispatch('hideLoading')
	return response;
},function(error){
	return Promise.reject(error);
});

//axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//设置post头部信息

//axios.defaults.baseURL='http://localhost:8082/';配置请求的跟路径

Vue.prototype.$http = axios;  //其他页面在使用axios的时候直接  this.$http就可以了

const router = new VueRouter({
	mode:"history",//切换路径模式，变成history模式
	scrollBehavior:()=>({y:0}),//滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

require('./assets/css/base.css');//引入全局的base文件

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})

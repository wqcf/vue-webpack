// 1.导入jquery
import './css/index.scss';
import * as $ from 'jquery';
import Vue from 'vue';
import app from './App.vue';
import router from './router.js';
//mui的css样式
import './lib/css/icons-extra.css';
import './lib/css/mui.css';
import MintUI from 'mint-ui';
Vue.use(MintUI)
//mint-ui的css样式
import 'mint-ui/lib/style.css'
//Vue 要实现异步加载需要使用到 vue-resource 库。
import 'vue-resource';

  
//设置路由请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
//全局设置post 
Vue.http.options.emulateJSON = true;
//安装图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
// with parameters install

//配置vuexd 步骤
//导入包
//注册Vuex到vue中
//new Vuex.Store() 实例，得到一个 数据仓储对象
//挂载

//获取本地内存
var car =JSON.parse(localStorage.getItem('car') || '[]')
import Vuex from 'vuex';
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    car: car , //购物车中的商品的数据，用一个数据存储起来，{id: 商品的id，count： 购买的数量， price：商品的单价， selected: false}
  },
  mutations: {//this.$store.commit('方法名')
    addToCar(state,goodsinfo){
      // 分析：
      //1. 如果购物车中， 之前就已经存在，只需改变数量
      //2. 如果没有直接把，商品数据push到car中就行

      //当更新car之后， 把car存储到本地的 localStorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    }

  },
  getters:{
    getAllCount(state){
    }
  }
})

var vm = new Vue({
    el: '#app',
    data: {
    },
    render: c => c(app),
    store,
    router
})
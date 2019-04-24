<template>
  <div class="app-container" >
    <!-- 顶部Header区域 -->
    <mt-header fixed title="小七程序员-VUE">
		 <div @click="getBack" slot="left">
			<mt-button icon="back">返回</mt-button>
		</div>
	</mt-header>
    <!-- 中间路由router-view -->
	<transition>
		<router-view></router-view>
	</transition>
    <!-- 顶部Header区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-wq" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-wq" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-wq" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
					</span>  
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-wq" to="/serach">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
	  getBack(){
		  this.$router.go(-1);
	  }
  },
  components: {

  }
}
</script>

<style <style lang="scss" scoped>
.mint-header{
	z-index: 99;
}
.app-container{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		.mui-bar{
			-webkit-box-shadow:unset;
			box-shadow:0 0 1px rgba(0, 0, 0, .4);
		}
		.mui-bar-tab .mui-tab-item-wq .mui-icon ~ .mui-tab-label{
				font-size: 11px;
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
		}

		.mui-tab-item-wq{
				display: table-cell;
				overflow: hidden;
				width: 1%;
				height: 50px;
				text-align: center;
				vertical-align: middle;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #929292;
		}
		.mui-bar-tab .mui-tab-item-wq .mui-icon{
				top: 3px;
				width: 24px;
				height: 24px;
				padding-top: 0;
				padding-bottom: 0;
		}
		.mui-active{
			color:#007aff;
		}

}

.v-enter{
	opacity:0;
}
// 	transform: translatex(100%);
// }
.v-leave-to{
	opacity:0;
	// transform: translatex(-100%);
	position: absolute;
}
// .v-enter-active,
// .v-leave-active {
// 	transition: all 0.5s ease;
// }


</style>

import Vue from 'vue'
import vueRouter from 'vue-router'


Vue.use(vueRouter)

const home={ template:'<div>你现在看到是“首页”的内容</div>'}
const abouts={ template:'<div>关于我们：我们是一个牛B的团队</div>'}
const newslist={ template:'<div>新闻中心：今天发生了一件大事儿</div>'}

const router=new vueRouter({
	mode:'history',
    base:__dirname,
    routes: [
	    {path: '/',component: home},
	    {path: '/abouts',component: abouts},
	    {path: '/newslist',component: newslist},
   ]
})

const template_nav=`<div id='rbox'>
			             <h1>导航</h1>
			             <ul>
			                <li><router-link to='/'>返回首页</router-link></li>
			                <li><router-link to='/abouts'>关于我们</router-link></li>
			                <li><router-link to='/newslist'>新闻中心</router-link></li>
			             </ul>
			             <router-view class="nav"></router-view>
			        </div>
			        `
new Vue({
	router,
	template:template_nav
}).$mount('#routerbox');



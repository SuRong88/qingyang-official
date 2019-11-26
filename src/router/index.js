import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		redirect: '/Index'
	},
	{
		name: 'Index',
		path: '/index',
		meta: {
			title: '首页'
		},
		component: resolve => require(['pages/Index.vue'], resolve)
	},
	{
		name: 'Hotel',
		path: '/hotel',
		meta: {
			title: '精选会务酒店'
		},
		component: resolve => require(['pages/Hotel.vue'], resolve)
	},
	{
		name: 'HotelDetail',
		path: '/hotelDetail/:id',
		meta: {
			title: '酒店详情'
		},
		component: resolve => require(['pages/HotelDetail.vue'], resolve)
	},
	{
		name: 'Meeting',
		path: '/meeting',
		meta: {
			title: '专题会议'
		},
		component: resolve => require(['pages/Meeting.vue'], resolve)
	},
	{
		name: 'MeetingDetail',
		path: '/meetingDetail/:id',
		meta: {
			title: '专题会议详情'
		},
		component: resolve => require(['pages/MeetingDetail.vue'], resolve)
	},
	
	{
		name: 'error',
		path: '/404',
		meta: {
			title: '404'
		},
		component: resolve => require(['pages/404.vue'], resolve)
	},
	// {
	// 	path: '*',
	// 	redirect: '/404'
	// }
];
const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass:'is-actived'
});
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title || '清扬会务'
	next()
});
router.afterEach((to, from) => {
	window.scrollTo(0, 0)
});
export default router;

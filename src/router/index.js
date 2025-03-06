import { createRouter, createWebHashHistory } from 'vue-router';
export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		// {
		// 	path: '/',
		// 	name: 'MyPortfolio',
		// 	component: () => import('@/App.vue'),
		// 	meta: {
		// 		title: 'My Portfolio'
		// 	}
		// }
	]
});
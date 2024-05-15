<template>
	<div class="flex flex-col gap-6">
		<div v-for="item in portfolioData" :key="item.title" class="grid-item">
			<div class="grid grid-cols-2 gap-6 items-center changeLayout">
				<div class="rounded overflow-hidden align-bottom">
					<img :src="item.img" />
				</div>
				<div class="flex flex-col gap-2 text-start">
					<div class="text-primary font-black dark:text-darkPrimary">{{ item.type }}</div>
					<div class="font-black text-xl dark:text-darkThird">{{ item.title }}</div>
					<div class="flex-grow dark:text-darkThird">
						{{ item.describe }}
					</div>
					<div class="flex gap-4 justify-end">
						<a :href="item.git">
							<button class="border-[1px] bg-primary dark:bg-darkPrimary text-white dark:text-darkThird p-1 flex items-center gap-2 py-3 px-3 rounded-md font-black">
								git hub
								<SvgIcon class="cursor-pointer text-white dark:text-darkThird" :icon="'github'" :size="24" />
							</button>
						</a>
						<a :href="item.demo">
							<button class="border-[1px] bg-primary dark:bg-darkPrimary text-white dark:text-darkThird p-1 flex items-center gap-2 py-3 px-3 rounded-md font-black">
								demo
								<SvgIcon class="cursor-pointer text-white dark:text-darkThird" :icon="'link'" :size="24" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import flyBird from '@/assets/img/portfolio/flyBird.png';
import spark from '@/assets/img/portfolio/spark.png';
import todoList from '@/assets/img/portfolio/todoList.png';
const portfolioData = ref([
	{
		title: '飛鳥時攝',
		type: 'WEB',
		describe: '這是一個自行構想和設計的攝影課程靜態網站，提供課程介紹、師資介紹、最新消息、課程付費及聯絡表單，使用HTML、CSS、JavaScript和jQuery技術開發。',
		img: flyBird,
		git: 'https://github.com/lockon1248/personal',
		demo: 'https://lockon1248.github.io/personal/'
	},
	{
		title: '星火兒童認養協會',
		type: 'WEB',
		describe:
			'這是一個6人團隊合作開發的網站項目，旨在提供和使用者一個互動的兒童認養平台，我全程參與從概念發想到最終產品的全過程。負責網站的部分畫面設計和前後端開發，使用 vite 進行快速開發和熱重載，以Vue.js 和 SCSS 來創建響應式的用戶界面，用 Vue Router 進行路由管理，用 Pinia 來進行資料的狀態管理，並透過 JavaScript 增強互動性。後端方面使用 PHP 和 MySQL 進行資料庫的規劃和建置，並利用 Ajax 和 Axios 技術實現前後端的資料串接。這個項目鍛鍊了我的全端開發能力，也讓我學習到團隊合作如何溝通及解決問題。',
		img: spark,
		git: 'https://github.com/DINGTUNG/SPARK/tree/dev',
		demo: 'https://tibamef2e.com/chd102/g3/'
	},
	{
		title: 'Todo List',
		type: 'WEB',
		describe:
			'這是一個使用 Vue3 所完成的待辦清單，以 Ant Design Vue 完成部分 ui 元件，使用 localStorage 進行資料存儲，並且嘗試撰寫 vitest 來進行單元測試和使用 Vue i18n 進行繁中、簡中、英文語系切換',
		img: todoList,
		git: 'https://github.com/lockon1248/ToDoList',
		demo: 'https://to-do-list-gules-delta.vercel.app/'
	}
]);
</script>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
	.changeLayout {
		display: flex;
		flex-direction: column;
	}
}
</style>

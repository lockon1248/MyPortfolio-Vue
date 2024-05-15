<template>
	<div class="flex justify-center gap-20 flex-wrap">
		<div>
			<div class="flex items-center gap-3 justify-center mb-5">
				<SvgIcon class="dark:text-darkThird" :icon="'school'" :size="20" />
				<p class="dark:text-darkThird">求學經歷</p>
			</div>
			<div class="flex gap-2" v-for="item in studyData" :key="item">
				<div class="flex items-center flex-col text-forth dark:text-darkPrimary">
					<div class="dot bg-forth dark:bg-darkThird"></div>
					<div class="line bg-forth dark:bg-darkThird"></div>
				</div>
				<div class="text-start">
					<p class="mb-4 text-main font-black leading-[0.8] dark:text-darkPrimary">{{ item.title }}</p>
					<p class="text-main font-black dark:text-darkPrimary">{{ item.school }}</p>
					<p class="text-secondary dark:text-darkSecondary">{{ item.startDate }}~{{ item.endDate }}</p>
				</div>
			</div>
		</div>
		<div>
			<div class="flex items-center gap-3 justify-center mb-5">
				<SvgIcon class="dark:text-darkThird" :icon="'tools'" :size="20" />
				<p class="dark:text-darkThird">工作經歷</p>
			</div>
			<div class="flex gap-2" v-for="item in workData" :key="item">
				<div class="flex items-center flex-col text-forth dark:text-darkPrimary">
					<div class="dot bg-forth dark:bg-darkThird"></div>
					<div class="line bg-forth dark:bg-darkThird"></div>
				</div>
				<div class="text-start">
					<p class="mb-4 text-main font-black leading-[0.8] dark:text-darkPrimary">{{ item.title }}</p>
					<p class="text-main font-black dark:text-darkPrimary">{{ item.place }}</p>
					<p class="text-secondary dark:text-darkSecondary">{{ item.startDate }}~{{ item.endDate }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
const studyData = ref([
	{
		title: '前端工程師養成班',
		school: '緯育 TibaMe（前中壢資策會）',
		startDate: '2023-04',
		endDate: '2023-08'
	},
	{
		title: '護理系',
		school: '台北護理健康大學',
		startDate: '2016-09',
		endDate: '2018-06'
	}
]);
const workData = ref([
	{
		title: '前端工程師',
		place: '華苓科技股份有限公司',
		startDate: '2023-10',
		endDate: '現職'
	},
	{
		title: '護理師',
		place: '成大醫院斗六分院',
		startDate: '2019-02',
		endDate: '2023-02'
	}
]);
</script>

<style lang="scss" scoped>
.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
}
.line {
	width: 2px;
	height: 100px;
}
</style>

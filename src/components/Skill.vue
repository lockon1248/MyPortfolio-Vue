<template>
	<div class="flex gap-12 justify-evenly pt-3 flex-wrap">
		<div>
			<div class="font-black my-3 dark:text-darkPrimary">使用者介面設計</div>
			<div class="h-[200px] flex flex-col flex-wrap">
				<div class="flex flex-col gap-2 m-2" v-for="item in uiData" :key="item">
					<div class="flex items-center gap-2 dark:text-darkPrimary"><SvgIcon :icon="'check'" :size="20" class="text-secondary dark:text-secondary" />{{ item }}</div>
				</div>
			</div>
		</div>
		<div>
			<div class="font-black my-3 dark:text-darkPrimary">前端開發</div>
			<div class="h-[200px] flex flex-col flex-wrap">
				<div class="flex flex-col gap-2 m-2" v-for="item in frontEndData" :key="item">
					<div class="flex items-center gap-2 dark:text-darkPrimary"><SvgIcon :icon="'check'" :size="20" class="text-secondary dark:text-secondary" />{{ item }}</div>
				</div>
			</div>
		</div>
		<div>
			<div class="font-black my-3 dark:text-darkPrimary">後端開發</div>
			<div class="h-[200px] flex flex-col flex-wrap">
				<div class="flex flex-col gap-2 m-2" v-for="item in backEndData" :key="item">
					<div class="flex items-center gap-2 dark:text-darkPrimary"><SvgIcon :icon="'check'" :size="20" class="text-secondary dark:text-secondary" />{{ item }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
const frontEndData = ref(['HTML', 'CSS, SCSS', 'JavaScript', 'jQuery', 'Tailwind CSS', 'Github', 'RWD', 'Axios', 'Bootstrap 5', 'Vue 3', 'astro']);
const backEndData = ref(['MySQL', 'PHP']);
const uiData = ref(['Figma', 'Wireframe', 'Prototype', 'Mockup']);
</script>
<style></style>

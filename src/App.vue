<template>
	<div class="p-4 mx-auto max-w-7xl text-center">
		<div class="w-[136px] m-auto">
			<div class="m-auto rounded-full overflow-hidden p-1 border-4 border-black">
				<div class="rounded-full overflow-hidden">
					<img src="https://picsum.photos/500/500" class="m-auto" />
				</div>
			</div>
		</div>
		<div class="text-center">賴世原</div>
		<div class="text-center">前端工程師</div>
		<div class="flex justify-center gap-4">
			<div>
				<a href="https://www.facebook.com/lockon.stratos.568">
					<SvgIcon class="cursor-pointer" :icon="'facebook'" :size="20" />
				</a>
			</div>
			<div>
				<a href="https://github.com/lockon1248">
					<SvgIcon class="cursor-pointer" :icon="'github'" :size="20" />
				</a>
			</div>
			<div>
				<SvgIcon class="cursor-pointer" :icon="'mail'" :size="20" />
			</div>
		</div>
		<div class="flex justify-center gap-4 m-4">
			<div>
				<div>6Y+</div>
				<div>工作經驗</div>
			</div>
			<div>
				<div>6+</div>
				<div>專案</div>
			</div>
			<div>
				<div>30Y</div>
				<div>年紀</div>
			</div>
		</div>
		<div class="flex justify-center gap-4">
			<div class="">
				<div class="h-[50px] border-2 leading-10 p-3 rounded bg-slate-200 shadow-md flex items-center">
					<a href="https://drive.google.com/file/d/1gUtqkVXWQj49aH8mH9hLMTTGIkWxXJ2a/view?usp=drive_link" class="flex gap-3 items-center">
						<p>查看履歷</p>
						<SvgIcon class="cursor-pointer" :icon="'link'" :size="20"
					/></a>
				</div>
			</div>
			<div class="h-[50px] border-2 bg-slate-200 shadow-md leading-10 flex items-center p-4">
				<a href="tel:+886-9-75556202">
					<SvgIcon class="cursor-pointer" :icon="'tel'" :size="20" />
				</a>
			</div>
		</div>
		<div>
			<div>
				<nav class="inline-block">
					<ul class="flex p-1 m-4 bg-slate-200 rounded cursor-pointer shadow-md flex-wrap">
						<li @click="key = 'resume'" class="px-10 py-3 rounded-md flex-grow" :class="key === 'resume' ? ' bg-slate-400 shadow-2xl' : 'bg-slate-200'">經歷</li>
						<li @click="key = 'portfolio'" class="px-10 py-3 rounded-md flex-grow" :class="key === 'portfolio' ? 'bg-slate-400' : 'bg-slate-200'">作品集</li>
						<li @click="key = 'skill'" class="px-10 py-3 rounded-md flex-grow" :class="key === 'skill' ? 'bg-slate-400' : 'bg-slate-200'">技能</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="mx-auto">
			<div v-if="key === 'resume'"><Resume /></div>
			<div v-if="key === 'portfolio'"><Portfolio /></div>
			<div v-if="key === 'skill'"><Skill /></div>
		</div>
	</div>
</template>
<script setup>
import Resume from '@/components/Resume.vue';
import Portfolio from '@/components/Portfolio.vue';
import Skill from '@/components/Skill.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref, computed } from 'vue';
const key = ref('resume');
// const portfolioFocus=computed(()=>{
// if
// })
</script>
<style scoped></style>

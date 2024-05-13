<template>
	<div class="flex flex-col gap-6">
		<div class="grid grid-cols-2 gap-6">
			<div class="rounded overflow-hidden">
				<img src="https://picsum.photos/800/500/?random=10" />
			</div>
			<div class="flex flex-col gap-2 text-start">
				<div class="text-main font-black">WEB</div>
				<div class="font-black text-xl">title</div>
				<div class="flex-grow">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates assumenda molestiae rem corporis nesciunt veniam illo corrupti a officia natus magni, doloribus doloremque
					soluta numquam quam. A asperiores rem est?
				</div>
				<div class="flex gap-4 justify-end">
					<a href="https://github.com/lockon1248">
						<button class="border-[1px] bg-main text-white p-1 flex items-center gap-2 py-3 px-3 rounded-md font-black">
							git hub
							<SvgIcon class="cursor-pointer text-white" :icon="'github'" :size="24" />
						</button>
					</a>
					<a href="#">
						<button class="border-[1px] bg-main text-white p-1 flex items-center gap-2 py-3 px-3 rounded-md font-black">
							demo
							<SvgIcon class="cursor-pointer text-white" :icon="'link'" :size="24" />
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue';

</script>

<style></style>

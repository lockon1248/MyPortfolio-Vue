<template>
	<svg aria-hidden="true" :class="['svg-icon', className]" :style="{ width: size + 'px', height: size + 'px' }">
		<use :href="`#icon-${icon}`" />
	</svg>
</template>

<script setup>
defineProps({
	icon: {
		type: String,
		required: true
	},
	className: {
		type: String,
		default: ''
	},
	size: {
		type: Number,
		default: 16
	}
});
</script>

<style lang="scss">
.svg-icon {
	vertical-align: middle;
	fill: currentColor;
	overflow: hidden;
	color: gray;
}
</style>

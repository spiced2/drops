<template>
	<div :class="[`bg-${color}`]" @click="changeColor()"></div>
</template>
<script>
export default {
	name: 'Dot',
	data() {
		return {
			color: 1,
		};
	},
	methods: {
		changeColor() {
			if (this.color === 4) {
				this.color = 1;
			} else {
				this.color++;
				const sound = new Audio(`/sounds/${this.color}.wav`).play();
			}
		},
	},
};
</script>
<style lang="scss">
.bg-1 {
	@apply bg-gray-100;
}
.bg-2 {
	@apply bg-blue-500;
}
.bg-3 {
	@apply bg-red-500;
}
.bg-4 {
	@apply bg-green-500;
}
</style>

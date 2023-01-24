<template>
	<div class="bottom-section flex-auto">
		<h2 class="text-white text-xl text-center" v-if="$slots.header">
			<slot name="header"></slot>
		</h2>
		<div class="pt-[20px] text-white">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'bottom-section',
}
</script>



<style lang='scss' src='./style.scss' scoped/>
<template>
	<div class="bottom-section flex-auto pt-[20px] px-dynamicBase pb-1 text-center border-b-[2px] border-b-[var(--white-transparent)]">
		<h2 class="text-white text-dynamicLG text-center" v-if="$slots.header">
			<slot name="header"></slot>
		</h2>
		<div class="pt-[20px] text-white text-dynamicBase">
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
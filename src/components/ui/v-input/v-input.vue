<template>
	<div class="input px-2 py-2">
		<input class="input__input w-[100%] outline-none flex"
			:value="modelValue" 
			@input="e => $emit('update:modelValue', e.target.value)"/>
		<button
			class="input__clear-btn absolute top-[50%] translate-y-[-50%] right-4 w-5 h-5 p-0 rounded-[50%] border-[#555] border-[1px] flex justify-center items-center  group"
			@click="$emit('update:modelValue', '')">
			<clearSvg class="fill-[#666] transition-fill duration-300 group-hover:fill-black"/>
		</button>
	</div>
</template>

<script>

import clearSvg from '../../../assets/img/icons/clear.svg'
export default {
	name: 'v-input',
	emits: ['update:modelValue'],
	components: { clearSvg },
	props: {
		modelValue: {
			type: String,
			requried: false,
			default: ''
		}
	}
}
</script>









<style lang='scss' src='./style.scss' scoped/>
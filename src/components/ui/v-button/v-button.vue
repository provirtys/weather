<template>
	<button :class="['button text-dynamicBase', 'button--' + color]" >
		<slot></slot>
	</button>
</template>

<script>

export default {
	 name:'v-button',
	 props:{
		color:{
			type:String,
			required:false,
			default:'default',
			validator(val){
				return ['default', 'green', 'red'].includes(val)
			} 
		}
	 }
}
</script>

<style lang='scss' src='./style.scss' scoped/>
<template>
	<div class="app" :style="{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${image.src}')`}">
		<div class="city-name grow shrink basis-auto text-white text-dynamic2XL p-dynamicLG">{{ weatherStore.selectedCity.title }}</div>
		<v-tabs class="text-dynamicLG"/>
		<bottom></bottom>
	</div>
</template>

<script>

import { computed } from 'vue';
import VSelect from './components/ui/v-select/v-select.vue';
import VButton from './components/ui/v-button/v-button.vue'
import VTabs from './components/v-tabs/v-tabs.vue';
import { useWeatherStore } from './stores/useWeatherStore'
import Bottom from './components/bottom/bottom.vue';

export default {
	name: 'App',
	components: { VSelect, VButton, VTabs, Bottom },
	setup() {
		const weatherStore = useWeatherStore()
		const image =  computed(() => {
			let img =  document.createElement('img')
			img.src = weatherStore.cityImage.length ? weatherStore.cityImage : './src/assets/img/bg.jpg';
			return img
		})
		return {
			weatherStore,
			image
		}
	}
}
</script>

<style lang='scss' src="./assets/style/index.scss"/>
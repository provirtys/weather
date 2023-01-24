<template>
	<div class="tabs">
		<div
			:class="['tabs__tab border-b-[5px]', tab.id === 0 ? 'border-[#44c2d2]' : 'border-[#eacd6a]', { 'tabs__tab--active': tab.id === weatherStore.selectedTab.id }]"
			v-for="tab in weatherStore.tabs"
			@click="weatherStore.selectedTab = tab">{{ tab.title }}</div>
	</div>
</template>

<script>

import { ref, onMounted } from 'vue';
import { useWeatherStore } from '../../stores/useWeatherStore';

export default {
	name: 'v-tabs',
	setup() {
		const weatherStore = useWeatherStore()

		return {
			weatherStore,
		}
	}
}
</script>



<style lang='scss' src='./style.scss' scoped/>
<template>
	<div class="bottom h-[315px] backdrop-blur-sm w-[100%]">
		<template v-if="true">
			<city-picker />
			<weather/>
			<temperature/>
			<sun/>
			<wind/>
		</template>
		<div v-if="false">ЗАГРУЗКА...</div>
	</div>
</template>

<script>

import CityPicker from '../city-picker/city-picker.vue';
import Weather from '../weather/weather.vue';
import Sun from '../sun/sun.vue';
import Wind from '../wind/wind.vue';
import Temperature from '../temperature/temperature.vue';
import { useWeatherStore } from '../../stores/useWeatherStore';
export default {
	name: 'bottom',
	components: {
		CityPicker,
		Weather,
		Sun,
		Wind,
		Temperature
	},
	setup() {
		const weatherStore = useWeatherStore()

		return {
			weatherStore
		}
	}
}
</script>









<style lang='scss' src='./style.scss' scoped/>
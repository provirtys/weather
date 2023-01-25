<template>
	<div class="bottom min-h-[315px] max-h-[400px] overflow-auto backdrop-blur-sm w-[100%] flex flex-wrap  [&>div:not(:last-child)]:border-r-[2px] [&>div]:border-r-[var(--white-transparent)]">
		<template v-if="true">
			<city-picker class="lg:basis-2/6 md:basis-1/5 xsm:basis-1/2 2xsm:basis-[100%]" />
			<weather  class="lg:basis-1/6  md:basis-1/5 xsm:basis-1/2 2xsm:basis-[100%]"/>
			<temperature  class="lg:basis-1/6  md:basis-1/5 xsm:basis-1/3 2xsm:basis-[100%]"/>
			<sun  class="lg:basis-1/6  md:basis-1/5 xsm:basis-1/3 2xsm:basis-[100%]"/>
			<wind  class="lg:basis-1/6  md:basis-1/5 xsm:basis-1/3 2xsm:basis-[100%]"/>
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
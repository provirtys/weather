<template>
	<bottom-section>
		<template #header>Погода</template>
		<template #content>
			<div class="weather-content flex flex-col items-center text-lg">
				<img class="weather-icon w-[60px]"
					:src="iconHref" />
				<p class="weather-description text-sm mb-8">{{ description }}</p>
				<dl>
					<dt>Влажность</dt>
					<dd>{{ humidity }}</dd>
					<dt>Давление</dt>
					<dd>{{ pressure }}</dd>
				</dl>
			</div>
		</template>
	</bottom-section>
</template>

<script>

import { ref, watch, computed } from 'vue';
import VSelect from '../ui/v-select/v-select.vue';
import { useWeatherStore } from '../../stores/useWeatherStore'
import translateWeather from '../../helpers/translateWeather'

export default {
	name: 'weather',
	components: { VSelect },
	setup() {
		const weatherStore = useWeatherStore()
		const iconHref = ref('')
		const description = ref('')
		const humidity = ref('')
		const pressure = ref('')

		const getWeatherIcon = () => {
			let promise = fetch(
				`http://openweathermap.org/img/wn/${weatherStore.cityInfo.weather[0].icon}@2x.png`,
			)
			return promise
		}



		watch(() => weatherStore.cityInfo, info => {
			if (Object.keys(info).length) {
				getWeatherIcon().then(res => iconHref.value = res.url)
				description.value = translateWeather(info.weather[0].description).toUpperCase()
				humidity.value = info.main.humidity + '%'
				pressure.value = info.main.pressure + ' мм'
			}
		})

		return {
			weatherStore,
			iconHref,
			description,
			humidity,
			pressure,

		}
	}
}
</script>











<style lang='scss' src='./style.scss' scoped/>
<template>
	<bottom-section>
		<template #header>Температура</template>
		<template #content>
			<div class="temperature-content">
				<dl>
					<dt>Сейчас</dt>
					<dd>{{ temps?.temp }}</dd>
					<dt>Ощущается</dt>
					<dd>{{ temps?.feels_like }}</dd>
					<dt>Минимальная</dt>
					<dd>{{ temps?.temp_min }}</dd>
					<dt>Максимальная</dt>
					<dd>{{ temps?.temp_max }}</dd>
				</dl>
			</div>
		</template>
	</bottom-section>
</template>

<script>

import { computed } from 'vue';
import VSelect from '../ui/v-select/v-select.vue';
import { useWeatherStore } from '../../stores/useWeatherStore'
import getCelsius from '../../helpers/kelvinToCelsius';

export default {
	name: 'temperature',
	components: { VSelect },
	setup() {
		const weatherStore = useWeatherStore()

		const temps = computed(() => {
			let data = null
			if (Object.keys(weatherStore.cityInfo).length) {
				data = weatherStore.cityInfo.main
				data.feels_like = formatTemperature(getCelsius(data.feels_like))
				data.temp = formatTemperature(getCelsius(data.temp))
				data.temp_max = formatTemperature(getCelsius(data.temp_max))
				data.temp_min = formatTemperature(getCelsius(data.temp_min))
			}
			return data
		})

		const formatTemperature = temp => {
			temp = temp > 0 ? '+' + temp : temp
			return temp + ' °C'
		}

		return {
			weatherStore,
			temps
		}
	}
}
</script>









<style lang='scss' src='./style.scss' scoped/>
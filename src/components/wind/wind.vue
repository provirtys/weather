<template>
	<bottom-section>
		<template #header>Ветер</template>
		<template #content>
			<div class="wind-content">
				<dl>
					<dt>Направление</dt>
					<dd>{{ windData?.direction }}</dd>
					<dt>Скорость</dt>
					<dd>{{ windData?.speed }} м/c</dd>
					<dt>Порыв</dt>
					<dd>{{ windData?.gust }}</dd>
				</dl>
			</div>
		</template>
	</bottom-section>
</template>

<script>

import { computed } from '@vue/reactivity';
import VSelect from '../ui/v-select/v-select.vue';
import { useWeatherStore } from '../../stores/useWeatherStore'

export default {
	name: 'wind',
	components: { VSelect },
	setup() {
		const weatherStore = useWeatherStore()
		const windData = computed(() => {
			let data = null
			if(Object.keys(weatherStore.cityInfo).length){
				data = weatherStore.cityInfo.wind
				data.direction = getDirectionByDeg(data.deg)
				data.gust = data.gust ? data.gust + ' м/c' : '—'
			}
		return data
		})

		const getDirectionByDeg = deg => {
			switch (true) {
				case deg === 0 || deg === 360:
					return 'С'
				case deg === 90:
					return 'В'
				case deg === 180:
					return 'Ю'
				case deg === 270:
					return 'З'
				case deg > 0 || deg < 90:
					return 'С - З'
				case deg > 90 || deg < 180:
					return 'Ю - З'
				case deg > 180 || deg < 270:
					return 'Ю - В'
				case deg > 270 || deg < 360:
					return 'С - В'
				default:
					break;
			}
		}
		return {
			weatherStore,
			windData
		}
	}
}
</script>

<style lang='scss' src='./style.scss' scoped/>
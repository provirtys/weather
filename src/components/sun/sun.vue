<template>
	<bottom-section>
		<template #header>Солнце</template>
		<template #content>
			<div class="sun-content">
				<dl>
					<dt>Восход</dt>
					<dd>{{ sunData?.sunrise }}</dd>
					<dt>Закат</dt>
					<dd>{{ sunData?.sunset }}</dd>
				</dl>
			</div>
		</template>
	</bottom-section>
</template>

<script>

import { computed } from 'vue'; 
import VSelect from '../ui/v-select/v-select.vue';
import { useWeatherStore } from '../../stores/useWeatherStore'
import msToTime from '../../helpers/msToTime'

export default {
	name: 'sun',
	components: { VSelect },
	setup() {
		const weatherStore = useWeatherStore()
		const sunData = computed(() => {
			let data = null
			if(Object.keys(weatherStore.cityInfo).length){
				data = weatherStore.cityInfo.sys
				data.sunrise = msToTime(data.sunrise)
				data.sunset = msToTime(data.sunset)
			}
			return data
		})

		return {
			weatherStore,
			sunData
		}
	}
}
</script>





<style lang='scss' src='./style.scss' scoped/>
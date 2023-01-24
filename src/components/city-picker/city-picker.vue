<template>
	<bottom-section>
		<template #content>
			<div class="city-picker flex justify-between">
				<v-select class="city-picker__select"
					:list="citiesList"
					v-model="weatherStore.selectedCity" />
				<div class="city-picker__time text-5xl text-center">
					<p class="mb-5">{{ localDate }}</p>
					<p class="mb-8">{{ localTime }}</p>
					<v-button color="green" @click="weatherStore.addToFavorite()" v-if="!weatherStore.favoriteCities.find(city => city.name === weatherStore.selectedCity.name)"><span class="text-2xl">+</span> В избранное</v-button>
					<v-button color="red" @click="weatherStore.removeFromFavorite()" v-else><span class="text-2xl">-</span> Из избранного</v-button>
				</div>
			</div>
		</template>
	</bottom-section>
</template>

<script>

import { ref, watch, computed } from 'vue';
import VSelect from '../ui/v-select/v-select.vue';
import { useWeatherStore } from '../../stores/useWeatherStore'
import VButton from '../ui/v-button/v-button.vue';

export default {
	name: 'city-picker',
	components: { VSelect, VButton },
	setup() {
		const weatherStore = useWeatherStore()
		const myOffset = ref(new Date().getTimezoneOffset() * 60)
		const localOffset = ref(0)
		const localDate = ref(null)
		const localTime = ref(null)
		const dateOptions = {
			month: "short",
			day: "numeric",
			weekday: 'short',
		}
		const timeOptions = {
			hour: 'numeric',
			minute: 'numeric'
		}
		const citiesList = computed(() => weatherStore.selectedTab.id === 0 ? weatherStore.citiesListSorted : weatherStore.favoriteCities)

		watch(() => weatherStore.cityInfo, info => {
			if (Object.keys(info).length) {
				localOffset.value = info.timezone
				const localDT = new Date(new Date().getTime() + (localOffset.value + myOffset.value) * 1000)
				localDate.value = localDT.toLocaleDateString('ru-RU', dateOptions)
				localTime.value = localDT.toLocaleTimeString('ru-RU', timeOptions)
			}
		})


		return {
			weatherStore,
			localDate,
			localTime,
			citiesList
		}
	}
}
</script>















<style lang='scss' src='./style.scss' scoped/>
import { ref, onMounted, watch, computed } from "vue"
import { defineStore } from "pinia"

export const useWeatherStore = defineStore("weather", () => {
  const citiesList = ref([
    {
      title: "Москва",
      name: "Moscow",
    },
    {
      title: "Пермь",
      name: "Perm",
    },
        {
      title: "Санкт-Петербург",
      name: "Saint Petersburg",
    },
    {
      title: "Лондон",
      name: "London",
    },
    {
      title: "Чикаго",
      name: "	Chicago",
    },
    {
      title: "Лос-Анжелес",
      name: "Los Angeles",
    },
    {
      title: "Берлин",
      name: "Berlin",
    },
    {
      title: "Нью-Йорк",
      name: "New York",
    },
    {
      title: "Рим",
      name: "Rome",
    },
    {
      title: "Киев",
      name: "Kyiv",
    },
    {
      title: "Минск",
      name: "Minsk",
    },
    {
      title: "Астана",
      name: "Nur-Sultan",
    },
    {
      title: "Таллин",
      name: "Tallinn",
    },
  ])

	const citiesListSorted = computed(() => {
		return citiesList.value.sort((a,b) => a.title > b.title ? 1 : -1)
	})

	const selectedCity = ref(citiesList.value[0])
	const loading = ref(false)
  const tabs = [
    {
      id: 0,
      title: "Все",
      name: "all",
    },
    {
      id: 1,
      title: "Избранное",
      name: "favorite",
    },
  ]
	const selectedTab = ref(tabs[0])
	const cityInfo = ref({})
	const favoriteCities = ref([])
	const cityImage = ref('')

	const getWeather = () => {
		let promise = fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.value.name}&appid=b5f7f97bc3303b50e9eb2fa20027f120`,
		)
		return promise
	}

	const updateInfo = () => {
		getWeather().then(res => res.json().then(json => {
			loading.value = false
			cityInfo.value = json
		}))
		getImage().then(res => res.json().then(json => {
			cityImage.value = json.photos.photo[0].url_l
		}))
	}
	const addToFavorite = () => {
		favoriteCities.value.push(selectedCity.value)
		localStorage.setItem('cities', JSON.stringify(favoriteCities.value))
	}
	const removeFromFavorite = () => {
		favoriteCities.value.splice(favoriteCities.value.findIndex(city => city.name === selectedCity.value.name),1)
		localStorage.setItem('cities', JSON.stringify(favoriteCities.value))
		selectedTab.value.id === 1 && favoriteCities.value.length ? selectedCity.value = favoriteCities.value[0] : null
	}

	watch(selectedCity, city => {
		loading.value = true
		Object.keys(city).length ? 	updateInfo() : null
	})

	watch(selectedTab, val => {
		selectedCity.value = val.id === 0 ? citiesListSorted.value[0] : favoriteCities.value.length ? favoriteCities.value[0] : {}
	})

	onMounted(() => {
		selectedCity.value = citiesList.value[0]
		updateInfo()
		localStorage.getItem('cities') ? favoriteCities.value = JSON.parse(localStorage.getItem('cities')) : null
	})

	const getImage = async () => {
		const promise = fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c7acb092011ff50b3d8b88ee7c13413&text=${selectedCity.value.name}&sort=relevance&safe_search=1&content_types=0&media=photos&extras=url_o%2C+url_l&per_page=1&page=1&format=json&nojsoncallback=1`)
		return promise
	}


  return {
    citiesList,
    tabs,
		selectedTab,
		selectedCity,
		loading,
		cityInfo,
		citiesListSorted,
		favoriteCities,
		addToFavorite,
		removeFromFavorite,
		cityImage
  }
})

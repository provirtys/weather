const translateWeather = name => {
	switch (name) {
		case 'clear sky':
			return 'ясно'
		case 'few clouds':
			return 'малооблачно'
		case 'scattered clouds':
			return 'переменная облачность'
		case 'broken clouds':
			return 'разбитые облака'
		case 'shower rain':
			return 'проливной дождь'
		case 'rain':
			return 'дождь'
		case 'thunderstorm':
			return 'гроза'
		case 'snow':
			return 'снег'
		case 'mist':
			return 'туман'
		case 'overcast clouds':
			return 'пасмурно'
		case 'light rain':
			return 'слабый дождь'
		case 'heavy snow':
			return 'сильный снег'
		case 'smoke':
			return 'туман'
	
		default:
			return name
	}
}
export default translateWeather
const APP_ID = '2aefb62f2da28d10aa91e1331065d043';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const kelvinToCelcius = (k) => {
	return k - 273.15;
}

const url = new URL(baseUrl);
console.log('hello world');
url.searchParams.append('APPID', APP_ID);
url.searchParams.append('q', 'San Francisco');

console.log(url.toString());
$.get( url.toString(), ( data ) => {
	console.log(data);
	const { main: { temp } } = data;
	const tempInCelcius = kelvinToCelcius(temp);
	$( "#weather-sanfrancisco" ).text(tempInCelcius);
});

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '56399f1487mshb92e6472b0afe01p1516b4jsndbf7daee1eb6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) =>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(Response => Response.json())
	.then((response) => {
		console.log(response)
		// Cloud_pct.innerHTML = response.Cloud_pct
		Feels_like.innerHTML = response.feels_like
		Humidity.innerHTML = response.humidity
		Humidity2.innerHTML = response.humidity
		Max_temp.innerHTML = response.max_temp
		Min_temp.innerHTML = response.min_temp
		Sunrise.innerHTML = response.sunrise
		Sunset.innerHTML = response.sunset
		Temp.innerHTML = response.temp
		// Wind_degrees.innerHTML = response.Wind_degrees
		Wind_speed.innerHTML = response.wind_speed
	})

	.catch(err => console.error(err))

}

submit.addEventListener(
	"click", (e)=>{
		e.preventDefault()
		getweather(city.value)
	}
)

getweather("Delhi");

function changeUnit() {
    const temperatureInput = document.getElementById("input-temp").value;
    const unit = document.getElementById("unit").value;
    const output11 = document.getElementById("output1-1");
    const output12 = document.getElementById("output1-2");
    const output21 = document.getElementById("output2-1");
    const output22 = document.getElementById("output2-2");


    if (unit == "celsius") {
        output12.innerHTML = `°F`;
        output22.innerHTML = `K`;
        if(temperatureInput != ""){
            const fahrenheit = (parseFloat(temperatureInput) * 9/5) + 32;
            const kelvin = parseFloat(temperatureInput) + 273.15;
            output11.innerHTML = fahrenheit;
            output21.innerHTML = kelvin;
        }
    } else if (unit == "fahrenheit") {
        output12.innerHTML = `°C`;
        output22.innerHTML = `K`;
        if(temperatureInput != ""){
            const celsius = (parseFloat(temperatureInput) - 32) * 5/9;
            const kelvin = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
            output11.innerHTML = celsius;
            output21.innerHTML = kelvin;
        }
    } else if (unit == "kelvin") {
        output12.innerHTML = `°C`;
        output22.innerHTML = `°F`;
        if(temperatureInput !=""){
            const celsius = parseFloat(temperatureInput) - 273.15;
            const fahrenheit = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
            output11.innerHTML = celsius;
            output21.innerHTML = fahrenheit;
        }
    }
}
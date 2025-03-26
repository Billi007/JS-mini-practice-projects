const api_key = "cbfbf3052f5932c642c2e5771b6582fb"
const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}&units=metric&q=`

const searhBox = document.querySelector('.input');
const searhBtn = document.querySelector('.search');

async function fecthWeatherData(city) {
const response = await fetch(api_url + city);
const data = await response.json();
console.log("data: " ,data);


document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector('.wind_kilo').innerHTML = Math.round( data.wind.speed) + "km/h";


}

searhBtn.addEventListener('click', function(){
    fecthWeatherData(searhBox.value)
});
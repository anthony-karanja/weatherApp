const load=document.getElementById('load')
const weather=document.getElementById('weather')
const temperature=document.getElementById('temperature')
const hourlyForecast=document.getElementById('hourly-forecast')
const city=document.getElementById('city').value;
const apikey='f29f38ea5f8777c42742d80d26cf7426'
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
load.addEventListener('click', ()=>{
    const location=locationInput.value;
    if(location){
        getweather(location);
    }
})

function getweather(){   

    if (!city){
        alert('please enter a city');
        return
    }  
}
function getweather(){
    fetch (currentWeatherUrl)
    .then(response =>response.json())
    .then(data =>{
        description.textContent=data.weather[0].description;
        location.textContent=data.name;
    })
 
            const cityName=data.name;
            const temperature=Math.round(data.main.temp);
            const temperatureHTML=`<p>${temperature}</p>`;
            const weatherHTML=`<p>${cityName}</P>`

            .catch(error=>{
                console.error('error fetching currentweather:',error);
                alert('error fetching current weather.Try again.',error);
            });
};
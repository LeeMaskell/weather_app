export function updateData(dataObject) {
    let convertToCelsius = (temperature) => {
        return Math.round(temperature - 273.15);
    };
    let date = new Date();
    document.getElementById('currentDate').innerText = date.toDateString();
    document.getElementById('temp').innerText = convertToCelsius(dataObject.main.temp) + "°"; 
    document.getElementById('tempMax').innerText = `Max: ${convertToCelsius(dataObject.main.temp_max)}°`;
    document.getElementById('tempMin').innerText = `Min:  ${convertToCelsius(dataObject.main.temp_max)}°`;
    document.getElementById('city').innerText = dataObject.name;
    document.getElementById('weather').innerText = `Weather:     ${dataObject.weather[0].description}`;
    if(dataObject.rain == undefined) { // checks if rain is present in the data object
        document.getElementById('rain').innerText = `Rain is not forecast`;
    } else {
        document.getElementById('rain').innerText = `Rain: ${dataObject.rain["1h"]}mm`;
    };
    document.getElementById('humidity').innerText = `Humidity:     ${dataObject.main.humidity}%`;
    document.getElementById('windSpeed').innerText = `Wind Speed:     ${dataObject.wind.speed}km/h`;
}
 
export default updateData;
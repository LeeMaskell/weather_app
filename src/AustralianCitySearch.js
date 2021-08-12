import { updateData } from './UpdateData.js';

export const australianCitySearch = (city) => {
    console.log(city);
    const apiKey = "cee839a6ffd7f7659403e88ba136e5fd";
    let input = city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`).then((response) => {
            console.log('resolved:', response);
            return response.json(); 
        }).then(data => {
            console.log(data);
            updateData(data); 
        }).catch((err) => {
            console.log('rejected:');
        });
};

export default australianCitySearch;
import { updateData } from './UpdateData.js';

export const searchButton = () => {
    let search = document.getElementById("searchCity");
    const apiKey = "cee839a6ffd7f7659403e88ba136e5fd";
    let input = search.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`).then((response) => {
            console.log('resolved:', response);
            return response.json(); // parses data into a JS object
        }).then(data => {
            console.log(data);
            updateData(data); // sends returned object data to below function
        }).catch((err) => {
            console.log('rejected:');
        });
        document.getElementById("searchCity").value = '';
};

export default searchButton;
import{ australianCitySearch } from "./AustralianCitySearch.js";

const PresetCities = () => {
    return ( 
        <div id="presetCities">
            <h3 id="sydney" class="details"><a href="#" onClick={() => australianCitySearch("Sydney")}>Sydney</a></h3>
            <h3 id="melbourne" class="details"><a href="#" onClick={() => australianCitySearch("Melbourne, Victoria, Australia")}>Melbourne</a></h3>
            <h3 id="brisbane" class="details"><a href="#" onClick={() => australianCitySearch("Brisbane")}>Brisbane</a></h3>
            <h3 id="adelaide" class="details"><a href="#" onClick={() => australianCitySearch("Adelaide")}>Adelaide</a></h3>
            <h3 id="perth" class="details"><a href="#" onClick={() => australianCitySearch("Perth")}>Perth</a></h3>
            <h3 id="hobart" class="details"><a href="#" onClick={() => australianCitySearch("Hobart")}>Hobart</a></h3>
            <h3 id="darwin" class="details"><a href="#" onClick={() => australianCitySearch("Darwin")}>Darwin</a></h3>
        </div>
     );
}
 
export default PresetCities;
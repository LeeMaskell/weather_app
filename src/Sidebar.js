import SearchInput from './SearchInput';
import PresetCities from './PresetCities';
import WeatherDetails from './WeatherDetails';

const Sidebar = () => {
    return ( 
        <div id="searchDisplay" style={{ backgroundColor: "rgba(1,1,1,0.3)" }}>
            <SearchInput />
            <PresetCities />
            <WeatherDetails />
    </div>
     );
}
 
export default Sidebar;


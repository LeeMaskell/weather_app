import { searchButton } from './SearchButton.js';

export const SearchInput = () => {
    return ( 
        <div id="searchInput">
            <input type="text" id="searchCity" placeholder="Enter Location" />
            <button class="btn" id="submit" onClick={searchButton} >Search</button>
        </div>
     );
}
 
export default SearchInput;
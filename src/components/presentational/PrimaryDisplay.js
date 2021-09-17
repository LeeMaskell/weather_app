const PrimaryDisplay = () => {
    return ( 
        <div id="primaryDisplay">
        <div id="summaryDisplay">
            <div id="tempDataDisplay">
                <h1 id="temp"></h1>
                <div id="tempExtremes">
                    <h3 id="tempMax" class="extreme"></h3>
                    <h3 id="tempMin" class="extreme"></h3>
                </div>
            </div>
            <div id="conditionsDataDisplay">
                <h2 id="city"></h2>
                <div id="currentDate"></div>
            </div>
        </div>
    </div>
     );
}
 
export default PrimaryDisplay;
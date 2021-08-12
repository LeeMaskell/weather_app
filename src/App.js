import PrimaryDisplay from './PrimaryDisplay';
import Sidebar from './Sidebar';


function App() {
  return (
    <div id="body" style={{ backgroundImage: "url(/darkClouds.jpg)", 
                            backgroundRepeat: "no-repeat", 
                            backgroundPosition: "center", 
                            backgroundSize: "cover",
                            height: "100vh"}}>
      <PrimaryDisplay />
      <Sidebar />
    </div>
  );
}

export default App;

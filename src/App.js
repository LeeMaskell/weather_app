import PrimaryDisplay from './components/presentational/PrimaryDisplay';
import Sidebar from './components/presentational/Sidebar';
import clouds from './resources/darkClouds.jpg';


function App() {
  
  return (
    <div id="body" style={{ backgroundImage: `url(${clouds})`, 
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

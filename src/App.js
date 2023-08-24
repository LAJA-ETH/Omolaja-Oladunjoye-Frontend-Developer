import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import RocketsGrid from "./components/rockets";
import DataGrid from "./components/DataGrid";

function App() {
  return (
    <div className="from-red-800 via-red-950 overflow-hidden to-black bg-gradient-to-br px-10 md:px-28 font-montserrat">
      <Navbar />
      <Banner />
      <DataGrid />
    </div>
  );
}

export default App;

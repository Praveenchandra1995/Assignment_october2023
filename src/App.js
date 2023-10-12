import "./App.css";
import Bodypart1 from "./Components/Bodypart1";
import Bodypart2 from "./Components/Bodypart2";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bodypart1 />
      <Bodypart2 />
    </div>
  );
}

export default App;

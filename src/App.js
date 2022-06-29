import logo from "./logo.svg";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div className="h-screen">
      <div className="h-fit">
        <Navbar />
      </div>
      <div className="h-full flex items-center">
        <Home />
      </div>
    </div>
  );
}

export default App;

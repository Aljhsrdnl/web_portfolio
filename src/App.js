import logo from "./logo.svg";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Home />
    </div>
  );
}

export default App;

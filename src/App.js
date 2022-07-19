import logo from "./logo.svg";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <Home />
      <div className="">
        <Project />
        <Skills />
        <Contact />
      </div>
      <footer className="h-24 bg-primary-900">
        <div className="  max-w-7xl mx-auto h-full flex justify-center">
          <h1 className="text-white text-center self-center ">
            2022 © Alejah T. Sardiniola • All Rights Reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default App;

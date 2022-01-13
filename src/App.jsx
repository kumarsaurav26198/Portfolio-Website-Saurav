import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Topbar from "./Components/Topbar/Topbar";
import Work from "./Components/Work/Work";
import "./App.scss";
// import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

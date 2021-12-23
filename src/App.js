import Topbar from "./components/topbar/topBar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Contact/>

      </div>
    </div>



  );
}

export default App;

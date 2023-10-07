import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import Skill from "./component/Skill";

function App() {
  return (
    <div className=" bg-black w-screen">
      <Nav />
      <Banner />
      <About />
      <Portfolio />
      <Skill />
      <Contact/>
    </div>
  );
}

export default App;

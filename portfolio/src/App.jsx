import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Experiances from "./pages/Experiances";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className=" h-full gap-3 bg-black/50 w-full mx-auto
    ">
      <div className="w-[85%] mx-auto grid grid-rows-[_.1fr_.9fr] gap-3">
        <Header />
        <div className="grid grid-cols-[_.7fr_.3fr] gap-5">
          <Home />
          <CallToAction />
        </div>
        <Services />
        <Experiances/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;

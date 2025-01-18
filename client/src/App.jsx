import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Experiances from "./pages/Experiances";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className=" h-full gap-3 bg-black/50 w-full mx-auto
    ">
      <div className="w-[100%] p-3 lg:p-0 lg:w-[85%] mx-auto grid grid-rows-[_.1fr_.9fr] gap-3">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[_.7fr_.3fr] gap-5">
          <Home />
          <CallToAction />
        </div>
        <Services />
        <Experiances/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

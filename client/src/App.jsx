import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Experiances from "./pages/Experiances";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <div
      className=" h-full gap-3 bg-black/50 w-full mx-auto
    "
    >
      <div className="w-[100%] p-3 lg:p-0 lg:w-[75%] mx-auto">
        <Header />
        <Home />
        <Services />
        <Experiances />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;

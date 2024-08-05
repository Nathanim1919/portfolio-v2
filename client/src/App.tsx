import { HomePage } from "./pages/Home"
import './App.css'
import { WorksPage } from "./pages/Works"
import { AboutmePage } from "./pages/Aboutme"
import {Footer} from "./pages/Footer.tsx";
function App() {

  return (
    <>
      <HomePage/>
      <AboutmePage/>
      <WorksPage/>
        <Footer/>
    </>
  )
}

export default App

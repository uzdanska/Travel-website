import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar  from './components/Navbar';
import DestinationsListPage from './pages/DestinationsListPage';
import Hero from './components/Hero';
import OurService from './components/OurService'
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white ">
        <div className="bg-hero-pattern h-screen bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <OurService />
      </div>
    </BrowserRouter>
    //   <Navbar />
    //   <DestinationsListPage />
    // </>
  )
}

export default App

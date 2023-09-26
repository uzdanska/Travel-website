import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar  from './components/Navbar';
import DestinationsListPage from './pages/DestinationsListPage';
import Hero from './components/Hero';
import OurService from './components/OurService';
import ServiceDetails from './components/ServiceDetails';
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#d4d2d285] ">
        <div className="bg-hero-pattern h-screen bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <OurService />
        <ServiceDetails />
      </div>
    </BrowserRouter>
    //   <Navbar />
    //   <DestinationsListPage />
    // </>
  )
}

export default App

import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, OurService, ServiceDetails, PopularDestination } from './components'
import DestinationsListPage from './pages/DestinationsListPage';
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#d4d2d290] ">
        <div className="bg-hero-pattern h-screen bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <OurService />
        <ServiceDetails />
        <PopularDestination/>
      </div>
    </BrowserRouter>
  )
}

export default App

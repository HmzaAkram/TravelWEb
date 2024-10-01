import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Accommodations from './components/Accommodations.jsx';
import AccommodiationDetail from './components/AccommodiationDetail.jsx';
import DestinationsDetail from './components/DestinationsDetail.jsx';
import Transport from './components/Transport.jsx';
import TransportDetail from './components/TransportDetail.jsx';
import Reviews from './components/Reviews.jsx';
import './App.css';
import DestContainer from './components/DestContainer.jsx';
import CollapsibleExample from './components/Navbar.jsx';
import Slider from './components/Slider.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Family from './components/family.jsx';
import Adventure from './components/Adventure.jsx';
import Luxury from './components/Luxury.jsx';
import FamilyDetailPage from './components/familyDetailPage.jsx';
import About from './components/About.jsx';
import AdventureDetail from './components/AdventureDetail.jsx';
import LuxuryDetail from './components/LuxuryDetail.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Header />
      <Slider />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<CollapsibleExample />} />
          <Route path="/Destinations" element={<DestContainer />} />
          <Route path="/DestinationsDetail/:id" element={<DestinationsDetail />} />
          <Route path="/Accommodations" element={<Accommodations />} />
          <Route path="/AccommodiationDetail/:id" element={<AccommodiationDetail />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/TransportDetail/:id" element={<TransportDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/family" element={<Family />} />
          <Route path="/Adventure" element={<Adventure />} />
          <Route path="/Luxury" element={<Luxury />} />
          <Route path="/familyDetail/:catg/:id" element={<FamilyDetailPage />} />
          <Route path="/adventurePackage/:catg/:id" element={<FamilyDetailPage />} />
          <Route path="/luxurypackage/:catg/:id" element={<FamilyDetailPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

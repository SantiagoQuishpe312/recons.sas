import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import WasteCounter from './pages/WastCounter';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />

        <main className="flex-grow p-6 md:p-12 bg-white shadow-lg rounded-lg mx-4 my-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/dashboards" element={<WasteCounter />} />

          </Routes>
        </main>
        <FloatingWhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

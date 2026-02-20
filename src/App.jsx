import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Capabilities from './pages/Capabilities';
import Samples from './pages/Samples';
import Contact from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

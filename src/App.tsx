import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import References from './components/References';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <References />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

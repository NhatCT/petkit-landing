import Hero from './components/Hero';
import Features from './components/Features';
import Specifications from './components/Specifications';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen">
      <DarkModeToggle />
      <Hero />
      <Features />
      <Specifications />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

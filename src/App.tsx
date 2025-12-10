import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Videos from './components/Videos';
import Tour from './components/Tour';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Videos />
      <Tour />
      <Footer />
    </div>
  );
}

export default App;

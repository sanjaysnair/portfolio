import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import YouTube from './components/YouTube';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <YouTube />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

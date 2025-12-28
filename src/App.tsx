import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

